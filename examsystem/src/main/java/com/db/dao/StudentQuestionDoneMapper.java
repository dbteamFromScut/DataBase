package com.db.dao;

import com.db.model.StudentQuestionDone;
import org.springframework.stereotype.Service;

import java.util.List;

@Service("studentQuestionDoneDao")
public interface StudentQuestionDoneMapper {
    int insert(StudentQuestionDone record);

    int insertSelective(StudentQuestionDone record);

    List<StudentQuestionDone> selectByStudentId(String studentId);
}