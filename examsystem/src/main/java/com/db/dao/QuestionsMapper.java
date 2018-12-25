package com.db.dao;

import com.db.model.Questions;
import org.springframework.stereotype.Service;

import java.util.List;

@Service("questionsDao")
public interface QuestionsMapper {
    int deleteByPrimaryKey(Integer questionId);

    int insert(Questions record);

    int insertSelective(Questions record);

    Questions selectByPrimaryKey(Integer questionId);

    int updateByPrimaryKeySelective(Questions record);

    int updateByPrimaryKey(Questions record);

    List<Questions> selectByPrimaryKeyList(Questions questions);

}