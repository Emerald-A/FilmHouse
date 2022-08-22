function addBgColor(params) {
     document.getElementById("navBar").classList.add("bgBlack");
}

var LoginForm = document.getElementById("LoginForm");
var RegForm = document.getElementById("RegForm");
var indicator = document.getElementById("indicator");

function register() {
  RegForm.style.transform = "translateX(0px)";
  LoginForm.style.transform = "translateX(0px)";
  indicator.style.transform = "translateX(100px)";
}

function login() {
  RegForm.style.transform = "translateX(300px)";
  LoginForm.style.transform = "translateX(300px)";
  indicator.style.transform = "translateX(-10px)";
}


var users = [];
var email = document.getElementById("email");
var username = document.getElementById("username");
var pwd = document.getElementById("password");
var btnUp = document.getElementById("signup");

let get = JSON.parse(localStorage.getItem("signUp"));
if (get != null) {
    users = get;
}

btnUp.addEventListener("click",(e)=>{

  e.preventDefault()

  if(email.value == "" || username.value == "" || pwd.value == ""){
      empty();
  } else{
         success();
        //  console.log("sent");

  }


    users.push({
        username:username.value,
        email:email.value,
        pwd:pwd.value
    })
    console.log(users);
    let local = localStorage.setItem("signUp",JSON.stringify(users));
    //   if (local == null) {
    //     localStorage.setItem("signUp",JSON.stringify(users));
    //   } else{
    //     localStorage.setItem("signUp");
    //   }
    
    
    email.value = "";
    username.value = "";
    pwd.value = "";

})



var u_name = document.getElementById("u_name");
var pword = document.getElementById("pword");
var logi = document.getElementById("login");

for (let i = 0; i < users.length; i++) {
  console.log(users);
  // console.log(users[0].username);

 
}
let us;
let pw;
let log = []

logi.addEventListener("click", (e)=>{
  e.preventDefault();

  us = u_name.value;
  pw = pword.value;

   if (us == users[i].username && pw == users[i].pwd) {
    log.push({
      nam:us,
      pos:pw,
    })
    
    let newt = JSON.parse(localStorage.getItem("person"));
    if (newt != null) {
        log = newt;
    };


    localStorage.setItem("person",JSON.stringify(log));


    login_success();
    
    us.innerHTML = "";
    pw.innerHTML = "";

    window.location.href = "home1.html";
   } else{
    if (us == "" || pw == "") {
      empty();
    }
     alert("Invalid Login Details")
   }

})
 




    function success(){
      swal({
      title: "Good job!",
      text: "PROCEED TO LOGIN",
      icon: "success",
      button: "OK!",
});
  }

  function login_success(){
    swal({
    title: "Good job!",
    text: "LOGIN SUCCESSFUL",
    icon: "success",
    button: "OK!",
});
}

  function error(){
      swal({
      title: "Oops!",
      text: "Something went wrong",
      icon: "error",
      button: "OK!",
});
  }

  function empty(){
      swal({
      title: "Oops!",
      text: "Input field are required",
      icon: "error",
      button: "OK!",
});
  }


// Home page











// THE TYPEWRITER

var x = document.getElementById("demo");
// var timing = null;
var arr = 
[
    "Affordable viewing with maximum satisfaction!",
    "Join now & get UNLIMITED movie tickets FREE every weekday!",
    "Watch for free for up to 2 months when you subscribe to an annual plan"
];
let curarr = []
let del = false
let i = 0
let y = 0
   
function type() {
    x.innerHTML = curarr.join("")
  if (i < arr.length) {
   
    if (!del && y <= arr[i].length) {
       curarr.push(arr[i][y])
        y++
        x.innerHTML = curarr.join("")
    }
   if (del && y <= arr[i].length) {
       curarr.pop(arr[i][y])
       y--
       x.innerHTML = curarr.join("")
   }
    if (y == arr[i].length) {
        del = true
    }
    if(del && y == 0){
        curarr = []
        del = false
        i++
        if(i == arr.length){
            i = 0
        }
    }


  }
 
  setTimeout(type, 100)
}
// type();

// END TYPEWRITER


var page1 = document.querySelector(".page1");
// let prefix = "./package/Images/";
var bgarr = 
[
     "./package/Images/thor-love-and-thunder.jpg",
     "./package/Images/uncharted.webp",
     "./package/Images/juju.jpg"
]

var contentarr = 
[
 {
     title: "THOR : LOVE AND THUNDER",
     description: "Thor: Love and Thunder” finds the God of Thunder (Chris Hemsworth) on a journey unlike anything he's ever faced – a quest for inner peace. But Thor's retirement is interrupted by a galactic killer known as Gorr the God Butcher (Christian Bale), who seeks the extinction of the gods.",
     genre: "ACTION, ADVENTURE, FANTASY"
 },

 {
     title: "UNCHARTED",
     description: "Uncharted is a 2022 American action-adventure film directed by Ruben Fleischer from a screenplay by Rafe Lee Judkins, Art Marcum, and Matt Holloway, based on the video game franchise of the same name developed by Naughty Dog and published by Sony Interactive Entertainment.",
     genre: "ACTION, ADVENTURE, FANTASY"
 },

 {
     title: "JURRASIC WORLD",
     description: "Four years after the destruction of Isla Nublar, Biosyn operatives attempt to track down Maisie Lockwood, while Dr Ellie Sattler investigates a genetically engineered swarm of giant insects.",
     genre: "ACTION, SCIENCE, FANTASY"
 }
]


for (let i = 0; i < bgarr.length; i++) {
     window.addEventListener("load", bgcolr())
}

var movie_name = document.getElementById("movie_name");
var otherText = document.querySelector(".otherText");
function bgcolr() {
     // page1.style.backgroundImage = "linear-gradient(to bottom, rgba(0,0,0,0) 20%, rgba(0,0,0,1)), url('./package/Images/thor-love-and-thunder.jpg')";
     // var m = Math.floor(Math.random() * bgarr.length)
     // let h = page1.style.backgroundImage;
     // h.url = m
     setInterval(()=>{
          let mart = Math.floor(Math.random() * bgarr.length);
           page1.style.backgroundImage = `linear-gradient(to bottom, rgba(0,0,0,0) 20%, rgba(0,0,0,1)), url('${bgarr[mart]}')`
       
           for (let a = 0; a < contentarr.length; a++) {
            if (mart == 0) {
              movie_name.innerHTML = contentarr[0].title;
              otherText.innerHTML = contentarr[0].description;
            } else if (mart == 1) {
              movie_name.innerHTML = contentarr[1].title;
              otherText.innerHTML = contentarr[1].description;
            } else if(mart == 2){
              movie_name.innerHTML = contentarr[2].title;
              otherText.innerHTML = contentarr[2].description;
            } 
            
        }
      
     },5000)

}
















// modal
document.getElementById("id-s").addEventListener("click", function(){
  document.getElementById("mod").style.display = "block"
 
 });
 document.getElementById("open").addEventListener("click",function(){
  document.getElementById("mod").style.display = "none"
});






