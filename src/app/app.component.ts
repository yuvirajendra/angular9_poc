import { Component } from '@angular/core';
import { MovieService } from './movie.service';

@Component({
  selector: 'app-component',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'sample-project';

  objUser = {name: 'Yuvi', age: 32, city: 'Irving'};

  tempMovieList: any;

  displayMessage = "Hi Suren...";

  constructor(private objMovieService: MovieService) {
    this.tempMovieList = objMovieService.getMovieList();

    setTimeout(() => {
      this.displayMessage = "Hi Yuvi...";
    }, 3000);
  }

  customMethod(event: any): void {
    console.log('Emitted event Name: ' + event.name);
    console.log('Emitted event Age: ' + event.age);
    console.log('Emitted event City: ' + event.city);
  }

  addMovieReviewLst(moviereview: any): void {
    console.log('Add Emitter');
    console.log(moviereview);
    this.objMovieService.getMovieList().push(moviereview);
  }

  deleteMovieReviewLst(): void {
    console.log('Delete Emitter');
    this.objMovieService.getMovieList().pop();
  }
}