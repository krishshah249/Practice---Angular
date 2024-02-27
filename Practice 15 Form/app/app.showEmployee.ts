import { Component, OnInit, OnChanges, SimpleChanges, Input } from "@angular/core";
import{ EmployeeService} from './app.employeeservice';
import {AddEmployeeComponent} from './app.addEmployee';

@Component({
    selector:'show-com',
    templateUrl:'showEmployee.html'
})

export class ShowEmployeeComponent implements OnInit,OnChanges{
    
    constructor(private service:EmployeeService){}

    @Input()
    empId:number=null;
    @Input()
    empName:string=null;
    @Input()
    empSalary:number=null;
    @Input()
    empDepartment:string=null;
    @Input()
    status:boolean=true;

    empAll:any[]=[];
    ngOnInit(): void {
       // this.service.getAllEmployee().subscribe((data:any)=>this.empAll=data);
       this.empAll=this.service.getAllEmployee();
    }

    ngOnChanges(changes: SimpleChanges): void {
        if(changes['status']){
            if(this.empId !=null)
            this.empAll.push(this.empId,this.empName,this.empSalary,this.empDepartment);
        }
    }

    

}
