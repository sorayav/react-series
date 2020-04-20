const ENDPOINT = 'https://api.tvmaze.com/search/shows?q=girls'

const fetchShows = () => fetch(ENDPOINT).then(response => response.json());

export default fetchShows;