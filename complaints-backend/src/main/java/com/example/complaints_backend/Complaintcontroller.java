package com.example.complaints_backend;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.bind.annotation.CrossOrigin;
import java.util.List;
@CrossOrigin(origins = "http://localhost:3000") // Allow requests from React app
@Controller
@RequestMapping("/api/complaints")
public class Complaintcontroller {

    @Autowired
    Complaintrepo complaintRepository;



    @GetMapping("/greeting")
    @ResponseBody
    public String welcome() {
        return "welcome to the Spring JSON-Based API";
    }
    @GetMapping
    @ResponseBody
    public List<Complaint> getAllComplaints() {
        return complaintRepository.findAll();
    }

    @PostMapping
    @ResponseBody
    public Complaint addComplaint(@RequestBody Complaint complaint) {
        return complaintRepository.save(complaint);
    }

    @DeleteMapping("/{id}")
    @ResponseBody
    public void deleteComplaint(@PathVariable Long id) {
        complaintRepository.deleteById(id);
    }
}
