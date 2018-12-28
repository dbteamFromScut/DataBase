package com.db.dao;

import com.db.model.StudentQuestionDone;

public interface StudentQuestionDoneMapper {
    int insert(StudentQuestionDone record);

    int insertSelective(StudentQuestionDone record);
}