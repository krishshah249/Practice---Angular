import {Component, OnInit} from '@angular/core';
import {EmployeeService} from './app.employeeService';

@Component({

            selector:'addEmp',
            templateUrl:'app.addEmp.html'

})

export class AddEmployeeComponent{

        empId:number;
        empName:string;
        empSalary:number;
        empDept:string;
        flag:boolean;

        empAdd(){

            this.flag=!this.flag;

        }

}