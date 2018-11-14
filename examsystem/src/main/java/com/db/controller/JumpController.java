package com.db.controller;


import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class JumpController {

    @RequestMapping("/")
    public String test(){
        return "login";
    }

    @RequestMapping(value = "/student")
    public String toStudent(){

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
