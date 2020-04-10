import { Component, OnInit, Output, EventEmitter, Input, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { categoryToken } from './CategoryConst';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  movieFormGroup: FormGroup;
  @Input() movieReviewList;
  @Output() addMovieReview = new EventEmitter();
  @Output() deleteMovieReview = new EventEmitter();

  constructor(
    @Inject(categoryToken) public categoryList,
    private objFormBuilder: FormBuilder
  ) {}
 
  ngOnInit(): void {
    this.movieFormGroup = this.objFormBuilder.group({
      name: this.objFormBuilder.control('', Validators.compose([
        Validators.required,
        Validators.pattern('\\w[A-Za-z]+')
      ])),
      category: this.objFormBuilder.control('', Validators.required),
      releaseYear: this.objFormBuilder.control('', this.releaseYearValidator),
      rating: this.objFormBuilder.control(''),
      reviewComments: this.objFormBuilder.control('')
    })
  }

  deleteReview(): void {
    console.log('Delete');
    this.deleteMovieReview.emit();
  }

  movieFormSumbit(movieFormGroup: any): void {
    console.log(movieFormGroup);
    this.addMovieReview.emit(movieFormGroup);
  }

  displayMovieDetails(index: any): void {
    this.movieFormGroup.controls['name'].setValue(this.movieReviewList[index].name);
    this.movieFormGroup.controls['category'].setValue(this.movieReviewList[index].category);
    this.movieFormGroup.controls['releaseYear'].setValue(this.movieReviewList[index].releaseYear);
    this.movieFormGroup.controls['rating'].setValue(this.movieReviewList[index].rating);
    this.movieFormGroup.controls['reviewComments'].setValue(this.movieReviewList[index].reviewComments);
    console.log('Index: ' + index);
  }

  releaseYearValidator(releaseYear: FormControl) {
    const minYear = 1970;
    const maxYear = 2020;

    const year = parseInt(releaseYear.value, 10);

    if (releaseYear.value == '') {
      return null;
    } else if (year >= minYear && year <= maxYear) {
      return null;
    } else {
      return {releaseYear: {
        min: minYear,
        max: maxYear
      }}
    }
  }
}
