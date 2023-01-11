var img = document.getElementById('img');

var slides=['images/img002.jpeg','images/img003.jpeg', 'images/img004.jpeg','images/img005.jpeg', 'images/img006.jpeg', 'images/img007.jpeg'];

var Start=0;

function slider(){
    if(Start<slides.length){
        Start=Start+1;
    }
    else{
        Start=1;
    }
    console.log(img);
    img.innerHTML = "<img src=" + slides[Start-1]+">";
   
}
setInterval(slider,2000);