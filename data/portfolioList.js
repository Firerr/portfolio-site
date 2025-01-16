import weatherImage from '/assets/five-day-forecast/main.png';
import christmasImage from '/assets/christmas-movie-picker/main.png';
import fourCardImage from '/assets/fourcard/main.png';
import catImage from '/assets/catsapp/main.png';

export const portfolioList = [
  {
    name: '5 Day Forecast',
    description: 'A 5 day forecast made with Vite and OpenWeather API',
    projectImage: weatherImage,
    url: 'https://5-day-forecast.vercel.app/',
    gitLink: 'https://github.com/Firerr/5-day-forecast',
    skills: ['HTML', 'CSS', 'Javascript'],
  },
  {
    name: 'Christmas Movie Picker',
    description:
      'A day group project, that picks a Christmas movie from a database based on a selection of choices, uses an API, vite and tailwind',
    projectImage: christmasImage,
    url: 'https://christmas-movie-picker.vercel.app/',
    gitLink: 'https://github.com/Firerr/christmas-movie-picker',
    skills: ['react'],
  },
  {
    name: 'Four Card Feature',
    description:
      'Very early in learning code I had to use make the site look as close to the target as possible, uses html and css',
    projectImage: fourCardImage,
    url: 'https://four-card-feature-sigma-one.vercel.app/',
    gitLink: 'https://github.com/Firerr/four-card-feature',
    skills: ['html', 'css'],
  },
  {
    name: 'Cats Main',
    description: 'uses postman and vite',
    projectImage: catImage,
    url: 'https://cats-main.vercel.app/',
    gitLink: 'https://github.com/Firerr/cats-main',
    skills: [],
  },
];
