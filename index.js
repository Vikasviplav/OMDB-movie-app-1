let API_KEY = "12a9b708"
let container = document.getElementById("container")



async function display() {
    try {
        let title = document.querySelector("#searchbox").value
        let url = `http://www.omdbapi.com/?apikey=${API_KEY}&t=${title}`
        let res = await fetch(url)
        let data = await res.json()
        if (data.Error) {
            container.innerHTML = ""
            let er = data.Error
            let p = document.createElement("p")
            p.innerText = er
            container.append(p)
        } else {
            console.log(data)
            displayContent(data)
        }
    } catch (error) {
        console.log(error)
    }

}
function displayContent(data) {

    container.innerHTML = ""
    let content = document.createElement("div")

    let poster = document.createElement("img")
    poster.src = data.Poster
    let title = document.createElement("p")
    title.innerText = "Movie Title: " + data.Title
    let releaseDate = document.createElement("p")
    releaseDate.innerText = "Released on: " + data.Released
    

    let rating = data.Ratings[0].Value
    rating = parseFloat(rating)
    console.log(rating)
    if (rating > 8.5) {
        let p = document.createElement("p")
        p.innerText = `IMDB Rating ${rating}`
        let q = document.createElement("p")
        q.innerText = "Recommended"
        let s = document.createElement("span")
        s.innerHTML = `
        <style>
        .checked{
            color:orange;
        }
        #frame{
            text-align:center;
            margin-bottom:10px;
        }
        
        </style>
        <div id="frame">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star"></span>
        </div>`
        
        content.append(p,q, s)
    }
    content.append(poster, title, releaseDate)
    container.append(content)

}