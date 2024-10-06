window.onload = inText

var numCount = 0

function inText(){
    var topText = document.getElementById("top");
    topText.innerHTML = "Welcome to the Forum"

    var topicT = document.getElementById("topic");
    var reply1T = document.getElementById("reply1");
    var reply2T = document.getElementById("reply2");

}

function postFunction(){
    var messageT = document.getElementById("message").value;
    switch (numCount){
        case (0):
            var topicT = document.getElementById("topic");
            topicT.innerHTML = messageT;
            break;
        case (1):
            var reply1T = document.getElementById("reply1");
            reply1T.innerHTML = messageT;
            break;
        case (2):
            var reply2T = document.getElementById("reply2");
            reply2T.innerHTML = messageT;
            break;
    }

    numCount ++;
    document.getElementById("message").value= "";
}
function clearFunction(){
    document.getElementById("topic").innerHTML = "";
    document.getElementById("reply1").innerHTML = "";
    document.getElementById("reply2").innerHTML = "";
    numCount = 0;
}

