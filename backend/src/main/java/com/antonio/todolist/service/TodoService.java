package com.antonio.todolist.service;

import com.antonio.todolist.dto.ChangeCategoryDTO;
import com.antonio.todolist.dto.ChangeStatusDTO;
import com.antonio.todolist.dto.TodoRequest;
import com.antonio.todolist.dto.TodoResponse;
import com.antonio.todolist.entity.Todo;
import com.antonio.todolist.enums.TodoCategory;
import com.antonio.todolist.enums.TodoStatus;
import com.antonio.todolist.error.exceptions.TodoNotFoundException;
import com.antonio.todolist.repository.TodoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TodoService {

    @Autowired
    private TodoRepository repository;

    public TodoResponse createTodo(TodoRequest request) {
        var todo = Todo.builder()
                .text(request.text())
                .category(request.category())
                .status(TodoStatus.PENDENTE)
                .build();

        return toResponse(repository.save(todo));
    }

    public List<Todo> getTodos() {
        return repository.findAll();
    }

    public List<Todo> getTodosByCategory(TodoCategory category) {
        return repository.findByCategory(category);
    }

    public List<Todo> getTodoByStatus(TodoStatus status) {
        return repository.findByStatus(status);
    }

    public List<Todo> getTodoByCategoryAndStatus(TodoCategory category, TodoStatus status) {
        return repository.findByCategoryAndStatus(category, status);
    }

    public TodoResponse getTodoById(Long id) {
        Todo todo = repository.findById(id)
                .orElseThrow(() -> new TodoNotFoundException("A tarefa não foi encontrada"));

        return toResponse(todo);
    }

    public TodoResponse changeTodoStatusById(Long id, ChangeStatusDTO request) {
        Todo todo = repository.findById(id)
                .orElseThrow(() -> new TodoNotFoundException("A tarefa não foi encontrada"));

        todo.setStatus(request.status());
        return toResponse(repository.save(todo));
    }

    public TodoResponse changeTodoCategoryById(Long id, ChangeCategoryDTO request) {
        Todo todo = repository.findById(id)
                .orElseThrow(() -> new TodoNotFoundException("A tarefa não foi encontrada"));

        todo.setCategory(request.category());
        return toResponse(repository.save(todo));
    }

    public void deleteTodoById(Long id) {
        if (!repository.existsById(id)) {
            throw new TodoNotFoundException("A tarefa não foi encontrada");
        };
        repository.deleteById(id);
    }

    private TodoResponse toResponse(Todo todo) {
        return new TodoResponse(
                todo.getId(),
                todo.getText(),
                todo.getCategory(),
                todo.getStatus(),
                todo.getCreatedAt()
        );
    }
}
