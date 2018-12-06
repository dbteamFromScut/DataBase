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


@Controller
public class StudentController {

    @Autowired
    private StudentMapper studentDao;


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
    public Object changePassword(@RequestParam(value = "oldpassword",required = false) String oldpassword,
                                 @RequestParam(value = "newpassword",required = false) String newpassword,
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
        result.put("姓名","唐浩栓");
        result.put("性别","女");
        result.put("生日","1997-9-9");
        result.put("学号","123");
        return result;

    }



}
