import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor(private fb : FormBuilder ) { }

  contactForm = this.fb.group( {
    name: ['', Validators.required],
    topic: ['', Validators.required],
    content: ['', Validators.required]
  })

  OnSubmit() {
    document.write("xD");
  }
  
  ngOnInit() {
  }

}
