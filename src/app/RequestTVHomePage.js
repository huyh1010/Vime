const API_KEY = "e1f8d9135767f496aea2eddea5fd8521";

const requestTV = {
  fetchTrending: `/trending/tv/day?api_key=${API_KEY}`,
  fetchOnAir: `/tv/on_the_air?api_key=${API_KEY}&language=en-US&page=1`,
  fetchPopular: `/tv/popular?api_key=${API_KEY}&language=en-US&page=1`,
  fetchTopRated: `/tv/top_rated?api_key=${API_KEY}&language=en-US&page=1`,
};

export default requestTV;
