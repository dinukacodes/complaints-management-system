package com.example.complaints_backend;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;


@Getter
@Setter
@Entity
public class Complaint {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String email;
    private String subject;
    private String body;

    public Complaint(String body, String subject, String email) {
        this.body = body;
        this.subject = subject;
        this.email = email;
    };

    public Complaint() {
    }

    public Complaint(Long id, String email, String subject, String body) {
        this.id = id;
        this.email = email;
        this.subject = subject;
        this.body = body;
    }





    // Constructors, Getters and Setters
}