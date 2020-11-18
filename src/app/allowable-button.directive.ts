import { ElementRef, HostBinding } from '@angular/core';
import { Renderer2 } from '@angular/core';
import { Directive, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[allowableButton]',
})
export class AllowableButtonDirective {
  nativeElement: any;
  parent: any;
  @HostBinding('disabled') allowButton = true;

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    const checkbox = this.renderer.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.addEventListener('click', (event: Event) => {
      this.allowButton = !this.allowButton;
    });
    this.renderer.appendChild(this.elementRef.nativeElement, checkbox);
  }
}
