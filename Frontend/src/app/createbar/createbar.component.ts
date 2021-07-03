import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as $ from "jquery";


@Component({
  selector: 'app-createbar',
  templateUrl: './createbar.component.html',
  styleUrls: ['./createbar.component.css']
})
export class CreatebarComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {

  }


  prototype(){
    alert("alerted");
    this.router.navigate(["/design/dresses"],{state:{"protoarea":['dresses']}});
  }

}
