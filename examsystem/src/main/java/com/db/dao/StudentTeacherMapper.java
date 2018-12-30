package com.db.dao;

import com.db.model.StudentTeacher;
import org.springframework.stereotype.Service;

import java.util.List;

@Service("studentTeacherDao")
public interface StudentTeacherMapper {
    int deleteByPrimaryKey(StudentTeacher record);

    int insert(StudentTeacher record);

    int insertSelective(StudentTeacher record);

    StudentTeacher selectByPrimaryKey(String teacherId);

    int updateByPrimaryKeySelective(StudentTeacher record);

    int updateByPrimaryKey(StudentTeacher record);

    List<StudentTeacher> selectByPrimaryKeyList(String teacherId);

    List<StudentTeacher> selectByPrimaryKeyList();

}