// function createNewElement(){
//     var inputOne = document.createElement('input');
//     var inputTwo = document.createElement('input');
//     var div = document.createElement('div');


//     div.appendChild(inputOne);
//     div.appendChild(inputTwo);


//     inputOne.style.marginRight = '5px';
//     div.style.margin = '5px 0px';


//     var wrapper = document.getElementById('wrapper');
//     wrapper.appendChild(div);
// }


// var btn = document.getElementById('btn');
// btn.onclick = function(){
//     createNewElement();
// }









/* $= (selector). Action();

    $ : Jqery Object
    selector : HTML element selector
    . : JS object
    Action() : Jquery Method
*/



/* Row Java scruot */
// var h1 = document.getElementById('h1');
// h1.onclick = function(){
//     h1.style.color = 'red';
// }


/*jquery */
// $('#h1').click(function(){
//     $(this).css('color','red');
// });




$('#btn').click(function(){
    var div ='';
    div += '<div>';
    div += '<input type="text"/>';
    div += '<input type="text"/>';
    div += '</div>';

    $('#wrapper').append(div);

});



$('#btnOne').click(function(){
    var firstName = $('#firstName').val();//Return val when no perameter
    var lastName = $('#lastName').val();



    var result = firstName +' '+lastName;
    $('#fullName').val(result);
});            