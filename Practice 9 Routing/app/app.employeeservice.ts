import { Injectable, ɵConsole } from "@angular/core";
import { HttpClient} from "@angular/common/http";

@Injectable({
    providedIn:'root'
})

export class EmployeeService{
    private empAll:any[]=[];
    constructor(private http:HttpClient){ 
        this.http.get("assets/employee.json").subscribe((data:any)=>{
            
            for(let i of data){
           // console.log(i);

            this.empAll.push(i);}})
    }

    
    getAllEmployees(){
       
        return this.empAll;
        

    }

    addEmpDetails(empob:any){
        console.log("In service")
        console.log(empob)
        this.empAll.push({empId:empob.empId,empName:empob.empName,empSalary:empob.empSalary,empDepartment:empob.empDepartment});
        console.log(this.empAll)
        return true;
    }

    searchEmployee(searchId:number):any{
        return this.empAll.filter((data:any)=>data.empId==searchId);
    }
}