import { Injectable } from '@angular/core';
import { HangmanWord } from './hangman-service.service';

@Injectable({
  providedIn: 'root'
})
export class CurrentGameService {

  started : Boolean
  currentWord : HangmanWord
  guessArray : Array<string>
  
  images : Array<string> = ["img/hm0.jpg","img/hm1.jpg", "img/hm2.jpg", "img/hm3.jpg", "img/hm4.jpg", "img/hm5.jpg", "img/hm6.jpg", "img/hm7.jpg", "img/hm8.jpg"]
  currentImage : string

  usedLetters : Array<string>
  contains : Map<string, boolean>

  remainingLives : number

  constructor() {

  }

  setWord(word : HangmanWord) {
    this.currentWord = word
    this.guessArray = []
    this.usedLetters = []
    this.contains = new Map<string, boolean>()
    this.remainingLives = 8;

    this.currentImage = this.images[0]
    
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
