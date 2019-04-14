import { Component, OnInit } from '@angular/core';
import { HangmanService } from 'src/app/services/hangman-service.service';
import { CurrentGameService } from 'src/app/services/current-game.service';

@Component({
  selector: 'app-keyword',
  templateUrl: './keyword.component.html',
  styleUrls: ['./keyword.component.scss']
})
export class KeywordComponent implements OnInit {

  constructor(private cgs : CurrentGameService) {
    
  }

  ngOnInit() {
  }

}
