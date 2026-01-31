package com.antonio.todolist.controller;

import com.antonio.todolist.dto.ChangeCategoryDTO;
import com.antonio.todolist.dto.ChangeStatusDTO;
import com.antonio.todolist.dto.TodoRequest;
import com.antonio.todolist.dto.TodoResponse;
import com.antonio.todolist.entity.Todo;
import com.antonio.todolist.enums.TodoCategory;
import com.antonio.todolist.enums.TodoStatus;
import com.antonio.todolist.service.TodoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/todos")
@CrossOrigin(origins = "*")
public class TodoController {

    @Autowired
    private TodoService service;

    @PostMapping
    public ResponseEntity<TodoResponse> createTodo(@RequestBody @Validated TodoRequest request) {
        return ResponseEntity.status(HttpStatus.CREATED).body(service.createTodo(request));
    }

    @GetMapping
    public ResponseEntity<List<Todo>> getTodos(@RequestParam(required = false) TodoCategory category,
                                               @RequestParam(required = false) TodoStatus status) {
        if (category != null && status != null) {
            return ResponseEntity.status(HttpStatus.OK).body(service.getTodoByCategoryAndStatus(category, status));
        };

        if (category != null) {
            return ResponseEntity.status(HttpStatus.OK).body(service.getTodosByCategory(category));
        }

        if (status != null) {
            return ResponseEntity.status(HttpStatus.OK).body(service.getTodoByStatus(status));
        }

        return ResponseEntity.status(HttpStatus.OK).body(service.getTodos());
    }

    @GetMapping("/{id}")
    public ResponseEntity<TodoResponse> getTodoById(@PathVariable Long id) {
        return ResponseEntity.status(HttpStatus.OK).body(service.getTodoById(id));
    }

    @PatchMapping("/{id}/status")
    public ResponseEntity<TodoResponse> changeTodoStatusById(@PathVariable Long id,
                                                             @RequestBody ChangeStatusDTO status) {
        return ResponseEntity.status(HttpStatus.OK).body(service.changeTodoStatusById(id, status));
    }

    @PatchMapping("/{id}/category")
    public ResponseEntity<TodoResponse> changeTodoCategoryById(@PathVariable Long id,
                                                               @RequestBody ChangeCategoryDTO category) {
        return ResponseEntity.status(HttpStatus.OK).body(service.changeTodoCategoryById(id, category));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteTodoById(@PathVariable Long id) {
        service.deleteTodoById(id);
        return ResponseEntity.status(HttpStatus.OK).build();
    }
}
