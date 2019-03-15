import { NgModule } from "@angular/core";
import { DropdownDirect } from "./dropdown.directive";
import { CommonModule } from "@angular/common";

@NgModule({
    declarations: [
        DropdownDirect
    ],
    exports: [
        CommonModule,
        DropdownDirect
    ]
})

export class SharedModule{

}