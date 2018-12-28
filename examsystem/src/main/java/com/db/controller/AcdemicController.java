package com.db.controller;


import com.db.dao.TeacherMapper;
import com.db.model.Teacher;
import net.sf.json.JSONArray;
import net.sf.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.List;

@Controller
@RequestMapping("/acdemic")
public class AcdemicController {

    @Autowired
    private TeacherMapper teacherDao;

    @RequestMapping("/addNewTeacher")
    @ResponseBody
    public Object addTeacher(@RequestParam("name") String name,@RequestParam("sex") String sex,
                             @RequestParam("id") String id,@RequestParam("college") String college){

        JSONObject result=new JSONObject();
        if (teacherDao.getCount(id)>0){
            result.put("code","fail");
            result.put("msg","该教师ID已存在");
            return result;
        }
        Teacher teacher=new Teacher();
        teacher.setInstitute(college);
        teacher.setSex(sex);
        teacher.setTeacherName(name);
        teacher.setTeacherId(id);
        try {
            teacherDao.insertSelective(teacher);
            result.put("code","success");
            result.put("msg","已成功保存");

        }catch (Exception e){
            result.put("code","fail");
            result.put("msg","请重新上传");
        }
        return result;
    }


    @RequestMapping("/getTeacherList")
    @ResponseBody
    public Object getTeacherList(){
        JSONArray result=new JSONArray();
        List<Teacher> teachersList=teacherDao.selectByPrimaryKeyList();
        for (Teacher t:teachersList){
            JSONObject j=new JSONObject();
            j.put("name",t.getTeacherName());
            j.put("id",t.getTeacherId());
            j.put("sex",t.getSex());
            j.put("college",t.getInstitute());
            result.add(j);
        }
        return result;
    }
}
