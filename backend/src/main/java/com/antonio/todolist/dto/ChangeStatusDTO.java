package com.antonio.todolist.dto;

import com.antonio.todolist.enums.TodoStatus;
import jakarta.validation.constraints.NotBlank;

public record ChangeStatusDTO(
        @NotBlank(message = "O status é obrigatório")
        TodoStatus status
) {
}
