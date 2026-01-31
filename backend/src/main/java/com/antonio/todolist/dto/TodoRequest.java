package com.antonio.todolist.dto;

import com.antonio.todolist.enums.TodoCategory;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;

public record TodoRequest(

        @NotBlank(message = "O texto é obrigatório")
        String text,

        @NotNull(message = "A categoria é obrigatória")
        TodoCategory category

) {
}
