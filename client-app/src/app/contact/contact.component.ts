import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  emailForm;

  constructor(private formBuilder: FormBuilder) { 

    this.emailForm = this.formBuilder.group({
      name: '',
      email: '',
      message: ''
    });
  }

  onSubmit(email){
    console.log("Your email: " + JSON.stringify(email));
  }

  

  ngOnInit() {
  }

}
