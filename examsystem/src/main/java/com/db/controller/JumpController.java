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
        if (seesion.getAttribute("username")!=null){
            return "student";
        }else {
            return "login";
        }

    }

    @RequestMapping(value = "/teacher")
    public String toTeacher(HttpServletRequest request){
        HttpSession seesion=request.getSession();
        if (seesion.getAttribute("username")!=null){
            return "teacher";
        }else {
            return "login";
        }

    }

    @RequestMapping(value = "/admin")
    public String toAdmin(HttpServletRequest request){
        HttpSession seesion=request.getSession();
        if (seesion.getAttribute("username")!=null){
            return "admin";
        }else {
            return "login";
        }
    }
}
