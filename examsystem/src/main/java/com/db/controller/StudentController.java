package com.db.controller;

import com.db.dao.*;
import com.db.model.*;
import net.sf.json.JSONArray;
import net.sf.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.List;


@Controller
@RequestMapping("/student")
public class StudentController {

    @Autowired
    private StudentMapper studentDao;
    @Autowired
    private TeacherMapper teacherDao;
    @Autowired
    private PapersMapper papersDao;
    @Autowired
    private StudentPapersMapper studentPapersDao;


    SimpleDateFormat formatter = new SimpleDateFormat("yyyy-MM-dd");
    SimpleDateFormat formatter2 = new SimpleDateFormat("yyyy-MM-dd HH:mm");



    @RequestMapping(value = "/changePassword",method = {RequestMethod.GET,RequestMethod.POST})
    @ResponseBody
    public Object changePassword(@RequestParam(value = "oldpassword") String oldpassword,
                                 @RequestParam(value = "newpassword") String newpassword,
                                 HttpServletRequest request){
        JSONObject result=new JSONObject();
        HttpSession session=request.getSession();
        String id = session.getAttribute("username").toString();
        Student student=studentDao.selectByPrimaryKey(id);
        if (student.getStudentPassword().equals(oldpassword)){
            student.setStudentPassword(newpassword);
            studentDao.updateByPrimaryKey(student);
            result.put("code","success");
            return result;
        }else{
            result.put("code","fail");
            return result;
        }


    }

    @RequestMapping(value = "/getInfo",method = {RequestMethod.GET,RequestMethod.POST})
    @ResponseBody
    public Object getInfo(HttpServletRequest request){
        JSONObject result=new JSONObject();
        HttpSession seesion=request.getSession();
        String id =seesion.getAttribute("username").toString();
        Student student=studentDao.selectByPrimaryKey(id);
        result.put("first_name",student.getStudentName());
        result.put("StudentNumber",student.getStudentId());
        result.put("sex",student.getSex());
        result.put("college",student.getInstitute());
        result.put("grade",student.getClassGrade());
        result.put("class",student.getClassName());
        result.put("address",student.getAddress());
        result.put("birthday",formatter.format(student.getBirthdate()));
        result.put("phoneNumbr",student.getPhone());
        result.put("email",student.geteMail());
        result.put("code","success");
        return result;

    }


    @RequestMapping(value = "/changeInfo",method = {RequestMethod.GET,RequestMethod.POST})
    @ResponseBody
    public Object changeInfo(@RequestParam(value = "first_name",required = false) String first_name,
                                 @RequestParam(value = "StudentNumber",required = false) String StudentNumber,
                             @RequestParam(value = "sex",required = false) String sex,
                             @RequestParam(value = "college",required = false) String college,
                             @RequestParam(value = "grade",required = false) String grade,
                             @RequestParam(value = "class",required = false) String sclass,
                             @RequestParam(value = "address",required = false) String address,
                             @RequestParam(value = "birthday",required = false) String birthday,
                             @RequestParam(value = "phoneNumbr",required = false) String phoneNumbr,
                             @RequestParam(value = "email",required = false) String email,
                                 HttpServletRequest request) throws ParseException {
        HttpSession session=request.getSession();
        JSONObject result=new JSONObject();
        if (StudentNumber.equals(session.getAttribute("username").toString())){
            Student student=studentDao.selectByPrimaryKey(StudentNumber);
            student.setAddress(address);
            student.setBirthdate(formatter.parse(birthday));
            student.setClassGrade(grade);
            student.setClassName(sclass);
            student.seteMail(email);
            student.setInstitute(college);
            student.setPhone(phoneNumbr);
            student.setSex(sex);
            student.setStudentName(first_name);
            studentDao.updateByPrimaryKey(student);

            result.put("code","success");
            return result;
        }else {
            result.put("code","fail");
            return result;
        }

    }

//    var ExamList = [
//    {
//        "Type" : "done",
//            "title" : "数据库测试1",
//            "start" : "2018-09-01 22:08",
//            "end" : "2018-09-01 23:08",
//            "id" : "123",
//            "grade" : "85",
//    },
//{
//    "Type" : "do",
//        "title" : "数据库测试2",
//        "start" : "2018-09-01 22:08",
//        "end" : "2018-09-01 23:08",
//        "id" : "456",
//}];
//{"Type":"do",
//        "title":"第一章至第三章",
//        "start":"2018-12-06 09:30",
//        "end":"2018-12-06 10:00",
//        "id":"1"}

    @RequestMapping(value ="/getExamList",method = {RequestMethod.GET,RequestMethod.POST})
    @ResponseBody
    public Object getExamList(HttpServletRequest request){
        HttpSession session=request.getSession();
        String id=session.getAttribute("username").toString();
        JSONArray result=new JSONArray();
        Student student=studentDao.selectByPrimaryKey(id);
        List<Papers> papersDoList=papersDao.selectByPrimaryKeyList(student.getClassName(),student.getClassGrade());

        List<StudentPapers> papersDoneList=studentPapersDao.selectByPrimaryKeyList(id);

        for (Papers p:papersDoList){
            JSONObject jsonObject=new JSONObject();
            jsonObject.put("Type","do");
            jsonObject.put("title",p.getPaperName());
            jsonObject.put("start",formatter2.format(p.getStartTime()));
            jsonObject.put("end",formatter2.format(p.getStopTime()));
            jsonObject.put("id",String.valueOf(p.getPaperId()));
            result.add(jsonObject);
        }
        for (StudentPapers sp:papersDoneList){
            JSONObject jsonObject=new JSONObject();
            Papers papers=papersDao.selectByPrimaryKey(sp.getPaperId());
            jsonObject.put("Type","done");
            jsonObject.put("title",papers.getPaperName());
            jsonObject.put("start",formatter2.format(papers.getStartTime()));
            jsonObject.put("end",formatter2.format(papers.getStopTime()));
            jsonObject.put("id",String.valueOf(papers.getPaperId()));
            jsonObject.put("grade",String.valueOf(sp.getGrade()));
            result.add(jsonObject);
        }
        System.out.println(result);
        return result;



    }
}
