package com.db.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
public class LoginController {


    @RequestMapping(value = "/login",method = {RequestMethod.POST,RequestMethod.GET})
    public String login(@RequestParam(value = "p1",required = false) String p1,
                        @RequestParam(value = "p2",required = false) String p2){
        System.out.print("0");
        System.out.print(p1);
        System.out.print(p2);
        return "student";
    }
}
