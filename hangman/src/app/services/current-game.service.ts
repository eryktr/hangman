import { Injectable } from '@angular/core';
import { HangmanWord, HangmanService } from './hangman-service.service';

@Injectable({
  providedIn: 'root'
})
export class CurrentGameService {

  started : Boolean
  currentWord : HangmanWord
  guessArray : Array<string> = []

  constructor() {

  }

  setWord(word : HangmanWord) {
    this.currentWord = word
    for (let c of this.currentWord.word) {
      this.guessArray.push("_")
    }
    console.log(this.guessArray)
    this.started = true
  }
  
  
}
