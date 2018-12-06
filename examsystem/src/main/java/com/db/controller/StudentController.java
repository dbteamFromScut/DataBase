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
    public Object changePassword(@RequestParam(value = "oldpassword") String oldpassword,
                                 @RequestParam(value = "newpassword") String newpassword,
                                 HttpServletRequest request){
        JSONObject result=new JSONObject();
        result.put("code","success");
        return result;

    }

    @RequestMapping(value = "/changePassword",method = {RequestMethod.GET,RequestMethod.POST})
    @ResponseBody
    public Object getInfo(HttpServletRequest request){

        JSONObject result=new JSONObject();
        HttpSession seesion=request.getSession();
        String id =seesion.getAttribute("username").toString();
        Student student=studentDao.selectByPrimaryKey(id);
        result.put("","");
        result.put("","");
        result.put("","");
        result.put("","");
        return result;

    }

}
