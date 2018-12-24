package com.db.controller;

import com.db.dao.StudentMapper;
import com.db.model.Student;
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


@Controller
public class StudentController {

    @Autowired
    private StudentMapper studentDao;


    SimpleDateFormat formatter = new SimpleDateFormat("yyyy-MM-dd");

    @RequestMapping(value = "/logout",method = {RequestMethod.GET,RequestMethod.POST})
    @ResponseBody
    public Object logout(HttpServletRequest request){
        JSONObject result=new JSONObject();
        HttpSession seesion=request.getSession();
        String id =seesion.getAttribute("username").toString();
        if (id!=null){
            result.put("code","success");
            seesion.invalidate();
            return result;
        }else {
            result.put("code","fail");
            return result;
        }

    }


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

}
