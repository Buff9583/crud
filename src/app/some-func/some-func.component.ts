import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-some-func',
  templateUrl: './some-func.component.html',
  styleUrls: ['./some-func.component.css']
})
export class SomeFuncComponent implements OnInit {

  constructor() {
    this.addsomenumber(3, 4);
    this.addsomenumber1(5, 6);
    this.fib(50);
  }

  ngOnInit() {
  }

  addsomenumber(valueOne, valueTwo) {
    console.log(valueOne + valueTwo);
  }

  addsomenumber1(One, Two) {
    console.log(One * Two);
  }

  square(a, b, c) {
    const D = b * b - 4 * a * c;
    if (D > 0) {
      var x = (-b + Math.sqrt(D)) / (2 * a);
      var x1 = (-b - Math.sqrt(D)) / (2 * a);
    }
    if (D = 0) {
      var x = -(b / (2 * a));
    }
  }

  fib(n) {
    var fib1 = 1;
    var fib2 = 1;
    var result  = fib1 + fib2;
    for (let i = 2; i < n; i++) {
      fib1 = fib2;
      fib2 = result;
      result = fib1 + fib2;
    }
    console.log(result);

  }
}
