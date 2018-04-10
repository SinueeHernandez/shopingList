import { Directive,  HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {

  @HostBinding('class.open') openClose = false;

  @HostListener('click') toggleOpen() {
    this.openClose = !this.openClose;
  }

  constructor( ) {  }
}
