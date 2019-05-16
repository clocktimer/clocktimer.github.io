firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.
      $("#login").hide();
      $("#logoutbtn").show();
      $("#logoutbtnbox").show();
      $("#classesbtn").show();
      $("#loginbtn").hide();
      $("div").css("filter", "blur(0px)");
      $("#bottompart").show();
      
//    document.getElementById("user_div").style.display = "block";
    document.getElementById("login").style.display = "none";
    var user = firebase.auth().currentUser;
      
    getclasses();
      
    if(user != null){

      var email_id = user.email;
//      document.getElementById("user_para").innerHTML = "Welcome User : " + email_id;
    
    }

  } else {
    // No user is signed in.
      $("#loginbtn").show();
      $("#classesbtn").hide();
      $("#logoutbtn").hide();
      $("#logoutbtnbox").hide();
      $("#bottompart").hide();
      
//    document.getElementById("user_div").style.display = "none";
//    document.getElementById("login").style.display = "block";

  }
});

function login(){

  var userEmail = document.getElementById("email_field").value;
  var userPass = document.getElementById("password_field").value;

  firebase.auth().signInWithEmailAndPassword(userEmail, userPass).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;

    window.alert("Error : " + errorMessage);

    // ...
  });
}

function signup(){
    
    var NewUserEmail = document.getElementById("email_field").value;
    var NewUserPassword = document.getElementById("password_field").value;
    
    firebase.auth().createUserWithEmailAndPassword(NewUserEmail, NewUserPassword).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
//        window.alert("New Account Created!\n" + "Email: " + NewUserEmail + "\nPassword: " + NewUserPassword)
        window.alert("New Account Created!")
        document.location.reload();
        // ...
    });
}

function logout(){
  firebase.auth().signOut();
}
