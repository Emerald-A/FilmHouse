let parameters = JSON.parse(localStorage.getItem('purchase'));

console.log(parameters,"hiii theeww");
let img = document.querySelector(".img");
let h1t = document.getElementById("h1");
let pdes = document.getElementById("p-des");
let pre = "https://image.tmdb.org/t/p/w500/"
for (let i = 0; i < parameters.length; i++) {    
    img.src = pre+parameters[i].poster_path;
    h1t.innerHTML = parameters[i].original_title;
    pdes.innerHTML = parameters[i].overview;

}


const container1 = document.querySelector(".container1");
const seats = document.querySelectorAll('.row .seat:not(.occupied)');
const count = document.getElementById("count");
const total = document.getElementById("total");
const movieSelect = document.getElementById("movie");

populateUI();

let ticketPrice = +movieSelect.value;

//save movie index and price
function setMovieData(movieIndex, moviePrice) {
    localStorage.setItem('selectedMovieIndex', movieIndex);
    localStorage.setItem('selectedMoviePrice', moviePrice);
}

//update total and count
function  updateSelectedCount(){
    const selectedseats = document.querySelectorAll('.row .seat.selected')

    const seatsIndex = [...selectedseats].map(function (seat) {
        return [...seats].indexOf(seat);
    })

    localStorage.setItem("selectedSeats", JSON.stringify(seatsIndex));

    const selectedSeatsCount = selectedseats.length;

    count.innerText = selectedSeatsCount;
    total.innerText = selectedSeatsCount * ticketPrice;
}

//get data from local storage and populate the UI
function populateUI() {
    const selectedSeats = JSON.parse(localStorage.getItem('selectedSeats'))

    if (selectedSeats !== null && selectedSeats.length > 0) {
        seats.forEach((seat, index)=>{
            if (selectedSeats.indexOf(index) > -1) {
                seat.classList.add('selected')
            }
        })
    }

    const selectedMovieIndex = localStorage.getItem('selectedMovieIndex')
    if (selectedMovieIndex != null) {
        movieSelect.selectedIndex = selectedMovieIndex;
    }
}

//movieselect event
movieSelect.addEventListener("change", e =>{
    ticketPrice = +e.target.value;
    setMovieData(e.target.selectedIndex, e.target.value); 
    updateSelectedCount();
})

container1.addEventListener("click", (e)=>{
    if (e.target.classList.contains('seat') && !e.target.classList.contains('occupied')) {
        e.target.classList.toggle('selected')
    }

    updateSelectedCount();
})

updateSelectedCount();


document.getElementById('book_seat').addEventListener("click",()=>{
    document.querySelector('.body-con').style.display = "flex";
    window.location.hash = "#navigateHere";
})