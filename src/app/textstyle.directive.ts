import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appTextstyle]'
})
export class TextstyleDirective {

  constructor(private el:ElementRef) {
    this.el.nativeElement.style.color="slategray";
    this.el.nativeElement.style.fontfamilt="'Arial', sans-serif;";
    this.el.nativeElement.style.fontSize="28px";
   }
  

}
