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

  constructor(private _movieInfoService: MovieInfoService) { }

  ngOnInit(): void {
  }

  fetchMore(): void {
    this._movieInfoService.getMoreMovieDetails().subscribe(
      movieInfoList => {
        this.movieSummaryList = movieInfoList;
      }
    );

    console.log("************* Subscribe **********");
    console.log(this.movieSummaryList);
  }
}
