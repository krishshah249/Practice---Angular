import {BasicPhone} from './BasicPhone';
import {SmartPhone} from './SmartPhone';

class Mobile{

    mobileId:number;
    mobileName:string;
    mobilecost:number;
    mobiletype:string;
    
details:any[]=[
    { mobileId:100,mobileName:"Nokia",mobilecost:5000,mobiletype:new BasicPhone().getMobileType()},
    { mobileId:101,mobileName:"Apple",mobilecost:70000,mobiletype:new SmartPhone().getMobileType()},
    { mobileId:102,mobileName:"MI",mobilecost:20000,mobiletype:new SmartPhone().getMobileType()},
    ];

    printMobileDetails(): void{console.log(this.details)};
}

var m =new Mobile();
m.printMobileDetails();