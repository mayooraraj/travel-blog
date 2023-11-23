import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHeadingstyle]'
})
export class HeadingstyleDirective {

  constructor(public el:ElementRef) {
    this.el.nativeElement.style.fontSize="80px";
    this.el.nativeElement.style.textAlign="center";
    this.el.nativeElement.style.fontWeight="bold";
    this.el.nativeElement.style.marginBottom="50px";
   }

}

