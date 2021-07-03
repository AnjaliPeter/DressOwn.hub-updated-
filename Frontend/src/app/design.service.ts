import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class DesignService {

  constructor(private http:HttpClient) { }

  getDesigns()
  {
    let httpHeaders = new HttpHeaders({
      "content-Type" : "application/json"
    });
    return this.http.get<any>("http://localhost:9999/designs",{headers:httpHeaders});
  }

  getOneDesign(id:any){
    let httpHeaders = new HttpHeaders({
      "content-Type" : "application/json"
    });
    return this.http.get<any>("http://localhost:9999/designs/singledesign/"+id,{headers:httpHeaders});
  }

  getDresses(color:any,min:any,max:any){
    let httpHeaders = new HttpHeaders({
      "content-Type" : "application/json"
    });
    return this.http.get<any>("http://localhost:9999/designs/dresses/"+color+"/"+min+"/"+max,{headers:httpHeaders});
  }

  getColors(category:any,min:any,max:any){
    let httpHeaders = new HttpHeaders({
      "content-Type" : "application/json"
    });
    return this.http.get<any>("http://localhost:9999/designs/colors/"+category+"/"+min+"/"+max,{headers:httpHeaders});
  }

  getPriceRange(min:any,max:any){
    let httpHeaders = new HttpHeaders({
      "content-Type" : "application/json"
    });
    return this.http.get<any>("http://localhost:9999/designs/price/"+min+"/"+max,{headers:httpHeaders});
  }

  getCategory(cat:any,col:any,min:any,max:any){
    let httpHeaders = new HttpHeaders({
      "content-Type" : "application/json"
    });
    return this.http.get<any>("http://localhost:9999/designs/select/"+cat+"/"+col+"/"+min+"/"+max,{headers:httpHeaders});
  }

}
