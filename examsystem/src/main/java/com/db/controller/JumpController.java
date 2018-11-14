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
    public String student(){
        System.out.print("ssss");
        return "student";
    }
}
