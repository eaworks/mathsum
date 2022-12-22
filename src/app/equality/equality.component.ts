import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-equality',
  templateUrl: './equality.component.html',
  styleUrls: ['./equality.component.scss']
})
export class EqualityComponent implements OnInit {
  mathForm = new FormGroup({
    firstNumber: new FormControl(this.generateNumber()),
    secondNumber: new FormControl(this.generateNumber()),
    answer: new FormControl(''),
  });
  get firstNumber() {
    return this.mathForm.value.firstNumber;
  }
  get secondNumber() {
    return this.mathForm.value.secondNumber;
  }

  constructor() { }

  ngOnInit(): void {
  }

  generateNumber() {
    return Math.floor(Math.random() * 10);
  }

}
