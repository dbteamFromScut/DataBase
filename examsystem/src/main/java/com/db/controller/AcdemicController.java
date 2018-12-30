package com.db.controller;


import com.db.dao.StudentMapper;
import com.db.dao.StudentTeacherMapper;
import com.db.dao.TeacherMapper;
import com.db.model.Student;
import com.db.model.StudentTeacher;
import com.db.model.Teacher;
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
import java.util.Date;
import java.util.List;

@Controller
@RequestMapping("/acdemic")
public class AcdemicController {

    @Autowired
    private TeacherMapper teacherDao;
    @Autowired
    private StudentMapper studentDao;
    @Autowired
    private StudentTeacherMapper studentTeacherDao;


    SimpleDateFormat formatter = new SimpleDateFormat("yyyy-MM-dd");


    @RequestMapping("/addNewTeacher")
    @ResponseBody
    public Object addTeacher(@RequestParam("name") String name,@RequestParam("sex") String sex,
                             @RequestParam("id") String id,@RequestParam("college") String college){

        JSONObject result=new JSONObject();
        if (teacherDao.getCount(id)>0){
            result.put("code","fail");
            result.put("msg","该教师ID已存在");
            return result;
        }
        Teacher teacher=new Teacher();
        teacher.setInstitute(college);
        teacher.setSex(sex);
        teacher.setTeacherName(name);
        teacher.setTeacherId(id);
        try {
            teacherDao.insertSelective(teacher);
            result.put("code","success");
            result.put("msg","已成功保存");

        }catch (Exception e){
            result.put("code","fail");
            result.put("msg","请重新上传");
        }
        return result;
    }


    @RequestMapping("/getTeacherList")
    @ResponseBody
    public Object getTeacherList(){
        JSONArray result=new JSONArray();
        List<Teacher> teachersList=teacherDao.selectByPrimaryKeyList();
        for (Teacher t:teachersList){
            JSONObject j=new JSONObject();
            j.put("name",t.getTeacherName());
            j.put("id",t.getTeacherId());
            j.put("sex",t.getSex());
            j.put("college",t.getInstitute());
            result.add(j);
        }
        return result;
    }

    @RequestMapping(value = "/getStudentList", method = {RequestMethod.GET, RequestMethod.POST})
    @ResponseBody
    public Object getSelectedStudents(@RequestParam("classgrade") String classgrade,
                                      @RequestParam("classname") String classname, HttpServletRequest request) {
        JSONArray result = new JSONArray();
        if (!classgrade.equals("")&&!classname.equals("")){
            List<Student> studentList = studentDao.selectByPrimaryKeyList(classname, classgrade);
            for (Student s : studentList) {
                JSONObject jsonObject = new JSONObject();
                jsonObject.put("name", s.getStudentName());
                jsonObject.put("id", s.getStudentId());
                jsonObject.put("sex", s.getSex());
                jsonObject.put("college", s.getInstitute());
                jsonObject.put("class_grade", s.getClassGrade());
                jsonObject.put("class_name", s.getClassName());
                result.add(jsonObject);
            }
        }
        return result;
    }

    @RequestMapping(value = "/teacherinfo", method = {RequestMethod.GET, RequestMethod.POST})
    @ResponseBody
    public Object getInfo(@RequestParam("id")String tid,HttpServletRequest request) {
        JSONObject result = new JSONObject();
        String id = tid;
        Teacher teacher = teacherDao.selectByPrimaryKey(id);
        result.put("name", teacher.getTeacherName());
        result.put("id", teacher.getTeacherId());
        result.put("sex", teacher.getSex());
        result.put("college", teacher.getInstitute());
        result.put("address", teacher.getAddress());
        result.put("birthday", formatter.format(teacher.getBirthdate()));
        result.put("phone", teacher.getPhone());
        result.put("email", teacher.geteMail());
        result.put("code", "success");
        return result;

    }

    @RequestMapping("/saveTeacher")
    @ResponseBody
    public Object changeTeacherInfo(@RequestParam("id")String id,@RequestParam("name")String name,
                                    @RequestParam("sex")String sex,@RequestParam("college")String college,
                                    @RequestParam("address")String address,@RequestParam("birthday")String birthday,
                                    @RequestParam("phone")String phone,@RequestParam("id")String email) throws ParseException {
        JSONObject result=new JSONObject();
        System.out.println(id);
        Teacher teacher=teacherDao.selectByPrimaryKey(id);
        teacher.setTeacherName(name);
        teacher.setSex(sex);
        teacher.setInstitute(college);
        teacher.setAddress(address);
        teacher.setBirthdate(formatter.parse(birthday));
        teacher.setPhone(phone);
        teacher.seteMail(email);
        teacherDao.updateByPrimaryKeySelective(teacher);
        result.put("code","success");

        return result;

    }

    @RequestMapping(value = "/getTeacherClassList", method = {RequestMethod.GET, RequestMethod.POST})
    @ResponseBody
    public Object getSelectedStudents() {
        JSONArray result=new JSONArray();
        List<StudentTeacher> list=studentTeacherDao.selectByPrimaryKeyList();
        for (StudentTeacher st:list){
            JSONObject j=new JSONObject();
            Teacher t=teacherDao.selectByPrimaryKey(st.getTeacherId());
            j.put("teacher_name",t.getTeacherName());
            j.put("teacher_id",st.getTeacherId());
            j.put("class_grade",st.getClassGrade());
            j.put("class_name",st.getClassName());
            result.add(j);
        }

        return result;

    }
}
