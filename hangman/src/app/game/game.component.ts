import { Component, OnInit } from '@angular/core';
import { HangmanService, HangmanWord } from '../services/hangman-service.service';
import { CurrentGameService } from '../services/current-game.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {

  randomWord : string
  constructor(private hangmanService : HangmanService, private currentGameService : CurrentGameService) {
    
  }

  startNewGame(word : HangmanWord) {
    let randomWord : HangmanWord = this.hangmanService.getRandomWord()
    this.currentGameService.setWord(word)
  }


  
  ngOnInit() {
  }

}
