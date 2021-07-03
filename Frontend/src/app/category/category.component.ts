import { Component, OnInit } from '@angular/core';
import { DesignService } from '../design.service';
import { Router,ActivatedRoute } from '@angular/router';
import { SelectControlValueAccessor } from '@angular/forms';


@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  constructor(private designService:DesignService,private activatedRoute:ActivatedRoute) { }

  category:any;
  categoryObj:any;
  item:any;
  minprice:any;
  maxprice:any;
  color:any;

  ngOnInit(): void {

    this.activatedRoute.paramMap.subscribe(params => { 

      this.category = params.get("cat");
      this.color = params.get("col");
      this.minprice = params.get("min");
      this.maxprice = params.get("max");

      if(this.category == "dresses")
      {
        if(this.color == "All colors")
        {
          this.selectDressAll(this.minprice,this.maxprice);
        }
        else
        {
          this.selectDresses(this.color,this.minprice,this.maxprice);
        }
      }
      else if(this.color == "All colors")
      {
        this.selectAll(this.category,this.minprice,this.maxprice);
      }
      else
      {
        this.select(this.category,this.color,this.minprice,this.maxprice);
      }

   });

  }

  selectDressAll(minprice:any,maxprice:any)
  {
    this.designService.getPriceRange(minprice,maxprice)
    .subscribe(data => {
      this.categoryObj = data;
      console.log(this.categoryObj);

      $(document).ready(function(){
        $(".trend-decor").slice(0,8).show();
        $("#loadmore-btn").on("click", function(e){
          e.preventDefault();
          $(".trend-decor:hidden").slice(0, 8).slideDown();
          if($(".trend-decor:hidden").length == 0) {
            $("#loadmore-btn").text("No more designs in this category!").addClass("noContent");
          }
        });
      });

    });
  }

  selectDresses(color:any,minprice:any,maxprice:any)
  {
    this.designService.getDresses(color,minprice,maxprice)
    .subscribe(data => {
      this.categoryObj = data;
      console.log(this.categoryObj);

      $(document).ready(function(){
        $(".trend-decor").slice(0,8).show();
        $("#loadmore-btn").on("click", function(e){
          e.preventDefault();
          $(".trend-decor:hidden").slice(0, 8).slideDown();
          if($(".trend-decor:hidden").length == 0) {
            $("#loadmore-btn").text("No more designs in this category!").addClass("noContent");
          }
        });
      });
      
    });
  }

  selectAll(category:any,minprice:any,maxprice:any)
  {
    this.designService.getColors(category,minprice,maxprice)
    .subscribe(data => {
      this.categoryObj = data;
      console.log(this.categoryObj);

      $(document).ready(function(){
        $(".trend-decor").slice(0,8).show();
        $("#loadmore-btn").on("click", function(e){
          e.preventDefault();
          $(".trend-decor:hidden").slice(0, 8).slideDown();
          if($(".trend-decor:hidden").length == 0) {
            $("#loadmore-btn").text("No more designs in this category!").addClass("noContent");
          }
        });
      });
      
    });
  }

  select(category:any,color:any,minprice:any,maxprice:any)
  {
    this.designService.getCategory(category,color,minprice,maxprice)
    .subscribe(data => {
      this.categoryObj = data;
      console.log(this.categoryObj);

      $(document).ready(function(){
        $(".trend-decor").slice(0,8).show();
        $("#loadmore-btn").on("click", function(e){
          e.preventDefault();
          $(".trend-decor:hidden").slice(0, 8).slideDown();
          if($(".trend-decor:hidden").length == 0) {
            $("#loadmore-btn").text("No more designs in this category!").addClass("noContent");
          }
        });
      });
      
    });
  }
  
}
