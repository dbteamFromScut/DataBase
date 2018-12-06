package com.db.controller;

import com.db.dao.StudentMapper;
import com.db.dao.TeacherMapper;
import com.db.model.Student;
import com.db.model.Teacher;
import net.sf.json.JSONObject;
import org.apache.shiro.session.Session;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

@Controller
public class LoginController {

    @Autowired
    private StudentMapper studentDao;

    @Autowired
    private TeacherMapper teacherDao;

    @RequestMapping(value = "/login",method = {RequestMethod.POST,RequestMethod.GET})
    @ResponseBody
    public Object login(@RequestParam(value = "username") String username,
                        @RequestParam(value = "password") String password,
                        @RequestParam(value = "role") String role,
                        HttpServletRequest request){
        JSONObject result=new JSONObject();
        Student student=null;
        Teacher teacher=null;
        int bool=0;
        if (role.equals("student")){
            student=studentDao.selectByPrimaryKey(username);
            if (student==null){
                result.put("code","fail");
                result.put("msg","没有这个学生");
                return result;
            }
            if (!student.getStudentPassword().equals(password)){
                result.put("code","fail");
                result.put("msg","密码不正确");
                return result;
            }
        }else if (role.equals("teacher")){
            teacher=teacherDao.selectByPrimaryKey(username);
            if (teacher==null){
                result.put("code","fail");
                result.put("msg","没有这个老师");
                return result;
            }
            if (!teacher.getTeacherPassword().equals(password) ){
                teacher=null;
            }
        }else if (role.equals("admin")){

        }


        if (student!=null||teacher!=null){
            HttpSession session=request.getSession();
            session.setAttribute("username",username);
            session.setAttribute("role",role);
            result.put("code","success");
            return result;
        }else{
            result.put("code","fail");
            return result;
        }


    }



}
