import { Component, OnInit, SimpleChange } from "@angular/core";
import { EmployeeService } from "./app.employeeservice";
import {  ActivatedRoute, Params} from "@angular/router";



@Component({
    selector:'show-comp',
    templateUrl:'showemployee.html'
})


export class ShowEmployeeComponent implements OnInit{

    constructor(private myservice:EmployeeService,private _active:ActivatedRoute){

    console.log("In show constructor")
    this.empAll=myservice.getAllEmployees();

    }
    empAll:any[]=[];

    data:any;
    ngOnInit(){
        this.data=this._active.snapshot.params['id'];
    }
 
}


 /*  ngOnInit(){
        //this.myservice.getAllEmployees().subscribe((data:any)=>this.empAll=data);
        //this.empAll=this.myservice.getAllEmployees();
        this.myservice.subject.subscribe((data:any)=>{
            console.log("hello in subject subscribe");
        console.log(data)
        this.empAll=data});
    }
*/