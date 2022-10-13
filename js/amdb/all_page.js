
import getData from "./getdata.js";

window.onload = function() {
  getData.getMovies();
};


document.getElementById('search').addEventListener("change", (eventOutput) => {
  console.log(eventOutput.target.value);
  eventOutput.target.value == "" ? getData.getMovies() : getData.getSearch(eventOutput.target.value)
});
    


  