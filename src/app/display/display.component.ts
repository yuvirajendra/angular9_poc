import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {
  @Input() objDisplay;
  @Output() objLoginEmitter = new EventEmitter();
  formElements: FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.formElements = new FormGroup({
        name: new FormControl('Yuvi', // Validators.pattern('[\\w\\-\\s\\/]+')
        Validators.compose([
          Validators.required,
          Validators.pattern('[\\w\\-\\s\\/]+')
        ])
        ),
        age: new FormControl('', this.ageValidator),
        city: new FormControl('Irving')
    });
  }

  onLogin(): void {
    console.log('Display button is clicked');
    this.objLoginEmitter.emit(this.objDisplay);
  }

  formSubmit(formId: any): void {
    console.log(formId);
  }

  ageValidator(ageControl: FormControl) {
    var minAge = 16;
    var maxAge = 60;

    console.log('Age: ' + ageControl.value);
    const age = parseInt(ageControl.value, 10);

    if (ageControl.value.trim().length == 0) {
      return null;
    }

    if (age >= minAge && age <= maxAge) {
      return null;
    } else {
      return {age:
                {
                  min: minAge,
                  max: maxAge
                }};
    }
  }
}
