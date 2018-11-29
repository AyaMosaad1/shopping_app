import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test7',
  templateUrl: './test7.component.html',
  styleUrls: ['./test7.component.css']
})
export class Test7Component implements OnInit {
  array = [1, 2, 3, 4, 5];
  odd = [1, 3, 5];
  onlyodd = false;
  value = 9;


  constructor() { }

  ngOnInit() {
  }

}
