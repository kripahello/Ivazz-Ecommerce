// Home page js
function menuClick(){
  document.getElementById("menuCategories").style.display = "block" ;
}

function clickOut(){
  document.getElementById("menuCategories").style.display = "none" ;
}


// login page js
let btn=`
<a href="index.html"><button type="button" id="signUpBtn"> Sign In </button>
</a>`

function signUp() {
  document.getElementById("formCreate").style.display = "block";
  document.getElementById("welcome").style.display = "none";
}

function signIn() {
  document.getElementById("headingWelcome").innerHTML = "Sign In";
  document.getElementById("login-input-first").value = "Enter Your Name";
  document.getElementById("login-input-second").value = "Password";
  document.getElementById("dissapearingBtnLogIn").innerHTML = btn;
  document.getElementById("signUpBtn").style.background = "grey"; 
  document.getElementById("signUpBtn").style.color = "white"; 

}


      // let menuIcon = `<i class="fa-solid fa-bars"></i>`;
      // var x = window.matchMedia("(max-width: 768px)");
      // myFunction(x); // Call listener function at run time
      // x.addListener(myFunction); // Attach listener function on state changes
      // function myFunction(x) {
      //   if (x.matches) {
      //     // If media query matches
      //     var button = document.getElementById("menuOptions");
      //     button.innerHTML = menuIcon;
      //     button.style.fontSize= "20px";
          

      //     //  document.getElementById("menuOptions").style.fontSize = "x-large";
      //   }
      // }
    