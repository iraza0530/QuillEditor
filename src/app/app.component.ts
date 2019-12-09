import { Component } from '@angular/core';
declare var Quill: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public text: string;
  public source;
  public onTextChange($event): void {
    this.source = $event.source;
  }
  public title = 'editor-project';

  name = 'Angular 6';

  propagateChange = (_: any) => { };
  propagateTouched = () => { };
  registerOnChange(fn: (_: any) => void): void { this.propagateChange = fn; }
  registerOnTouched(fn: () => void): void { this.propagateTouched = fn; }
  public value: string;

  constructor() {
    // var fontSizeStyle = Quill.import('attributors/style/size');
    // fontSizeStyle.whitelist = ['0.75em','1em','1.5em','2.5em', '24px', '48px', '100px', '200px'];
    // Quill.register(fontSizeStyle, true);
  }


  writeValue(value: any) {
    this.value = value;
  }

  onTextChanged(event) {
    this.propagateChange(event.htmlValue);
  }
}
