package com.db.model;

public class StudentPapers extends StudentPapersKey {
    private Byte grade;

    public Byte getGrade() {
        return grade;
    }

    public void setGrade(Byte grade) {
        this.grade = grade;
    }
}