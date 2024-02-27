import {Component, Input, Output,EventEmitter} from '@angular/core';


@Component({

    selector: 'showEmp',
    templateUrl: 'showEmployee.html'
})

export class ShowEmployeeComponent{

    @Input()
    data:string;

    @Output()
    notify:EventEmitter<string> = new EventEmitter<string>();

    callingParent():any{

        this.notify.emit("data send from show to add");
    }

}