import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup } from '@angular/forms';
import { delay, filter } from 'rxjs';
import { EqualityValidators } from '../equality-validators';

@Component({
  selector: 'app-equality',
  templateUrl: './equality.component.html',
  styleUrls: ['./equality.component.scss']
})
export class EqualityComponent implements OnInit {
  // validator u komple forma veriyoruz.
  mathForm = new FormGroup({
    firstNumber: new FormControl(this.generateNumber()),
    secondNumber: new FormControl(this.generateNumber()),
    answer: new FormControl(''),
  }, [EqualityValidators.addition('answer', 'firstNumber', 'secondNumber')]);
  get firstNumber() {
    return this.mathForm.value.firstNumber;
  }
  get secondNumber() {
    return this.mathForm.value.secondNumber;
  }

  constructor() { }

  ngOnInit(): void {
    this.mathForm.statusChanges.pipe(filter(value => value === 'VALID'), delay(1000)).subscribe((value) => {
      // if (value === 'INVALID') {
      //   return;
      // }
      // setValue degerlerin hepsinin degistirilmesini ister. biri eksikse hata verir
      // patchValue belirtilen degerleri update eder.
      this.mathForm.setValue({
        firstNumber: this.generateNumber(),
        secondNumber: this.generateNumber(),
        answer: ''
      });

    });
  }

  generateNumber() {
    return Math.floor(Math.random() * 10);
  }

}
