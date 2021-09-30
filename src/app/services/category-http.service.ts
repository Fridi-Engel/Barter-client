import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import { Category } from '../tables/category';
import { Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CategoryHttpService {

  constructor(private http:HttpClient) { }

  GetAllCtegories():Observable<Category[]>{
    return this.http.get<Category[]>("http://localhost:62127/api/Categories/GetCategories");
  }

  cat:Category[]=[];
  GetCategoryByName(categoryName:string):number{
   this.GetAllCtegories().subscribe(x=>this.cat=x)
   var id:number;
   id=this.cat.find(x=>x.CategoryName==categoryName)?.CategoryId as number;
   return id;
  }
}
