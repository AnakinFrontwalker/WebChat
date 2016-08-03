import {Directive, AfterViewChecked} from '@angular/core';
declare var componentHandler: any;
declare var fields: any;

@Directive({
    selector: '[mdl]'
})
export class MDL implements AfterViewChecked {
    ngAfterViewChecked() {
        componentHandler.upgradeAllRegistered();    
        var el: any = document.querySelector('.mdl-textfield');
        if (el)
            if (el.MaterialTextfield) {
                el.MaterialTextfield.boundUpdateClassesHandler();
            }
    }
}