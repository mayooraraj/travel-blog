import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appImagesize]'
})
export class ImagesizeDirective {

  constructor(public el:ElementRef) {
    this.el.nativeElement.style.width="60px";
    this.el.nativeElement.style.height="60px";
   }

}
