package com.db.dao;

import com.db.model.Teacher;
import org.springframework.stereotype.Service;

import java.util.List;

@Service("teacherDao")
public interface TeacherMapper {
    int deleteByPrimaryKey(String teacherId);

    int insert(Teacher record);

    int insertSelective(Teacher record);

    Teacher selectByPrimaryKey(String teacherId);

    int updateByPrimaryKeySelective(Teacher record);

    int updateByPrimaryKey(Teacher record);

    List<Teacher> selectByPrimaryKeyList(String teacherId);

    List<Teacher> selectByPrimaryKeyList();

    int getCount(String teacherId);


}