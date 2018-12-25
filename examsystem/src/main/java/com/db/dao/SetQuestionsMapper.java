package com.db.dao;

import com.db.model.SetQuestionsKey;

public interface SetQuestionsMapper {
    int deleteByPrimaryKey(SetQuestionsKey key);

    int insert(SetQuestionsKey record);

    int insertSelective(SetQuestionsKey record);
}