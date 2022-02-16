const express = require('express');
const db = require('./db');

const httpServer = express();


httpServer.get('/', (req, res, next) => {
    res.send("Hello from the other side")
})

httpServer.get('/students', (req, res, next) => {
    let students = db.getAllStudents();
    res.status(200).json(students);
})

httpServer.get('/student/:id', (req, res, next) => {
    let studentId = req.params.id;

    try {
        let student = db.getById(studentId);
        res.status(200).json(student);

    } catch (error) {
        res.status(500).json({ status: "Error", message: 'Student not found' })
    }

})

httpServer.post('/student', (req, res, next) => {
    let student = req.body;

    try {
        let status = db.addStudent(student);
        res.status(201).json(status);

    } catch (error) {
        res.status(500).json({ status: "Error", message: 'Something went wrong while adding student' })
    }

})




httpServer.listen(3200, () => {
    console.log("Server is running on 3200");
})
