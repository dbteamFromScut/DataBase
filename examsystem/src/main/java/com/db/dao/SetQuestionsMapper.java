package com.db.dao;

import com.db.model.SetQuestionsKey;
import org.springframework.stereotype.Service;

@Service("setQuestionsDao")
public interface SetQuestionsMapper {
    int deleteByPrimaryKey(SetQuestionsKey key);

    int insert(SetQuestionsKey record);

    int insertSelective(SetQuestionsKey record);
}