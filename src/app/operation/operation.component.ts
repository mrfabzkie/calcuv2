import { NumberSymbol } from '@angular/common';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-operation',
  templateUrl: './operation.component.html',
  styleUrls: ['./operation.component.css']
})
export class OperationComponent implements OnInit {

  constructor() { }
  @Input() firstNum: number;
  @Input() secondNum: number;

  ans=0;
  solv: number;
  ngOnInit(): void {}
onAdd() {
    this.ans = this.firstNum + this.secondNum;
    this.solv = this.ans;
    console.log(this.ans);
  }

  onSubtract() {
    this.ans = this.firstNum - this.secondNum;
    this.solv = this.ans;
    console.log(this.ans);
  }

  onMultiply() {
    this.ans = this.firstNum * this.secondNum;
    this.solv = this.ans;
    console.log(this.ans);
  }

  onDivide() {
    this.ans = this.firstNum / this.secondNum;
    this.solv = this.ans;
    console.log(this.ans);
  }
}
