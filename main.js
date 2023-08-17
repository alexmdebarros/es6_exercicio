const students = [
    { name: '', grade: 0 },    
]

const inputStudent = students.map(student => {
    studentName = prompt('Digite o nome do aluno: ')
    studentGrade = parseFloat(prompt('Digite a nota do aluno: '))

    return {
        name: studentName,
        grade: studentGrade
    }
}).filter(student => {
    return student.grade >= 6;
})

console.log(inputStudent);
