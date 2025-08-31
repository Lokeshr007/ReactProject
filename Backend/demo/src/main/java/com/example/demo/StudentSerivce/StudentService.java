package com.example.demo.StudentSerivce;

import com.example.demo.module.Student;
import com.example.demo.repository.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class StudentService  {

    @Autowired
    StudentRepository serv;
    public List<Student> getStudent() {
        return serv.findAll();
    }

    public Student getStudentbyId(int rollno) {
        return serv.findById(rollno).orElse(new Student());
    }

    public Student postStudent(Student student) {
        return serv.save(student);
    }

    public Student updateStudent(int id, Student s) {
        Student existing = serv.findById(id)
                .orElseThrow(() -> new RuntimeException("Student not found with id " + id));


        existing.setRollno(s.getRollno());
        existing.setName(s.getName());
        existing.setDept(s.getDept());

        return serv.save(existing);
    }

    public void deleteStudent(int id) {
        if (!serv.existsById(id)) {
            throw new RuntimeException("Student not found with id " + id);
        }
        serv.deleteById(id);
    }
}
