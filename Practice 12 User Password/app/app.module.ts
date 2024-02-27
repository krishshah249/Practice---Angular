import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import {Routes, RouterModule} from '@angular/router';
import { LoginPageComponent } from './app.login';
import { RegisterPageComponent } from './app.register';
import {FormsModule} from '@angular/forms';
import { AfterLoginComponent } from './app.afterLogin';

const r:Routes=[

    {path:'log',component:LoginPageComponent},
    {path:'afterlog',component:AfterLoginComponent},
    {path:'afterlog/:user',component:AfterLoginComponent},
    {path:'reg',component:RegisterPageComponent}
]


@NgModule({
    imports: [
        BrowserModule,RouterModule.forRoot(r),FormsModule
        
    ],
    declarations: [
        AppComponent,LoginPageComponent,RegisterPageComponent,AfterLoginComponent
		],
    providers: [ ],
    bootstrap: [AppComponent]
})

export class AppModule { }