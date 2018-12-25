package com.db.dao;

import com.db.model.OperationLog;
import org.springframework.stereotype.Service;

@Service("operationLogDao")
public interface OperationLogMapper {
    int deleteByPrimaryKey(Integer orderId);

    int insert(OperationLog record);

    int insertSelective(OperationLog record);

    OperationLog selectByPrimaryKey(Integer orderId);

    int updateByPrimaryKeySelective(OperationLog record);

    int updateByPrimaryKey(OperationLog record);
}