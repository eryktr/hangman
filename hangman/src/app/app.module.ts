import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { NavComponent } from './nav/nav.component';
import { GameComponent } from './game/game.component';
import { KeyboardComponent } from './game/keyboard/keyboard.component';
import { PictureComponent } from './game/picture/picture.component';
import { KeywordComponent } from './game/keyword/keyword.component';
import { ContactComponent } from './contact/contact.component';


@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    NavComponent,
    GameComponent,
    KeyboardComponent,
    PictureComponent,
    KeywordComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
