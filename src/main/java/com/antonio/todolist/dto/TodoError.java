package com.antonio.todolist.dto;

public record TodoError(
        String message,
        Integer status
) {
}
