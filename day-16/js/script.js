function createNewElement(){
    var inputOne = document.createElement('input');
    var inputTwo = document.createElement('input');
    var div = document.createElement('div');


    div.appendChild(inputOne);
    div.appendChild(inputTwo);


    inputOne.style.marginRight = '5px';
    div.style.margin = '5px 0px';


    var wrapper = document.getElementById('wrapper');
    wrapper.appendChild(div);
}


var btn = document.getElementById('btn');
btn.onclick = function(){
    createNewElement();
}