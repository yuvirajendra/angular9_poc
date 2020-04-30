import { Component, OnInit, OnDestroy } from '@angular/core';
import { MovieInfoService } from './movie-info.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-movie-summary',
  templateUrl: './movie-summary.component.html',
  styleUrls: ['./movie-summary.component.css']
})
export class MovieSummaryComponent implements OnInit, OnDestroy {
  movieColumns = ['id', 'name', 'releaseDate', 'genre', 'rating', 'review'];
  movieSummaryList = [];
  errorMessage = null;
  fetch = false;
  private fetchSubscription: Subscription;

  constructor(private _movieInfoService: MovieInfoService) { }

  ngOnInit(): void {
  }

  fetchMore(): void {
    this.movieSummaryList = null;
    this.fetch = true;
    this.errorMessage = null;
    this.movieColumns = ['id', 'name', 'releaseDate', 'genre', 'rating', 'review'];

    this.fetchSubscription = this._movieInfoService.getMoreMovieDetails().subscribe(
      movieInfoList => {
        this.fetch = false;
        this.movieSummaryList = movieInfoList;
      },
      error => {
          this.fetch = false;
          this.errorMessage = error.message;
      }
      //setTimeout()
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

  ngOnDestroy() {
    console.log("************ In Destroy method ************");
    //this.fetchSubscription.unsubscribe();
  }
}
