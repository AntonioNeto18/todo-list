package com.antonio.todolist.dto;

import com.antonio.todolist.enums.TodoCategory;
import jakarta.validation.constraints.NotBlank;

public record ChangeCategoryDTO(
        @NotBlank(message = "A categoria é obrigatória")
        TodoCategory category
) {
}
