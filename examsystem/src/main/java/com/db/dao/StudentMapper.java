package com.db.dao;

import com.db.model.Student;
import org.springframework.stereotype.Service;

@Service("studentDao")
public interface StudentMapper {
    int deleteByPrimaryKey(String studentId);

    int insert(Student record);

    int insertSelective(Student record);

    Student selectByPrimaryKey(String studentId);

    int updateByPrimaryKeySelective(Student record);

    int updateByPrimaryKey(Student record);
}