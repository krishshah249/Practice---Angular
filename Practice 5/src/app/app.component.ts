import { Component } from '@angular/core';


@Component({
    selector: 'app',
    templateUrl: 'app.component.html'
})

export class AppComponent {
    productId:number=null;
    productName:string=null;
    productCost:number=null;
    status1:boolean;
    status:string=null;
    category:string=null;
    available1:string=null;
    available2:string=null;
    available3:string=null;
    available4:string=null;
    array:any[]=[];


    AddAvail(data){
        if(this.array.indexOf(data)==-1){
        this.array.push(data);
        this.status1=true;
    }
        else{
        this.array.splice(this.array.indexOf(data),1);
            if(this.array.length==0)
            this.status1=false;
    }
    }

    addProduct(){
        alert("Product Added");
       
        console.log("Product ID="+this.productId,"\nProduct Name="+this.productName,
        "\nProduct Cost="+this.productCost,"\nAvailable Online="+this.status,
        "\nProduct Category="+this.category,"\nAvailable in Store="+this.array);
    }   
 }