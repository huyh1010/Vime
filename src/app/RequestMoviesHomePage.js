const API_KEY = "e1f8d9135767f496aea2eddea5fd8521";

const requestMovies = {
  fetchTrending: `/trending/movie/day?api_key=${API_KEY}`,
  fetchUpcoming: `/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`,
  fetchPopular: `/movie/popular?api_key=${API_KEY}&language=en-US&page=1`,
  fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`,
};
export default requestMovies;

// fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
// fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
// fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
