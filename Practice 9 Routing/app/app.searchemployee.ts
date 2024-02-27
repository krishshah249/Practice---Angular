import { Component } from "@angular/core";
import { EmployeeService } from "./app.employeeservice";
import { Router } from "@angular/router";


@Component({
    selector:'search-comp',
    templateUrl:'searchemployee.html'
})

export class SearchEmployeeComponent{
    searchId:number;
    searchvalue:string;
    constructor(private myservice:EmployeeService,private router:Router)
    {

    }
    empAll:any[]=null;
    search():any{
        //Actual Code
        /*this.empAll=this.myservice.searchEmployee(this.searchId)
        if(this.empAll.length!=0){
            for(let i of this.empAll)
            this.searchvalue=""+i.empId+" "+i.empName+" "+i.empSalary+" "+i.empDepartment;

        }else{
            this.searchvalue="Employee Not Found"
        }*/
        //for pipes routing send data to show component
        this.router.navigate(['show',this.searchId]); 
    }
}