import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loggedin',
  templateUrl: './loggedin.component.html',
  styleUrls: ['./loggedin.component.css']
})
export class LoggedinComponent implements OnInit {

  role = 'rookie';
  constructor() { }

  ngOnInit() {
  }

}
