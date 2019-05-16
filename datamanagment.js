
function writeUserData(block1A, block2A, block3A, block4A, block1B, block2B, block3B, block4B) {
    var database = firebase.database();
    var user = firebase.auth().currentUser;
    firebase.database().ref('Classes/' + user.uid).set({
        block1A: block1A,
        block2A: block2A,
        block3A: block3A,
        block4A: block4A,
        block1B: block1B,
        block2B: block2B,
        block3B: block3B,
        block4B: block4B,
//        email: user.email
    });
}


