var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition;

function start() {
    document.getElementById("textbox").innerHTML="";
    recognition.start();

}

recognition.onresult = function(event) {
    console.log(event);
    var content = event.results[0][0].transcript;
    console.log(content);
    document.getElementById("textbox").innerHTML=content;

    if(content =="Take My Selfie"){
       console.log("Taking Selfie in Five Seconds.");
            speak(); 
    }

}

function speak() {
    var synth = window.speechSynthesis;
    var speak_data = "Taking Your Selfie in Five Seconds";
    var utter_this = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utter_this);
    Webcam.attach(camera);
    setTimeout(function(){
        take_snapShot();
        save();

    }, 5000);
    
}

Webcam.set({
    width: 360, 
    height: 250,
    image_format: 'png',
    png_quality: 90
})

camera = document.getElementById("camera");

function take_snapShot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = '<img id="selfie_image" src="'+data_uri+'">'
    })
}

function save(){
    link = document.getElementById("link");
    image = document.getElementById("selfie_image");
    link.href = image;
    link.click();

}