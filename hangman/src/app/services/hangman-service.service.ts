import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HangmanService {

  constructor() { }
  private words : Array<HangmanWord> = [
    {word: "tissue", category:"biology"},
    {word: "orphanage", category:"buildings"},
    {word: "crossbow", category:"weapons"},
    {word: "omnipotent", category:"adjectives"},
    {word: "kernel", category:"computer science"},
    {word: "crankshaft", category:"cars"}
  ]

  getRandomWord() : HangmanWord {
    return this.words[Math.floor(Math.random() * this.words.length)]
  }

}

export class HangmanWord {

  constructor(public word : string, public category : string) {
  }


}