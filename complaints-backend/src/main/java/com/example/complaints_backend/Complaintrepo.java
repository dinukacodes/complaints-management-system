package com.example.complaints_backend;

import org.springframework.data.jpa.repository.JpaRepository;

public interface Complaintrepo extends JpaRepository<Complaint, Long> {}
