function Employee (name,job,salary,status='Full Time'){
    this.name = name
    this.jobTitle = job
    this.salary = salary
    this.status = status
}

Employee.prototype.printEmployeeForm = function(){
    console.log(`Name: ${this.name}, Job Title: ${this.jobTitle}, Salary: $${this.salary}/hr, Status: ${this.status}`)
}

employees = [
    new Employee('Amy','Singer',300),
    new Employee('Sara','Actress',200),
    new Employee('Susan', 'Director',100)
]
    
employees[0].status = 'Contract'
employees.forEach(e=>e.printEmployeeForm())
