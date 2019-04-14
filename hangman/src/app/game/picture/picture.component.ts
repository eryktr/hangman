import { Component, OnInit } from '@angular/core';
import { CurrentGameService } from 'src/app/services/current-game.service';

@Component({
  selector: 'app-picture',
  templateUrl: './picture.component.html',
  styleUrls: ['./picture.component.scss']
})
export class PictureComponent implements OnInit {

  constructor(private cgs : CurrentGameService) { }

  ngOnInit() {
  }

}
