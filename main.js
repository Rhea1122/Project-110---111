Webcam.set({
image_format : 'png',
png_quality :100,
width : 350,
height : 300
});
    
camera = document.getElementById("camera");
Webcam.attach('#camera');
    
function takesnapshot()
{
Webcam.snap(function (data_uri){
document.getElementById("result").innerHTML = '<img id="img_webapp" src="'+data_uri+'">';
});
}
console.log('ml5 version', ml5.version);
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/s00Cug2-V/model.json', modelLoaded);
    
function modelLoaded()
{
console.log('model loaded');
}

