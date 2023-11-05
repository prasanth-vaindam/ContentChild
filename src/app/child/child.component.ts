import { Component, ContentChild, ElementRef } from '@angular/core';
import { TestComponent } from '../test/test.component';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
})
export class ChildComponent {
  @ContentChild('temp') src: ElementRef | undefined;

  @ContentChild(TestComponent, { static: true }) fgh: TestComponent | undefined;
  printmessage() {
    console.log(this.src?.nativeElement.innerText);
    console.log(this.fgh);
  }
}
