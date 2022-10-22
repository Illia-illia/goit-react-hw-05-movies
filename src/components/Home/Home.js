const API_KEY = '3ac081bb5a6656bd17b65b2baae4e0dd';
const BASE_URL = 'https://api.themoviedb.org/3';
const TREDING = 'trending/all/day?';

export const Home = () => {
  const fet = BASE_URL + TREDING + API_KEY;
  console.log(fet);

  fetch(`${BASE_URL}/${TREDING}api_key=${API_KEY}`)
    .then(r => r.json())
    .then(movies => console.log(movies));
  return (
    <div>
      <h1> Trending today</h1>
    </div>
  );
};
