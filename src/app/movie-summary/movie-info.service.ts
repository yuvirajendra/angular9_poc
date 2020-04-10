import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { map } from 'rxjs/operators';
import { MovieInfo } from './movie-info';

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
      })
    );
  }
}
