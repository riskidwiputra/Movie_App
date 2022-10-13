import componen from "./componen.js";
import RequestService from "./requestService";


function getPopular(){
    var url = `${componen.BASE_URL_3}/search/v2/articlesearch.json${componen.API_KEY}`
    return RequestService.getRequest(url)
}
function getAll(){

}

function getDatasearch(request){
    var url = `${componen.BASE_URL_3}/movie/top_rated?api_key=${componen.API_KEY}`
    return RequestService.getRequest(url)
}

export default getDatasearch