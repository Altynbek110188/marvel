
let private_KEY = "3b40f35aa14b0992028b1d740ab84d3486fb206a";
let public_KEY = "8438769ca1bf737cf996fb7c2d5eee82";
let BASE_URL = "https://gateway.marvel.com"

let p = document.querySelector(".title")

async function makeQuery(endpoint) {
    
    const ts = new Date().getTime();
    const hash = md5(ts + private_KEY +public_KEY)
    const response = await fetch(`${BASE_URL+ endpoint}?ts=${ts}&apikey=${public_KEY}&hash=${hash}`);
    return await response.json()
}



async function showQuerys() {
    const { data } = await makeQuery('/v1/public/comics');

    for (const title of data.results) {
        let main = document.querySelector('.main')
            main.innerHTML +=`
            <div class="movie_image"
                style="background-image: url(${title.thumbnail.path}.${title.thumbnail.extension});
                width: 192px;
                height: 287px;">
            </div>
            <p>${title.title}</p>
        `
    }
}

showQuerys()