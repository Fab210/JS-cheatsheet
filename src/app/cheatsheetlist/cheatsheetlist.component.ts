import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {es6data} from "./../models/es6data";

@Component({
  selector: 'app-cheatsheetlist',
  templateUrl: './cheatsheetlist.component.html',
  styleUrls: ['./cheatsheetlist.component.css']
})



export class CheatsheetlistComponent implements OnInit{

  jses6data : es6data;
  constructor(private httpService: HttpClient) { }

  

  ngOnInit() {
    this.httpService.get('../assets/es6data.json').subscribe(
      data => {
        this.jses6data = data as es6data;	 // FILL THE ARRAY WITH DATA.
        console.log(this.jses6data);
      },
      (err: HttpErrorResponse) => {
        console.log (err.message);
      }
    );

  }
  
}
