import {
  Directive,
  ElementRef,
  EventEmitter,
  HostListener,
  Output
} from '@angular/core';

@Directive({
  selector: '[appClickOutside]',
  standalone: true
})
export class ClickOutsideDirective {

  @Output() outsideClick = new EventEmitter<void>();

  constructor(private el: ElementRef) {}

 @HostListener('document:click', ['$event.target'])
onDocumentClick(target: EventTarget | null) {
  if (!target || !(target instanceof HTMLElement)) {
    return;
  }

  if (!this.el.nativeElement.contains(target)) {
        console.log('outside click detected');
    this.outsideClick.emit();
  }
}
}
