import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { endpoint } from '../../common/utility/constants';
import { CategoryList } from '../../models/category-list.model';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) { }

  public getCategories(): Observable<CategoryList> {
    return this.http.get<CategoryList>(endpoint.external.category);
  }
}