// let newt = localStorage.getItem("person");
let newt = JSON.parse(localStorage.getItem("person"));
// if (newt != null) {
//     users = newt;
// };
// console.log("hi there",users[0].username);
console.log(newt[0].nam,"hi there");

document.getElementById("home1user").innerHTML = `<span class="bi bi-person-fill"></span> ${newt[0].nam}`;


asynco()

async function asynco(){
    try {
  const response = await fetch("https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=bcb8056ac2ac59d46aa6087ef0747132");
  const data = await response.json();
        showMovies(data.results);
        tickets(data.results); 
    } catch (error) {
        console.log("error 404");
    }
}
    function showMovies(data) {
        let pre = "https://image.tmdb.org/t/p/w500/"
        let searchResult = data.filter((value)=>{
            return value
        })
        // console.log(searchResult);
        for (let i = 0; i < searchResult.length; i++) {
            console.log(searchResult[i]);
            document.querySelector(".movieList").innerHTML += `
            <div class="movie">
            <div class="coverPic">
            <a href="ticket.html">
                <img src="${pre+searchResult[i].poster_path}" id = "cardBtns" alt="" srcset="" class="coverImg">
             </a>
            </div>
            <div class="movieInfo">
                 <h1>${searchResult[i].original_title}</h1>
                 <span>Adult: ${searchResult[i].adult}</span>
     <p style = " max-height:100px; overflow-y:scroll;">${searchResult[i].overview}</p>
                 <button class="btn btn-md timeSelection">10:20am</button>
                 <button class="btn btn-md timeSelection">10:20am</button>
                 <button class="btn btn-md timeSelection">10:20am</button>
                 <button class="btn btn-md timeSelection">10:20am</button>
                 <button class="btn btn-md timeSelection">10:20am</button>
            </div>
       </div>
            
            `            
        }
        
    } 


    
    let cardBtns = document.querySelectorAll(".cardBtns");
 

    function tickets(params) {
        let purchases = params.filter((value)=>{
            return value;
        })
        localStorage.setItem("purchase", JSON.stringify(purchases))  
         
        for (let i = 0; i < purchases.length; i++) {    
            console.log("purchases here");
            
            for (let a = 0; a < cardBtns.length; a++) {
                cardBtns[a].addEventListener("click",()=>{
                 
            //         let pT = JSON.parse(localStorage.getItem("purchase"))
            // if (pT != null) {
            //     purchases = pT;
            // }
        
            //     localStorage.setItem("purchase", JSON.stringify(purchases))  
        
                console.log("successfulllly");
                 window.location.href = "ticket.html";
        
                })
            }
            
        }
        
     
    }