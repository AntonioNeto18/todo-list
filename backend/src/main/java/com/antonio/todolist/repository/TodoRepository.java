package com.antonio.todolist.repository;

import com.antonio.todolist.entity.Todo;
import com.antonio.todolist.enums.TodoCategory;
import com.antonio.todolist.enums.TodoStatus;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface TodoRepository extends JpaRepository<Todo, Long> {
    List<Todo> findByCategory(TodoCategory category);
    List<Todo> findByStatus(TodoStatus status);
    List<Todo> findByCategoryAndStatus(TodoCategory category, TodoStatus status);
}
