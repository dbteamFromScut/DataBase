package com.db.dao;

import com.db.model.StudentPapers;
import com.db.model.StudentPapersKey;
import org.springframework.stereotype.Service;

@Service("studentPapersDao")
public interface StudentPapersMapper {
    int deleteByPrimaryKey(StudentPapersKey key);

    int insert(StudentPapers record);

    int insertSelective(StudentPapers record);

    StudentPapers selectByPrimaryKey(StudentPapersKey key);

    int updateByPrimaryKeySelective(StudentPapers record);

    int updateByPrimaryKey(StudentPapers record);
}