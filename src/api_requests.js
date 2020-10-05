const KEY = 'K447WmBKHQuT6URO6t6Lxjxuo4bGMNxr';
let searchText="happy";
function weatherInfo(searchText){
   let weatherApi=`https://api.giphy.com/v1/gifs/search?api_key=${KEY}&limit=20&offset=0&rating=g&lang=en&q=${searchText}`;
    window.fetch(weatherApi)
    .then((data)=>{
        console.log(data);
        data.json().then((data)=>{
            console.log(data)
        }).catch(e => {console.log(e)});
    }).catch(e => {console.log(e)});
}
console.log(weatherInfo(searchText));


// import axios from 'axios';
// let KEY = 'K447WmBKHQuT6URO6t6Lxjxuo4bGMNxr';
// export const baseParams = {
// 	part: 'snippet',
// 	maxResults: 20,
// 	key: KEY,
// };
// let YoutubeApi = axios.create({
// 	baseURL: 'api.giphy.com/v1/gifs',
// });

// export default YoutubeApi;