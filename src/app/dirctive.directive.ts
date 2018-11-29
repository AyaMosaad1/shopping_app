import { Directive, OnInit, ElementRef, Renderer2, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appDirctive]'
})
export class DirctiveDirective implements OnInit{
  /*_to use fun ngOnInit should use onInit in class header
    _ private  renderer take the css value  and elementref take change to style my sheet
    _ call the directive by selector in html file
    _to add if condition to my directive use @HostListener yellow when reload and red when mouse over
    _we can use @HostBinding('style.element')element :string; replace renderer
*/



  constructor(private elRef: ElementRef,
    private renderer: Renderer2) { }

  @HostBinding('style.backgroundColor') backgroundcolor: string;

  ngOnInit() {
    //this.renderer.setStyle(this.elRef.nativeElement,'background-color', 'yellow');
    this.backgroundcolor = 'yellow';
  }
  @HostListener('mouseenter') mouseover(eventData: Event) {
   // this.renderer.setStyle(this.elRef.nativeElement,'background-color', 'blue');
    this.backgroundcolor = 'blue';
  }
  @HostListener('mouseleave') mouseleave(eventData: Event) {
    //this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'red');
    this.backgroundcolor = 'red';
  }
}
