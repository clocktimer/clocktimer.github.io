function getclasses() {
    var user = firebase.auth().currentUser;
    var now = new Date();
    currentyear = now.getFullYear();
    currentmonth = now.getMonth();
    currentday = now.getDate();
    currenthour = now.getHours();
    currentminutes = now.getMinutes();
    var currentTime = now.getTime();
    
    //school hasn't started yet
      //alert("school has not started yet");
    var eventDate = new Date(currentyear, currentmonth, currentday, 7, 55);
    var eventTime = eventDate.getTime();
    var remTime = eventTime - currentTime;
    calctime(remTime);
    
    if (day != "3"){
        if (remTime <= 0){
            //first block
            block = "1"
            //alert("school has started");
            var eventDate = new Date(currentyear, currentmonth, currentday, 9, 25);
            var eventTime = eventDate.getTime();
            var remTime = eventTime - currentTime;
            calctime(remTime);
            if (remTime <= 0){
                //first break
                  //alert("first break");
                var eventDate = new Date(currentyear, currentmonth, currentday, 9, 40);
                var eventTime = eventDate.getTime();
                var remTime = eventTime - currentTime;
                calctime(remTime);
                if (remTime <= 0){
                    //second block
                    block = "2";
                      //alert("second block");
                      //document.getElementById("block").innerHTML = "secondblock";
                    var eventDate = new Date(currentyear, currentmonth, currentday, 11, 10);
                    var eventTime = eventDate.getTime();
                    var remTime = eventTime - currentTime;
                    calctime(remTime);
                    if (remTime <= 0){
                        //lunch
                          //alert("lunch");
                        var eventDate = new Date(currentyear, currentmonth, currentday, 12, 0);
                        var eventTime = eventDate.getTime();
                        var remTime = eventTime - currentTime;
                        calctime(remTime);
                        if (remTime <= 0){
                            //third block
                            block = "3";
                              //alert("third block");
                            var eventDate = new Date(currentyear, currentmonth, currentday, 13, 30);
                            var eventTime = eventDate.getTime();
                            var remTime = eventTime - currentTime;
                            calctime(remTime);
                            if (remTime <= 0){
                                //third break
                                //  alert("third break");
                                var eventDate = new Date(currentyear, currentmonth, currentday, 13, 45);
                                var eventTime = eventDate.getTime();
                                var remTime = eventTime - currentTime;
                                calctime(remTime);
                                if (remTime <= 0){
                                    //fourth block
                                    block = "4";
                                 //     alert("fourth block");
                                    var eventDate = new Date(currentyear, currentmonth, currentday, 15, 15);
                                    var eventTime = eventDate.getTime();
                                    var remTime = eventTime - currentTime;
                                    calctime(remTime);
                                    if (remTime <= 0){
                                        //school is over
                                    //      alert("school is over");
                                        var eventDate = new Date(currentyear, currentmonth, currentday+1, 7, 55);
                                        var eventTime = eventDate.getTime();
                                        var remTime = eventTime - currentTime;
                                        calctime(remTime);
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    } else if (day == "3"){
        if (remTime <= 0){
            //first block
            //first period
            //  alert("school has started");
            var eventDate = new Date(currentyear, currentmonth, currentday, 8, 38);
            var eventTime = eventDate.getTime();
            var remTime = eventTime - currentTime;
            calctime(remTime);
            if (remTime <= 0){                 
                //first block
                //second period
                var eventDate = new Date(currentyear, currentmonth, currentday, 9, 25);
                var eventTime = eventDate.getTime();
                var remTime = eventTime - currentTime;
                calctime(remTime);
                if (remTime <= 0){
                    //first break
                //      alert("first break");
                    var eventDate = new Date(currentyear, currentmonth, currentday, 9, 40);
                    var eventTime = eventDate.getTime();
                    var remTime = eventTime - currentTime;
                    calctime(remTime);
                    if (remTime <= 0){
                        //second block
                        //first period
                        var eventDate = new Date(currentyear, currentmonth, currentday, 10, 23);
                        var eventTime = eventDate.getTime();
                        var remTime = eventTime - currentTime;
                        calctime(remTime);
                        if (remTime <= 0){
                            //second block
                            //second period
                //              alert("second block");
                  //            document.getElementById("block").innerHTML = "secondblock";
                            var eventDate = new Date(currentyear, currentmonth, currentday, 11, 10);
                            var eventTime = eventDate.getTime();
                            var remTime = eventTime - currentTime;
                            calctime(remTime);
                            if (remTime <= 0){
                                //lunch
                    //              alert("lunch");
                                var eventDate = new Date(currentyear, currentmonth, currentday, 12, 0);
                                var eventTime = eventDate.getTime();
                                var remTime = eventTime - currentTime;
                                calctime(remTime);
                                if (remTime <= 0){
                                    //third block
                                    //first period
                                    var eventDate = new Date(currentyear, currentmonth, currentday, 12, 43);
                                    var eventTime = eventDate.getTime();
                                    var remTime = eventTime - currentTime;
                                    calctime(remTime);
                                    if (remTime <= 0){
                                        //third block
                                        //second period
                                        var eventDate = new Date(currentyear, currentmonth, currentday, 13, 30);
                                        var eventTime = eventDate.getTime();
                                        var remTime = eventTime - currentTime;
                                        calctime(remTime);
                                        if (remTime <= 0){
                                            //third break
                     //                         alert("third break");
                                            var eventDate = new Date(currentyear, currentmonth, currentday, 13, 45);
                                            var eventTime = eventDate.getTime();
                                            var remTime = eventTime - currentTime;
                                            calctime(remTime);
                                            if (remTime <= 0){
                                                //fourth block
                                                //first period
                                                var eventDate = new Date(currentyear, currentmonth, currentday, 14, 28);
                                                var eventTime = eventDate.getTime();
                                                var remTime = eventTime - currentTime;
                                                calctime(remTime);
                                                if (remTime <= 0){
                                                    //fourth block
                                                    //second period
                                                    var eventDate = new Date(currentyear, currentmonth, currentday, 15, 15);
                                                    var eventTime = eventDate.getTime();
                                                    var remTime = eventTime - currentTime;
                                                    calctime(remTime);
                                                    if (remTime <= 0){
                                                        //school is over
                           //                               alert("school is over");
                                                        var eventDate = new Date(currentyear, currentmonth, currentday+1, 7, 55);
                                                        var eventTime = eventDate.getTime();
                                                        var remTime = eventTime - currentTime;
                                                        calctime(remTime);
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    
    if (checkedday == 0){                    
        checkday();
    }
    if (day == "1" || day == "4"){ 
        
        if (block == "1"){
            var nextblock = firebase.database().ref('Classes/' + user.uid + '/block2A');
            nextblock.on('value', function(snapshot) {
                document.getElementById("nextclass").innerHTML = snapshot.val()
            });
        }
            
        if (block == "2"){
            var nextblock = firebase.database().ref('Classes/' + user.uid + '/block3A');
            nextblock.on('value', function(snapshot) {
                document.getElementById("nextclass").innerHTML = snapshot.val()
            });
        }
            
        if (block == "3"){
            var nextblock = firebase.database().ref('Classes/' + user.uid + '/block4A');
            nextblock.on('value', function(snapshot) {
                document.getElementById("nextclass").innerHTML = snapshot.val()
            });
        }
            
        if (block == "4"){
            document.getElementById("nextclass").innerHTML = "end of school"
        }
    }
    if (day == "2" || day == "5"){
        
        if (block == "1"){
            var nextblock = firebase.database().ref('Classes/' + user.uid + '/block2B');
            nextblock.on('value', function(snapshot) {
                document.getElementById("nextclass").innerHTML = snapshot.val()
            });
        }
            
        if (block == "2"){
            var nextblock = firebase.database().ref('Classes/' + user.uid + '/block3B');
            nextblock.on('value', function(snapshot) {
                document.getElementById("nextclass").innerHTML = snapshot.val()
            });
        }
            
        if (block == "3"){
            var nextblock = firebase.database().ref('Classes/' + user.uid + '/block4B');
            nextblock.on('value', function(snapshot) {
                document.getElementById("nextclass").innerHTML = snapshot.val()
            });
        }
            
        if (block == "4"){
            document.getElementById("nextclass").innerHTML = "end of school"
        }
    }
    
    setTimeout(getclasses, 100);
}

setTimeout(function(){
    getclasses();
}, 1000);