export interface MovieInfo {
	id: number;
    name: string;
    releaseDate: number;
	genre: string;
	rating: number;
    review: string;
}

export interface SearchInfo {
	postId: number;
	id: number;
    name: string;
    emailId: number;
	body: string;
}