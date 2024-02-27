import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import {AddEmployeeComponent} from './app.addemployee';
import {FormsModule} from '@angular/forms';
import {MyPipe} from './app.myownpipe'
import {Routes} from '@angular/router'

const r: Routes=[

    {path:'',redirectTo:'show',pathMatch:'full'},


]

@NgModule({
    imports: [
        BrowserModule,FormsModule
        
    ],
    declarations: [
        AppComponent,AddEmployeeComponent,MyPipe
		],
    providers: [ ],
    bootstrap: [AppComponent]
})

export class AppModule { }