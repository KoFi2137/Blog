import {data} from "/js/data.js"
console.log(data[0].autor)

let articulList = document.querySelector
("#articleList");
let articul = document.querySelector
("#blogtext");

function displayArticlesList() {
    articulList.innerHTML=data.map(article=> {
        return(
            `
            <a class="link" href="omnie.html">${article.name}</a>
            `
        )
    }
    
    ).join("")
}
function displayArticles() {
    articul.innerHTML=data.map(article=> {
        return(
            `
          
            `
        )
    }
    
    ).join("")
}
displayArticlesList()
// displayArticles()