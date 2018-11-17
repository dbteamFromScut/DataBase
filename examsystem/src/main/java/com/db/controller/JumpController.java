package com.db.controller;


import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

@Controller
public class JumpController {

    @RequestMapping("/")
    public String test(){
        return "login";
    }

    @RequestMapping(value = "/student")
    public String toStudent(ModelMap modelMap, HttpServletRequest request){
        HttpSession seesion=request.getSession();
        modelMap.addAttribute("username",seesion.getAttribute("username"));
        return "student";
    }

    @RequestMapping(value = "/teacher")
    public String toTeacher(){

        return "teacher";
    }

    @RequestMapping(value = "/admin")
    public String toAdmin(){
        return "admin";
    }
}
