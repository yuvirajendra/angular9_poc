import { Component } from '@angular/core';

@Component({
  selector: 'app-component',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'sample-project';

  objUser = {name: 'Yuvi', age: 32, city: 'Irving'};

  addMovieReviewList = [{
    name: 'Alaipayuthey',
    category: 'Romance',
    releaseYear: '1999',
    rating: 5,
    reviewComments: ''
  },
  {
    name: 'Thenaali',
    category: 'Comedy',
    releaseYear: '2001',
    rating: 4,
    reviewComments: ''
  }];

  customMethod(event: any): void {
    console.log('Emitted event Name: ' + event.name);
    console.log('Emitted event Age: ' + event.age);
    console.log('Emitted event City: ' + event.city);
  }

  addMovieReviewLst(moviereview: any): void {
    console.log('Add Emitter');
    this.addMovieReviewList.push(moviereview);
  }

  deleteMovieReviewLst(): void {
    console.log('Delete Emitter');
    this.addMovieReviewList.pop();
  }
}