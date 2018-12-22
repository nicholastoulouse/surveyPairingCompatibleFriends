CREATE DATABASE friend_finder;

USE friend_finder;

CREATE TABLE IF NOT EXISTS IF NOT EXISTS students (
    id INT AUTO_INCREMENT,
    name VARCHAR(45) NOT NULL,
    PRIMARY KEY(id)
);

CREATE TABLE IF NOT EXISTS questions (
    id INT AUTO_INCREMENT,
    question VARCHAR(255) NOT NULL,
    category VARCHAR(255) DEFAULT 'general', 
    PRIMARY KEY(id)
);

CREATE TABLE IF NOT EXISTS answers (
    id INT NOT NULL AUTO_INCREMENT,
    CONSTRAINT id_Ck CHECK (id BETWEEN 1 AND 5),
    question_id INT NOT NULL,
    answer VARCHAR(255) NOT NULL,
    FOREIGN KEY (question_id) REFERENCES questions(id),
    PRIMARY KEY(id)
);

CREATE TABLE IF NOT EXISTS students_answers (
    id INT NOT NULL AUTO_INCREMENT,
    student_id INT NOT NULL,
    question_id INT NOT NULL,
    answrchoice_id INT NOT NULL,
    FOREIGN KEY (student_id) REFERENCES students(id),
    FOREIGN KEY (question_id) REFERENCES questions(id),
    FOREIGN KEY (answrchoice_id) REFERENCES answers(id),
    PRIMARY KEY(id)
)

SHOW DATABASE;
SHOW TABLES;
SELECT * FROM students;
SELECT * FROM questions;
SELECT * FROM answers;
SELECT * FROM students_answers;