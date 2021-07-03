import { Component, OnInit } from '@angular/core';
import { StitchService } from '../stitch.service';


@Component({
  selector: 'app-stitch',
  templateUrl: './stitch.component.html',
  styleUrls: ['./stitch.component.css']
})
export class StitchComponent implements OnInit {

  constructor(private stitchService:StitchService) { }

  designs:any;

  ngOnInit(): void {
    this.stitchService.getDesigns()
    .subscribe(data =>
      {
        this.designs = data;
        console.log(this.designs);
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


