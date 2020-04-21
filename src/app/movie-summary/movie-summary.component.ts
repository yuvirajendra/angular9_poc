import { Component, OnInit } from '@angular/core';
import { MovieInfoService } from './movie-info.service';

@Component({
  selector: 'app-movie-summary',
  templateUrl: './movie-summary.component.html',
  styleUrls: ['./movie-summary.component.css']
})
export class MovieSummaryComponent implements OnInit {
  movieColumns = ['id', 'name', 'releaseDate', 'genre', 'rating', 'review'];
  movieSummaryList = [];
  errorMessage = null;
  fetch = false;

  constructor(private _movieInfoService: MovieInfoService) { }

  ngOnInit(): void {
  }

  fetchMore(): void {
    this.movieSummaryList = null;
    this.fetch = true;
    this.errorMessage = null;
    this.movieColumns = ['id', 'name', 'releaseDate', 'genre', 'rating', 'review'];
    this._movieInfoService.getMoreMovieDetails().subscribe(
      movieInfoList => {
        this.fetch = false;
        this.movieSummaryList = movieInfoList;
      },
      error => {
          this.fetch = false;
          this.errorMessage = error.message;
      }
    );

    console.log("************* Subscribe **********");
    console.log(this.movieSummaryList);
  }

  searchById(searchById: number): void {
    this.movieSummaryList = null;
    this.fetch = true;
    this.errorMessage = null;
    console.log("Search Id: " + searchById);
    this.movieColumns = ['postId', 'id', 'name', 'email', 'body'];
    this._movieInfoService.searchInfoById(searchById).subscribe(
      searchInfoList => {
        this.fetch = false;
        this.movieSummaryList = searchInfoList;
      }
    );

    console.log("************* Subscribe: Search By Id **********");
    console.log(this.movieSummaryList);
  }

  onPost(): void {
    let mockRequest = {
      "userId": 1,
      "title": 'Yuvi',
      "body": "test"
    };

    this._movieInfoService.onPostService(mockRequest).subscribe(
      postResponse => {
        console.log(postResponse);
      }
    );
  }
}
