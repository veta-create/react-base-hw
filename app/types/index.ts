export interface BasketState {
    basket: Array<{ id: string, name: string, genre: string, poster: string, tickets: number }> | [],
    ticketsCount: number
};

export interface FilmsState {
    allMovies: MovieType[],
    cinemas: CinemaType[]
};

export interface FilterState {
    nameFilter: string,
    genreFilter: string,
    cinemaFilter: { name: string, movies: string[] }
};

export interface MovieType {
    description: string,
    director: string,
    genre: string,
    id: string,
    posterUrl: string,
    rating: number,
    releaseYear: number,
    reviewIds: string[],
    title: string
};

export interface CommentType {
    id: string,
    name: string,
    text: string,
    rating: number
};

export interface CinemaType {
    id: string,
    name: string,
    moviesIds: [] | null;
};