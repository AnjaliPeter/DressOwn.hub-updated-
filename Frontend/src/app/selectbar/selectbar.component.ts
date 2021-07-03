import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// import { Options } from 'ng5-slider';
import { Options } from "@angular-slider/ngx-slider";
import * as $ from "jquery";


@Component({
  selector: 'app-selectbar',
  templateUrl: './selectbar.component.html',
  styleUrls: ['./selectbar.component.css']
})
export class SelectbarComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {

  }

  value: number = 200;
  highValue: number = 5000;
  options: Options = {
    floor: 200,
    ceil: 5000
  };

  price:String="";

  category(){
    var category = $("input[name='btnradio1']:checked").val();
    var color = $("input[name='btnradio2']:checked").val();
    var minprice = this.value;
    var maxprice = this.highValue;

    $("#msg").html("Between ₹"+minprice+" - ₹"+maxprice);
    
    this.router.navigate(["/design/select/"+category+"/"+color+"/"+minprice+"/"+maxprice]);
  }
  
}
