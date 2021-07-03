import { Component, OnInit } from '@angular/core';
import { DesignService } from '../design.service';
import { Router } from '@angular/router';

import * as $ from "jquery";
import { hasLifecycleHook } from '@angular/compiler/src/lifecycle_reflector';


@Component({
  selector: 'app-design',
  templateUrl: './design.component.html',
  styleUrls: ['./design.component.css']
})
export class DesignComponent implements OnInit {

  constructor(private designService:DesignService,private router:Router) { }

  designs:any;
  value:any;

  ngOnInit(): void {
    $("#btn-radio1").attr({"class":"active"});
    $(".dress-select").attr({"checked":"true"});
    $("#createbar").hide();

    
    // $(document).ready(function(){
    //   $(".select-check").click(function(e){
    //     var category = $("input[name='btnradio1']:checked").val();
    //     var color = $("input[name='btnradio2']:checked").val();
    //     var price = $("input[name='btnradio3']:checked").val();
        

       
    //     alert(category);
    //     alert(color);
    //     alert(price);
    //     $(".right-cont").load("/design/select/category/Kurti");
    //   });
    // });

    
   
  }


  select(){
    $("#btn-radio1").attr({"class":"active"});
    $("#btn-radio2").attr({"class":"inactive"});
    $("#selectbar").show();
    $("#createbar").hide();
  }

  create(){
    $("#btn-radio2").attr({"class":"active"});
    $("#btn-radio1").attr({"class":"inactive"});
    $("#createbar").show();
    $("#selectbar").hide();
    $(".dress-create").attr({"checked":"true"});
  }



}
