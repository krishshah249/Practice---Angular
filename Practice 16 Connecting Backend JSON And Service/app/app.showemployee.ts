import {Component, OnInit, Input, SimpleChange} from '@angular/core';
import { EmployeeService } from './app.employeeService';

@Component({

        selector:'showEmp',
        templateUrl:'app.showEmp.html'

})

export class ShowEmployeeComponent implements OnInit{

    @Input()
    empId:number;
    @Input()
    empName:string;
    @Input()
    empSalary:number;
    @Input()
    empDept:string;
    @Input()
    flag:boolean;
    
    constructor(private service:EmployeeService){}
    empAll:any[]=[];
    
    ngOnChanges(change: SimpleChange){

        if(change['flag'])
            if(this.empId!=null)
                this.empAll.push({empId:this.empId,empName:this.empName,empSalary:this.empSalary,empDepartment:this.empDept});
     } 
    
    ngOnInit(){
        this.service.getAllEmployee().subscribe((data:any)=>this.empAll=data);
    }

    deleteEmp(data:number){
        console.log(data);
        this.empAll.splice(data,1);

    }



}