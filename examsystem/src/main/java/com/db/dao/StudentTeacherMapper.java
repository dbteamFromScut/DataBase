package com.db.dao;

import com.db.model.StudentTeacher;

public interface StudentTeacherMapper {
    int deleteByPrimaryKey(String teacherId);

    int insert(StudentTeacher record);

    int insertSelective(StudentTeacher record);

    StudentTeacher selectByPrimaryKey(String teacherId);

    int updateByPrimaryKeySelective(StudentTeacher record);

    int updateByPrimaryKey(StudentTeacher record);
}