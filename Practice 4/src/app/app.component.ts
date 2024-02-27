import { Component } from '@angular/core';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { a } from '@angular/core/src/render3';

@Component({
    selector: 'app',
    templateUrl: 'app.component.html'
})


export class AppComponent { 
    Array:any[]=[
                {empId:1002,empName:'Vikash',empSal:11000,empDep:'ORAAPS',empjoiningdate:'6/12/2017'},
                {empId:1003,empName:'Uma',empSal:12000,empDep:'JAVA',empjoiningdate:'6/12/2010'},
                {empId:1004,empName:'Sachin',empSal:11500,empDep:'ORAAPS',empjoiningdate:'11/12/2017'},
                {empId:1005,empName:'Amol',empSal:7000,empDep:'.NET',empjoiningdate:'1/1/2018'},
                {empId:1006,empName:'Vishal',empSal:17000,empDep:'BI',empjoiningdate:'9/12/2012'},
                {empId:1007,empName:'Rajita',empSal:21000,empDep:'BI',empjoiningdate:'6/7/2014'},
                {empId:1001,empName:'Rahul',empSal:9000,empDep:'JAVA',empjoiningdate:'6/12/2014'}

    ]

    sortById(){
        this.Array = this.Array.sort((a,b)=>{return (a.empId-b.empId)});
    }

    sortByName(){
        this.Array = this.Array.sort((a,b)=>{return a.empName.localeCompare(b.empName)});
    }

    sortBySalary(){
        this.Array = this.Array.sort((a,b)=>{return a.empSal - b.empSal})
    }

    sortByDep(){
        this.Array = this.Array.sort((a,b)=>{
            return a.empDep.localeCompare(b.empDep);
        })
    }

    sortByDate(){
        this.Array = this.Array.sort((a,b)=>{
            if(new Date(a.empjoiningdate)<new Date(b.empjoiningdate)){
                return -1;
            }
            else
                return 1;
        })
    }
}