package com.example.demo.controller;

import com.example.demo.StudentSerivce.StudentService;
import com.example.demo.module.Student;
import jakarta.websocket.OnClose;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;



@CrossOrigin(origins="http://localhost:5173/")
@RestController
public class StudentController {

    @Autowired
    StudentService ser;

    @GetMapping("/Home/sujith")
    public String home(){
        return "Hello World";
    }
    @GetMapping("/student")
    public List<Student> getStudent(){
        return ser.getStudent();
    }

    @GetMapping("/student/{rollno}")
    public Student getStudentbyId(@PathVariable("rollno") int rollno){
        return ser.getStudentbyId(rollno);
    }

    @PostMapping("/student")
    public Student postStudent(@RequestBody Student student){
        return ser.postStudent(student);
    }
    @PutMapping("/student/{rollno}")
    public Student updateStudent(@PathVariable("rollno") int rollno, @RequestBody Student s){
        return ser.updateStudent(rollno,s);
    }

    @DeleteMapping("/student/{rollno}")
    public void deleteStudent(@PathVariable("rollno") int id){
        ser.deleteStudent(id);
    }
}
