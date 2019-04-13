import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-keyboard',
  templateUrl: './keyboard.component.html',
  styleUrls: ['./keyboard.component.scss']
})
export class KeyboardComponent implements OnInit {

  lettersRowOne = ['a','b','c','d','e','f','g','h', 'i', 'j', 'k', 'l', 'm']
  lettersRowTwo = ['n','o','p','q','r','s','t','u','v','w','x','y','z']

  constructor() { }

  ngOnInit() {
  }

}
