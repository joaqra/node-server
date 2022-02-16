const students = [
    { id: 1, name: 'Jo', status: 1 },
    { id: 2, name: 'Mahdi', status: 2 },
    { id: 2, name: 'Farah', status: 2 },
]

const getAllStudents = () => {
    return students;
}

const getById = (id) => {
    let student = students.find(x => x.id == id);

    if (!student)
        throw new Error("Student not found");

    return student;    
}

const addStudent = (student) =>{
    students.push(student)

    return true;
}

module.exports = {
    getAllStudents,
    getById,
    addStudent
}