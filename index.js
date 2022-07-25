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
        }else{
            console.log(data)
            displayContent(data)
        }
    } catch (error) {
        console.log(error)
    }

}
function displayContent(data){
    
    container.innerHTML = ""
    let content = document.createElement("div")

    let poster = document.createElement("img")
    poster.src = data.Poster
    let title = document.createElement("p")
    title.innerText = "Movie Title: "+data.Title
    let releaseDate = document.createElement("p")
    releaseDate.innerText = "Released on: "+data.Released
    content.append(poster,title,releaseDate)
    container.append(content)
    console.log(poster,title,releaseDate)
}