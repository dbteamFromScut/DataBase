package com.db.model;

import cn.afterturn.easypoi.excel.annotation.Excel;

import java.util.Date;

public class Teacher {

    @Excel(name = "职工号", height = 8, width = 15, isImportField = "true_st")
    private String teacherId;

    @Excel(name = "名字", height = 8, width = 10, isImportField = "true_st")
    private String teacherName;

    private String teacherPassword;

    @Excel(name = "性别", height = 8, width = 5, isImportField = "true_st")
    private String sex;

    @Excel(name = "学院", height = 8, width = 15, isImportField = "true_st")
    private String institute;

    @Excel(name = "住址", height = 8, width = 30, isImportField = "true_st")
    private String address;

    @Excel(name = "出生日期", height = 8, width = 10, isImportField = "true_st")
    private Date birthdate;

    @Excel(name = "手机号", height = 8, width = 15, isImportField = "true_st")
    private String phone;

    @Excel(name = "邮箱", height = 8, width = 15, isImportField = "true_st")
    private String eMail;

    public String getTeacherId() {
        return teacherId;
    }

    public void setTeacherId(String teacherId) {
        this.teacherId = teacherId == null ? null : teacherId.trim();
    }

    public String getTeacherName() {
        return teacherName;
    }

    public void setTeacherName(String teacherName) {
        this.teacherName = teacherName == null ? null : teacherName.trim();
    }

    public String getTeacherPassword() {
        return teacherPassword;
    }

    public void setTeacherPassword(String teacherPassword) {
        this.teacherPassword = teacherPassword == null ? null : teacherPassword.trim();
    }

    public String getSex() {
        return sex;
    }

    public void setSex(String sex) {
        this.sex = sex == null ? null : sex.trim();
    }

    public String getInstitute() {
        return institute;
    }

    public void setInstitute(String institute) {
        this.institute = institute == null ? null : institute.trim();
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address == null ? null : address.trim();
    }

    public Date getBirthdate() {
        return birthdate;
    }

    public void setBirthdate(Date birthdate) {
        this.birthdate = birthdate;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone == null ? null : phone.trim();
    }

    public String geteMail() {
        return eMail;
    }

    public void seteMail(String eMail) {
        this.eMail = eMail == null ? null : eMail.trim();
    }
}