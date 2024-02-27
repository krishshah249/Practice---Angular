import {Component} from '@angular/core';



@Component({

        selector: "addEmp",
        templateUrl: 'app.add.html'
})

export class AddEmployeeComponent{

        empRecords:AddEmployeeComponent[]=[];
        empId:number;
        empName:string;
        empSalary:number;


        addEmployee():any{
                var emp:AddEmployeeComponent= new AddEmployeeComponent();
                emp.empId=this.empId;
                emp.empName=this.empName;
                emp.empSalary=this.empSalary;
                this.empRecords.push(emp);
                //emp: AddEmployeeComponent ={empId:empId,empName:empName,empSalary:empSalary};// can work if type of emprecord is of any
                //this.empRecords.push(emp);
                for(let data of this.empRecords)
                console.log(data);
                //alert("Employee Added........."+this.empId+" "+this.empName+" "+this.empName);

        }

        deleteEmp(i:number):any{

                this.empRecords.splice(i,1);

        }

        updateEmp(): any{
                
                this.addEmployee();

        }
}

