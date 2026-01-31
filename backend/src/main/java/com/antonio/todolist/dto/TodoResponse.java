package com.antonio.todolist.dto;

import com.antonio.todolist.enums.TodoCategory;
import com.antonio.todolist.enums.TodoStatus;

import java.time.LocalDateTime;

public record TodoResponse(
        Long id,
        String text,
        TodoCategory category,
        TodoStatus status,
        LocalDateTime createdAt
) {
}
