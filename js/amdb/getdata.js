
import componen from "./componen.js";
import RequestService from "./requestService.js";

class getData{

    async getMovies(page = 1) {
        let url = `${componen.BASE_URL_3}movie/top_rated?api_key=${componen.API_KEY}&page=${page}`
        let data = await RequestService.getRequest(url);
       this.desainMovie(data)
    }
    async getSearch(request,page=1){
        let url = `${componen.BASE_URL_3}search/movie?api_key=${componen.API_KEY}&query=${request}&page=${page}`
        let data = await RequestService.getRequest(url);
        console.log(data);
        this.desainMovie(data)
    }
    async desainMovie(data){

        let show = ``;
        let curentpage = data.page;
        if (data.results.length == 0){
            show +=`<div style="text-align: center;font-family: 'Dosis', sans-serif;
            font-size: 36px;
            color: #ffffff;
            font-weight: 700;
            margin: auto;
            text-transform: uppercase;
            margin-bottom: 20%;
            margin-top:20%"><h1>DATA YANG DICARI TIDAK DITEMUKAN</h1></div>`
          
        }else{
            data.results.forEach((element) => {
                
            show += `<div class="movie-item-style-2 movie-item-style-1">
                <img src="${componen.IMAGE}${element.poster_path }" alt="">
                <div class="hvr-inner">
                        <a  href=""> Baca Info <i class="ion-android-arrow-dropright"></i> </a>
                        </div>
                <div class="mv-item-infor">
                    <h6><a href="#">${element.original_title}</a></h6>
                    <p class="rate"><i class="ion-android-star"></i><span>${element.vote_average}</span> /10</p>
                </div>
                </div>`;
            });
        }
       let halaman = `halaman ${curentpage} dari ${data.total_pages} :`
       document.getElementById("listmovie").innerHTML = show;
       document.getElementById("total_film").innerHTML = data.total_results;
       document.getElementById("halaman_page").innerHTML = halaman;
      }
}
export default new getData()