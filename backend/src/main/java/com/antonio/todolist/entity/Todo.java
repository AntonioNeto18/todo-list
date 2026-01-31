package com.antonio.todolist.entity;

import com.antonio.todolist.enums.TodoCategory;
import com.antonio.todolist.enums.TodoStatus;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.CreationTimestamp;

import java.time.LocalDateTime;

@Entity
@Table(name = "tb_todos")
@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class Todo {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String text;

    @Enumerated(EnumType.STRING)
    private TodoCategory category;

    @Enumerated(EnumType.STRING)
    private TodoStatus status;

    @CreationTimestamp
    private LocalDateTime createdAt;

}
