/*教师表*/
create table teachers
(teacher_id varchar(20) primary key,
teacher_name varchar(20),
teacher_password varchar(20),
sex varchar(2),
institute varchar(20),
address varchar(200),
birthdate date,
phone varchar(11),
e_mail varchar(50)
);


/*教务员表*/
create table deans
(dean_id varchar(20) primary key,
dean_name varchar(20),
dean_password varchar(20),
sex varchar(2),
institute varchar(20),
address varchar(200),
birthdate date,
phone varchar(11),
e_mail varchar(50)
);


/*学生表*/
create table students
(student_id varchar(20) primary key,      
student_name varchar(20),
class_name varchar(20),
class_grade char(5)
student_password varchar(20),
sex varchar(2),
institute varchar(20),
address varchar(200),
birthdate date,
phone varchar(11),
e_mail varchar(50)
);


/*教师-班级表*/
create table st
(teacher_id varchar(20)primary key,
class_name varchar(20),
class_grade char(5)
foreign key (teacher_id) references teachers (teacher_id)
);


/*试题库*/
create table questions
(question_id int primary key, 
chapter int,
test_type char(3),
question varchar(500),
option1 varchar(150),
option2 varchar(150),
option3 varchar(150),
option4 varchar(150),
correct_answer varchar(150),
answer_num int,
correct_num int
);


/*试卷表*/
create table papers
(paper_id int primary key,
teacher_id varchar(20),
paper_name varchar(50),
start_time datetime,
stop_time datetime,
foreign key (teacher_id) references teachers (teacher_id)
);

/*出题表*/
create table set_questions
(paper_id int,
question_id int,
primary key (paper_id,question_id),
foreign key (paper_id) references papers (paper_id),
foreign key (question_id) references questions (question_id)
);

/*学生-考试表*/
create table sp
(student_id varchar(20),
paper_id int,
grade tinyint,
primary key (student_id,paper_id),
foreign key (student_id) references students (student_id),
foreign key (paper_id) references papers (paper_id)
);


/*操作日志表*/
create table operation_log
(order_id int primary key,
table_name varchar(20),
user_id varchar(20),
operation_type varchar(10),
information varchar(500),
operation_time datetime
);
