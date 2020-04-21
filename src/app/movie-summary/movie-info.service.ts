import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { map, retry, catchError } from 'rxjs/operators';
import { MovieInfo, SearchInfo } from './movie-info';
import { Observable, throwError } from 'rxjs';
import { Options } from 'selenium-webdriver/chrome';

@Injectable({
  providedIn: 'root'
})
export class MovieInfoService {
  movieSummaryList = [
  {
    "id": 1,
    "name": "Alaipayuthe",
    "releaseDate": 2000,
    "genre": "romance",
    "rating": 5,
    "review": "awesome"
  },
  {
    "id": 2,
    "name": "Run",
    "releaseDate": 2001,
    "genre": "romance",
    "rating": 5,
    "review": "good"
  },
  {
    "id": 3,
    "name": "Uyire",
    "releaseDate": 2000,
    "genre": "romance",
    "rating": 5,
    "review": "excellent"
  }];
 
  constructor(private _httpClient: HttpClient) { }

  getMoreMovieDetails() {
    var requestUrl = environment.movieInfoUrl;
    console.log("Movie URL: " + requestUrl);
    return this._httpClient.get<MovieInfo[]>(requestUrl).pipe(
      map((response: MovieInfo[]) => {
        // Raw data of Response object
        console.log("************* Observable **********");
        console.log(response);
        return response;
      }),
      retry(3),
      catchError(this.errorHandler)
    );
  }

  // Error handler should return Observable type of Error object
  private errorHandler(objError: HttpErrorResponse) {
    console.log(objError.message);
    //return Observable.throw(objError);
    return throwError(objError); // In Angular 9 throwError Internally creates Observable
  }

  searchInfoById(searchById: number) {
    var requestUrl = environment.searchInfoUrl;
    const params = new HttpParams().set('postId', searchById.toString());
    console.log("Movie URL: " + requestUrl);
    return this._httpClient.get<SearchInfo[]>(requestUrl, {params}).pipe(
      map((response: SearchInfo[]) => {
        // Raw data of Response object
        console.log("************* Observable: Search By ID **********");
        console.log(response);
        return response;
      })
    );
  }

  onPostService(postRequest) {
    let headers = new HttpHeaders().set('yuviValue', 'Hello')
                                   .set('surenValue', 'Tango');

    return this._httpClient.post(environment.postUrl, postRequest, {headers}).pipe(
      retry(3),
      catchError(this.errorHandler)
    );
  }
}
