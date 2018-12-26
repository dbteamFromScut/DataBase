package com.db.dao;

import com.db.model.Papers;
import org.springframework.stereotype.Service;

import java.util.List;

@Service("papersDao")
public interface PapersMapper {
    int deleteByPrimaryKey(Integer paperId);

    int insert(Papers record);

    int insertSelective(Papers record);

    Papers selectByPrimaryKey(Integer paperId);

    int updateByPrimaryKeySelective(Papers record);

    int updateByPrimaryKey(Papers record);

    List<Papers> selectByPrimaryKeyList(String classname, String grade);

}