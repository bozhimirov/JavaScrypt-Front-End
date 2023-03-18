function movieCatalog(input) {
  let movies = [];

  for (const line of input) {
    if (line.includes("addMovie")) {
      [command, movieName] = line.split("addMovie ");
      addMovie(movieName);
    } else if (line.includes("directedBy")) {
      [movieName, director] = line.split(" directedBy ");
      addDirector(movieName, director);
    } else {
      [movieName, date] = line.split(" onDate ");
      addDate(movieName, date);
    }
  }

  let filteredMovies = movies.filter(
    (movie) =>
      movie.hasOwnProperty("name") &&
      movie.hasOwnProperty("date") &&
      movie.hasOwnProperty("director")
  );

  for (const movie of filteredMovies) {
    console.log(JSON.stringify(movie));
  }

  function addMovie(name) {
    movies.push({ name });
  }

  function addDirector(name, director) {
    let movie = movies.find((m) => m.name === name);
    if (movie) {
      movie.director = director;
    }
  }

  function addDate(name, date) {
    let movie = movies.find((m) => m.name === name);
    if (movie) {
      movie.date = date;
    }
  }
}

movieCatalog([
  "addMovie Fast and Furious",
  "addMovie Godfather",
  "Inception directedBy Christopher Nolan",
  "Godfather directedBy Francis Ford Coppola",
  "Godfather onDate 29.07.2018",
  "Fast and Furious onDate 30.07.2018",
  "Batman onDate 01.08.2018",
  "Fast and Furious directedBy Rob Cohen",
]);
