import { Injectable } from '@angular/core';
import { HangmanWord, HangmanService } from './hangman-service.service';
import { containsTree } from '@angular/router/src/url_tree';
import {$} from 'jquery/dist/jquery.min.js'
@Injectable({
  providedIn: 'root'
})
export class CurrentGameService {

  started : Boolean
  currentWord : HangmanWord
  guessArray : Array<string>

  usedLetters : Array<string>
  contains : Map<string, boolean>

  constructor() {

  }

  setWord(word : HangmanWord) {
    this.currentWord = word
    this.guessArray = []
    this.usedLetters = []
    this.contains = new Map<string, boolean>()
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
          this.contains[letter] = true;
        }
      })
      if (!this.contains.get(letter)) {
        this.contains[letter] = false;
      }
    }
    this.usedLetters.push(letter)
  }

  letterGuessed(letter : string) : Boolean {
    return this.usedLetters.includes(letter) && this.currentWord.word.includes(letter)
  }

  letterFailed(letter : string) : Boolean {
    return this.usedLetters.includes(letter) && !this.currentWord.word.includes(letter)
  }
}
