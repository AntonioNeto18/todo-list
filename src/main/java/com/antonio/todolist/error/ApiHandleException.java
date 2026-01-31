package com.antonio.todolist.error;

import com.antonio.todolist.dto.TodoError;
import com.antonio.todolist.error.exceptions.TodoNotFoundException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@RestControllerAdvice
public class ApiHandleException {

    @ExceptionHandler(TodoNotFoundException.class)
    public ResponseEntity<TodoError> todoNotFound(TodoNotFoundException ex) {

        var error = new TodoError(
                     ex.getMessage(),
                     404
        );

        return ResponseEntity.status(error.status()).body(error);
    }

    @ExceptionHandler(MethodArgumentNotValidException.class)
    public ResponseEntity<TodoError> todoNotValid(MethodArgumentNotValidException ex) {

        var error = new TodoError(
                ex.getFieldError().getDefaultMessage(),
                400
        );

        return ResponseEntity.status(error.status()).body(error);
    }
}
