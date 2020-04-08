import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styles: [`.btnstyle_green {color: green;}
            .btnstyle_blue {color: blue;}
            .btnstyle_italic {font-style: italic;}`]
})
export class SampleComponent implements OnInit {
  var1 = 'Yuvi';
  myId = 'yuvi1';
  isTrue = true;
  styleVar = 'btnstyle_italic';
  strList = ['Yuvi', 'Saranya', 'Shamili', 'Ashwini'];
  multiStyle = {'btnstyle_green': this.isTrue,
                'btnstyle_blue': !this.isTrue,
                'btnstyle_italic': true};
  objSampleUser = {name: 'Suren', age: 32, city: 'Bentonville'};

  constructor() {
    console.log('In constructor...' + this.var1);
   }

  ngOnInit(): void {
    console.log('OnInit pre assign...' + this.var1);
    this.var1 = 'Suren';
    console.log('OnInit...' + this.var1);
  }

  callOnClick(): void {
    console.log('CallOnClick...' + this.var1);
    this.isTrue = !this.isTrue;
    this.multiStyle.btnstyle_blue = this.isTrue;
  }

  onClickOfSubmit(idValue: HTMLInputElement): void {
    console.log("Value: " + idValue.value);
  }

  templateCallableFunction(): string {
    return 'Yuvi';
  }

  getLocation(): string {
    return window.location.href;
  }

}
