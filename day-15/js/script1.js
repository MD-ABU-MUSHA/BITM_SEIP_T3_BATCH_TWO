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











// enter height & width  JavaScript CustomDiv


var newBtn = document.getElementById('newBtn');
newBtn.onclick = function(){
    var height = document.getElementById('height').value;
    var width = document.getElementById('width').value;
    var color = document.getElementById('color').value;
    var radius = document.getElementById('radius').value;
    var float = document.getElementById('float').value;






    var div = document.createElement('div');
    var h1 = document.createElement('h1');
    var img = document.createElement('img');
    var p = document.createElement('p');

    h1.innerHTML = 'This is a heading';
    p.innerHTML = 'this is a pera';
    img.setAttribute('src','img/2.jpg');
    img.style.height = '200px';
    img.style.width = '300px';




    div.append(h1);
    div.append(p);
    div.append(img);


    div.style.height = height + 'px';
    div.style.width = width + 'px';
    div.style.backgroundColor = color;
    div.style.borderRadius = radius + 'px';
    div.style.float = float;
    

    var custom = document.getElementById('custom');
    custom.append(div);



    
     



}


