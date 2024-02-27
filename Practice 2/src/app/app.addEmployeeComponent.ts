import { Component, Input } from "@angular/core";

@Component({
    selector: 'add-emp',
    templateUrl: 'app.add.html'
})

export class AddEmployeeComponent{
    // attributes of the class
    empId:number = null
    empName:string = null
    empSalary:number = null
    empDepart: string = null

    addEmployee():any{
        alert(this.empId+" "+
        this.empName+" "+
        this.empSalary+" "+
        this.empDepart)
        this.empId = null
        this.empName = null
        this.empSalary = null
        this.empDepart = null
    }
}