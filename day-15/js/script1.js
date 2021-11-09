var img1 = document.getElementById("img1");
img1.onclick = function(){
    
    var mainImage = document.getElementById("mainImage");
    var imgUrl1 = img1.getAttribute('src');
    mainImage.setAttribute('src', imgUrl1);
}




var img2 = document.getElementById("img2");
img2.onclick = function(){
    
    var mainImage = document.getElementById("mainImage");
    var imgUrl2 = img2.getAttribute('src');
    mainImage.setAttribute('src', imgUrl2);
}



var img3 = document.getElementById("img3");
img3.onclick = function(){
    
    var mainImage = document.getElementById("mainImage");
    var imgUrl3 = img3.getAttribute('src');
    mainImage.setAttribute('src', imgUrl3);
}



var img4 = document.getElementById("img4");
img4.onclick = function(){
    
    var mainImage = document.getElementById("mainImage");
    var imgUrl4 = img4.getAttribute('src');
    mainImage.setAttribute('src', imgUrl4);
}




//Slider

var data = ['img/2.jpg', 'img/3.jpg', 'img/4.jpg', 'img/7.jpg', 'img/why.jpg' ];
var sliderMainImage = document.getElementById('sliderMainImage');
var index = 0;
function changeImage(){
    sliderMainImage.setAttribute('src', data[index]);
    index++;

    if(index == data.length)
    {
        index = 0;
    }
}


setInterval(changeImage, 18000);



