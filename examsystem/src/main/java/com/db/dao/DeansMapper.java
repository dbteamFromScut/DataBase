package com.db.dao;

import com.db.model.Deans;

public interface DeansMapper {
    int deleteByPrimaryKey(String deanId);

    int insert(Deans record);

    int insertSelective(Deans record);

    Deans selectByPrimaryKey(String deanId);

    int updateByPrimaryKeySelective(Deans record);

    int updateByPrimaryKey(Deans record);
}