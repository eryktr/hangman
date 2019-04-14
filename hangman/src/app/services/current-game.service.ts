import { Injectable } from '@angular/core';
import { HangmanWord, HangmanService } from './hangman-service.service';

@Injectable({
  providedIn: 'root'
})
export class CurrentGameService {

  started : Boolean
  currentWord : HangmanWord
  guessArray : Array<string>

  usedLetters : Array<string>

  constructor() {

  }

  setWord(word : HangmanWord) {
    this.currentWord = word
    this.guessArray = []
    this.usedLetters = []
    for (let c of this.currentWord.word) {
      this.guessArray.push("_")
    }
    console.log(this.guessArray)
    this.started = true
  }
  
  guessLetter(letter : string) {
    if (this.currentWord.word.includes(letter)) {
      this.guessArray.forEach((v, i, a) => {
        if (this.currentWord.word[i] == letter) {
          a[i] = letter;
        }
      })
      console.log(this.guessArray); 
    }
  }
}
