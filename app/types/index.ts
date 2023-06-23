export interface BasketState {
    basket: Array<{ id: string, name: string, genre: string, poster: string, tickets: number }> | [],
    ticketsCount: number
};

export interface Movie {
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

export type Basket = { id: string, name: string, genre: string, poster: string, tickets: number };