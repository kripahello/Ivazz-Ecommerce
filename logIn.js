let btn=`
<a href="index.html"><button type="button" id="signUpBtn"> Sign In </button>
</a>

`

function signUp() {
  document.getElementById("formCreate").style.display = "block";
  document.getElementById("welcome").style.display = "none";
}

function signIn() {
  document.getElementById("headingWelcome").innerHTML="Sign In";
  document.getElementById("login-input-first").value="Enter Your Name";
  document.getElementById("login-input-second").value="Password";
  document.getElementById("dissapearingBtnLogIn").innerHTML=btn;
}
