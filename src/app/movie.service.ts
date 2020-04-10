export class MovieService {
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

  constructor() { }

  getMovieList() {
    return this.addMovieReviewList;
  }
}
