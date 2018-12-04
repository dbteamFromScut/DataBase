package com.db.controller;

import com.db.dao.StudentMapper;
import net.sf.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
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

}
