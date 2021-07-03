import { Component, OnInit } from '@angular/core';
import { PrototypeService } from '../prototype.service';
import { Router,ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-prototype',
  templateUrl: './prototype.component.html',
  styleUrls: ['./prototype.component.css']
})
export class PrototypeComponent implements OnInit {

  constructor(private prototypeService:PrototypeService,private activatedRoute:ActivatedRoute) { }

  prototype:any;
  protoObj:any;

  ngOnInit(): void {

    this.activatedRoute.paramMap.subscribe(params => { 

      this.prototype = params.get("proto");
      alert(this.prototype);


      this.loadMore(this.prototype);
      
     

    });

    

  }

  loadMore(proto:any){
    this.prototypeService.getPrototypes(this.prototype)
      .subscribe(data => {
      this.protoObj = data;
      console.log(this.protoObj);

    $(document).ready(function(){
      // $(".trend-decor").slice(0,4).hide();
      $(".trend-decor").slice(0,4).show();
      $("#loadmore-btn").on("click", function(e){
        e.preventDefault();
        // e.stopImmediatePropagation();
        $(".trend-decor:hidden").slice(0,4).slideDown();
        if($(".trend-decor:hidden").length === 0) {
          $("#loadmore-btn").text("No more designs in this category!").addClass("noContent");
        }
      });
    });
  });
}

}
