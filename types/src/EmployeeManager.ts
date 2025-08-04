export type Employee = {
  name: string
  id: string
  email: string
  salary: number
}
/*
  No module import is needed for 'crypto' in this code.
  The generateRandomId function uses browser crypto if available,
  otherwise falls back to Math.random. No Node.js 'crypto' module is used.
*/



export declare function createEmployee(employeeName: string, salary: number): Employee {
  const id = generateRandomId()
  return {
    name: employeeName,
    id: id,
    email: `${employeeName.toLowerCase().replace(/\s+/g, '.')}@company.com`,
    salary: salary
  }
}
const Peter = createEmployee('Peter Parker', 50000)
const Mary = createEmployee('Mary Jane', 60000)
const alLNewEmployees = [Peter, Mary]

const sendMessage = (employee: Employee)=> {
  console.log(`Sending message to ${employee.name} at ${employee.email} makding ${employee.salary} per year.`)
}

alLNewEmployees.forEach(employee => sendMessage(employee))