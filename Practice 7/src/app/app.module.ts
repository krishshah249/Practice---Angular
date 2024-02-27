import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import {HttpClientModule} from '@angular/common/http'
import { FormsModule} from '@angular/forms'
import { from } from 'rxjs';
import {Filtering} from './app.filtering'

@NgModule({
    imports: [
        BrowserModule,HttpClientModule,FormsModule
        
    ],
    declarations: [
        AppComponent, Filtering
		],
    providers: [ ],
    bootstrap: [AppComponent]
})

export class AppModule { }