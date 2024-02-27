"use strict";
exports.__esModule = true;
var BasicPhone_1 = require("./BasicPhone");
var SmartPhone_1 = require("./SmartPhone");
var Mobile = /** @class */ (function () {
    function Mobile() {
        this.details = [
            { mobileId: 100, mobileName: "Nokia", mobilecost: 5000, mobiletype: new BasicPhone_1.BasicPhone().getMobileType() },
            { mobileId: 101, mobileName: "Apple", mobilecost: 70000, mobiletype: new SmartPhone_1.SmartPhone().getMobileType() },
            { mobileId: 102, mobileName: "MI", mobilecost: 20000, mobiletype: new SmartPhone_1.SmartPhone().getMobileType() },
        ];
    }
    Mobile.prototype.printMobileDetails = function () { console.log(this.details); };
    ;
    return Mobile;
}());
var m = new Mobile();
m.printMobileDetails();
