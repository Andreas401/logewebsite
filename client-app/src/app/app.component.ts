import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
declare var jquery: any;
declare var $: any;

declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'client-app';

  constructor(private httpClient: HttpClient) { }



  ngOnInit() {
    var i = 0;
    var images = ['http://localhost:3000/images/footerimages/7star01altCirkel.png', 'http://localhost:3000/images/footerimages/Book_of_Ballymote_170r_ogham.jpg', 'http://localhost:3000/images/footerimages/Kontakt-druide.png'];
    console.log(images.length);


    window.setInterval(function () {
      $('#imga').fadeOut(200, function () {
        $('#imga').attr("src", images[(++i % images.length)]);
        $('#imga').fadeIn(200);
      });
    }, 10000);

  }
}
