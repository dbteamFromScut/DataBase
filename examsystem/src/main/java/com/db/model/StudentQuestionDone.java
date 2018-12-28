package com.db.model;


import org.springframework.stereotype.Service;

@Service("studentQuestionDoneDao")
public class StudentQuestionDone {
    private String studentId;

    private Integer paperId;

    private Integer questionId;

    private String commitAnswer;

    public String getStudentId() {
        return studentId;
    }

    public void setStudentId(String studentId) {
        this.studentId = studentId == null ? null : studentId.trim();
    }

    public Integer getPaperId() {
        return paperId;
    }

    public void setPaperId(Integer paperId) {
        this.paperId = paperId;
    }

    public Integer getQuestionId() {
        return questionId;
    }

    public void setQuestionId(Integer questionId) {
        this.questionId = questionId;
    }

    public String getCommitAnswer() {
        return commitAnswer;
    }

    public void setCommitAnswer(String commitAnswer) {
        this.commitAnswer = commitAnswer == null ? null : commitAnswer.trim();
    }
}