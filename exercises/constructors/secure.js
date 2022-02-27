const limited = (function(){
    this.employees = ['Amy']
    this.managerPassword = 123
    this.hasher = function(password){
        password = password + 'hash'
        return password
    }
    printEmployees = function(){
        console.log(employees)
    }
    addEmployee = function(name, employeePassword, mgrPassword){
        if(mgrPassword===managerPassword){
            employeePassword = hasher(employeePassword)
            employees.push([name,employeePassword])
            return "Employee Added."
        }
        else{
            return "failed to add Employee. Not Authorized"
        }
    }

    return {
        addEmployee, printEmployees
    }
})()

// console.log(limited.addEmployee('jon','pass',123))
// console.log()