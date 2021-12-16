var camera = document.getElementById("camera");
Webcam.attach('#camera');
Webcam.set({
    width:350,
    height:300,
    image_format:'png',
    png_quality:90
    });
console.log('ml5version: ', ml5.version);
classifier= ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/4xMDNys1t/model.json', modelloaded);
function modelloaded(){
    console.log('modelloaded');

}
function capture(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img id="selfie_image" src="'+data_uri+'">'; 
    });
}
function Identify(){
    img=document.getElementById('selfie_image');
    classifier.classify(img, gotResult);
}
function gotResult(error, results){
if (error){
console.error(error);
}
else{
console.log(results);
document.getElementById("result_identity").innerHTML=results[0].label;
document.getElementById("result_accuracy").innerHTML=results[0].confidence.toFixed(4);
}
}
