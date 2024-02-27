import {Component, ɵConsole} from '@angular/core';
import { compileNgModule } from '@angular/compiler';
@Component({
    selector:'add-emp',
    templateUrl:'app.add.html'
})
export class AddEmployeeComponent{
    empId:number;
    empName:string;
    empSalary:number;
    empall:any[]=[
        {empId:100,empName:"ABC",empSalary:30000.00},
        {empId:101,empName:"DEF",empSalary:20000.00},
        {empId:102,empName:"GHI",empSalary:10500.00}
    ];

    addEmployee():any{
    this.empall.push({empId:this.empId,empName:this.empName,empSalary:this.empSalary})
    alert("Employee added...."+this.empall);
    this.empId=null;
    this.empName=null;
    this.empSalary=null;
    }

    deleteEmployee(data:number):any{
        this.empall.splice(data,1);
        alert("Data Deleted");
    }
    
    data1:number=null;
    empid:number=null;
    empname:string=null;
    empsalary:number=null;
    detailsEmployee(data:number)
    {
    this.empid=this.empall[data].empId;
    this.empname=this.empall[data].empName;
    this.empsalary=this.empall[data].empSalary;
    this.data1=data;
    }
    updateEmployee():any
    {
    this.empall.splice(this.data1,1,{empId:this.empid,empName:this.empname,empSalary:this.empsalary});
    this.empId=null;
    }
    
}