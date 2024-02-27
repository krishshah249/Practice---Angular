import {Component, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({

    selector:'aftlog',    
    templateUrl:'app.succLogin.html'

})

export class AfterLoginComponent implements OnInit{
    ngOnInit(): void {
        this.username=this.active.snapshot.params['user']
        console.log(this.username)
    }
    
    username:string;
    constructor(private active:ActivatedRoute){}

    
}