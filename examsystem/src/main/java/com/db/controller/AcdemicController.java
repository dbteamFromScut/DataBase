package com.db.controller;


import com.db.dao.TeacherMapper;
import com.db.model.Teacher;
import net.sf.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
@RequestMapping("/acdemic")
public class AcdemicController {

    @Autowired
    private TeacherMapper teacherDao;

    @RequestMapping("addNewTeacher")
    @ResponseBody
    public Object addTeacher(@RequestParam("name") String name,@RequestParam("sex") String sex,
                             @RequestParam("id") String id,@RequestParam("college") String college){

        JSONObject result=new JSONObject();
        
        Teacher teacher=new Teacher();
        teacher.setInstitute(college);
        teacher.setSex(sex);
        teacher.setTeacherName(name);



        return result;
    }
}
