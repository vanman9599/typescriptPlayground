"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Peter = createEmployee('Peter Parker', 50000);
var Mary = createEmployee('Mary Jane', 60000);
var alLNewEmployees = [Peter, Mary];
var sendMessage = function (employee) {
    console.log("Sending message to ".concat(employee.name, " at ").concat(employee.email, " makding ").concat(employee.salary, " per year."));
};
alLNewEmployees.forEach(function (employee) { return sendMessage(employee); });
