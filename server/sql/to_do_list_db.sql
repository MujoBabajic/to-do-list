CREATE DATABASE to_do_list_database;
USE to_do_list_database;

CREATE TABLE tasks (
    task_id INT AUTO_INCREMENT PRIMARY KEY,
    task_name VARCHAR(255),
    is_completed BOOLEAN DEFAULT FALSE
);
