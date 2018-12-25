package com.db.controller;

import com.db.dao.QuestionsMapper;
import com.db.dao.StudentMapper;
import com.db.dao.StudentTeacherMapper;
import com.db.dao.TeacherMapper;
import com.db.model.Questions;
import com.db.model.Student;
import com.db.model.StudentTeacher;
import com.db.model.Teacher;
import com.fasterxml.jackson.databind.jsonFormatVisitors.JsonObjectFormatVisitor;
import net.sf.json.JSON;
import net.sf.json.JSONArray;
import net.sf.json.JSONObject;
import org.aspectj.weaver.patterns.TypePatternQuestions;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import java.text.SimpleDateFormat;
import java.util.List;

@Controller
@RequestMapping("/teacher")
public class TeacherController {

    @Autowired
    private TeacherMapper teacherDao;

    @Autowired
    private StudentTeacherMapper studentTeacherDao;

    @Autowired
    private StudentMapper studentDao;
    @Autowired
    private QuestionsMapper questionsDao;

    SimpleDateFormat formatter = new SimpleDateFormat("yyyy-MM-dd");

    @RequestMapping(value = "/changePassword", method = {RequestMethod.GET, RequestMethod.POST})
    @ResponseBody
    public Object changePassword(@RequestParam(value = "oldpassword") String oldpassword,
                                 @RequestParam(value = "newpassword") String newpassword,
                                 HttpServletRequest request) {
        JSONObject result = new JSONObject();
        HttpSession session = request.getSession();
        String id = session.getAttribute("username").toString();
        Teacher teacher = teacherDao.selectByPrimaryKey(id);
        if (teacher.getTeacherPassword().equals(oldpassword)) {
            teacher.setTeacherPassword(newpassword);
            teacherDao.updateByPrimaryKey(teacher);
            result.put("code", "success");
            return result;
        } else {
            result.put("code", "fail");
            return result;
        }
    }

    @RequestMapping(value = "/getInfo", method = {RequestMethod.GET, RequestMethod.POST})
    @ResponseBody
    public Object getInfo(HttpServletRequest request) {
        JSONObject result = new JSONObject();
        HttpSession seesion = request.getSession();
        String id = seesion.getAttribute("username").toString();
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

    @RequestMapping(value = "/getTeacherclass", method = {RequestMethod.GET, RequestMethod.POST})
    @ResponseBody
    public Object getTeacherclass(HttpServletRequest request) {

        JSONArray result = new JSONArray();
        HttpSession seesion = request.getSession();
        String id = seesion.getAttribute("username").toString();
        List<StudentTeacher> studentTeachers = studentTeacherDao.selectByPrimaryKeyList(id);
        for (StudentTeacher st : studentTeachers) {
            JSONObject jsonObject = new JSONObject();
            jsonObject.put("class_grade", st.getClassGrade());
            jsonObject.put("class_name", st.getClassName());
            result.add(jsonObject);
        }

        return result;

    }

    @RequestMapping(value = "/getSelectedStudents", method = {RequestMethod.GET, RequestMethod.POST})
    @ResponseBody
    public Object getSelectedStudents(@RequestParam("classgrade") String classgrade,
                                      @RequestParam("classname") String classname, HttpServletRequest request) {
        JSONArray result = new JSONArray();
        if (!classgrade.equals("")||!classname.equals("")){
            List<Student> studentList = studentDao.selectByPrimaryKeyList(classname, classgrade);
            for (Student s : studentList) {
                JSONObject jsonObject = new JSONObject();
                jsonObject.put("name", s.getStudentName());
                jsonObject.put("id", s.getStudentId());
                jsonObject.put("sex", s.getSex());
                jsonObject.put("college", s.getInstitute());
                jsonObject.put("grade", s.getClassGrade());
                jsonObject.put("classname", s.getClassName());
                result.add(jsonObject);
            }
        }
        return result;

    }

    @RequestMapping(value = "/getQuestionList", method = {RequestMethod.GET, RequestMethod.POST})
    @ResponseBody
    public Object getQuestionList(@RequestParam("section") String section,
                                      @RequestParam("question_type") String question_type, HttpServletRequest request) {
        JSONArray result = new JSONArray();
        Questions questions=new Questions();
        questions.setChapter(Integer.valueOf(section));
        questions.setTestType(question_type);
        if (!section.equals("")||!question_type.equals("")){
            List<Questions> questionsList = questionsDao.selectByPrimaryKeyList(questions);
            for (Questions s : questionsList) {
                JSONObject jsonObject = new JSONObject();
                jsonObject.put("question", s.getQuestion());
                jsonObject.put("id", s.getQuestionId());
                jsonObject.put("section", s.getChapter());
                jsonObject.put("question_type", s.getTestType());
                result.add(jsonObject);
            }
        }
        return result;
    }

}
