import {Component} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';



@Component({

        selector:'login',    
        templateUrl:'app.LoginPage.html'

})

export class LoginPageComponent{


    user:string=""
    pass:string=""

    constructor(private r: Router){}
    
    verify(){
        if(this.user=="yoyo"&& this.pass=="yoyo")
            this.r.navigate(['afterlog',{user:this.user}])       
    }

    

}