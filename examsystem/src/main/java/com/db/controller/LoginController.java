package com.db.controller;

import net.sf.json.JSONObject;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

@Controller
public class LoginController {


    @RequestMapping(value = "/login",method = {RequestMethod.POST,RequestMethod.GET})
    @ResponseBody
    public Object login(@RequestParam(value = "username",required = false) String username,
                              @RequestParam(value = "password",required = false) String password,
                              @RequestParam(value = "role",required = false) String role){
        System.out.print(username);
        System.out.print(password);
        System.out.print(role);
        JSONObject resilt=new JSONObject();
        resilt.put("code","fail");
        System.out.print(resilt);
        return resilt;
    }

}
