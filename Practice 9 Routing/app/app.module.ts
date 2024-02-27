import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import { AddEmployeeComponent } from './app.addemployee';
import { ShowEmployeeComponent } from './app.showemployee';
import { SearchEmployeeComponent } from './app.searchemployee';
import {FormsModule } from '@angular/forms';
import {Routes,RouterModule} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import { MyPipe } from './app.myownpipe';

const routes:Routes=[
    {path:'',redirectTo:'show',pathMatch:'full'},
    { path:'add',component:AddEmployeeComponent},
    { path:'show',component:ShowEmployeeComponent },
    { path:'search',component:SearchEmployeeComponent },
    { path: 'show/:id', component:ShowEmployeeComponent}
];

@NgModule({
    imports: [
        BrowserModule,FormsModule,HttpClientModule,RouterModule.forRoot(routes)
        
    ],
    declarations: [
        AppComponent,AddEmployeeComponent,ShowEmployeeComponent,SearchEmployeeComponent,MyPipe
		],
    providers: [ ],
    bootstrap: [AppComponent]
})

export class AppModule { }
