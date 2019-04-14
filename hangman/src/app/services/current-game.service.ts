import { Injectable } from '@angular/core';
import { HangmanWord, HangmanService } from './hangman-service.service';

@Injectable({
  providedIn: 'root'
})
export class CurrentGameService {

  private started : Boolean
  private currentWord : HangmanWord
  private guessArray : Array<string>

  constructor() {

  }

  setWord(word : HangmanWord) {
    this.currentWord = word
    for (let c of this.currentWord.word) {
      this.guessArray.push("_")
    }
    this.started = true
  }
  
  
}
