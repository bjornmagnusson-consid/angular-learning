import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http'
import { ICategory } from './category.model';
import { Observable, catchError, of } from 'rxjs';
import { AppConfig } from './app-config.service';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor(private http: HttpClient, private config: AppConfig) { }

  private readonly api = '/api/categories';

  getCategories() : Observable<ICategory[]> {
    console.log('CategoriesService getCategories')
    return this.http.get<ICategory[]>(this.config.getApiUrl(this.api)).pipe(
      catchError(this.handleError)
    )
  }

  getCategory(id: Number) : Observable<ICategory> {
    console.log('CategoriesService getCategory ' + id)
    return this.http.get<ICategory>(this.config.getApiUrl(this.api + '/' + id)).pipe(
      catchError(this.handleError)
    )
  }

  saveCategory(category: ICategory) : Observable<void> {
    console.log('CategoriesService saveCategory')
    console.log(category)
    if (category.id === undefined) {
      return this.http.put<ICategory>(this.config.getApiUrl(this.api), category).pipe(
        catchError(this.handleError)
      )
    }
    return this.http.put<ICategory>(this.config.getApiUrl(this.api), category).pipe(
      catchError(this.handleError)
    )
  }

  private handleError(error: HttpErrorResponse) : Observable<any> {
    return of([]);
  }
}
