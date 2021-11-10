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






var products = [
    {id: 1, name: 'Shirt', Price: 2000},
    {id: 2, name: 'Saree', price: 4000},
    {id: 3, name: 'T-shirt', price: 1200},
    {id: 4, name: 'football', price: 1500},
];


var select = '';
select += '<select>';
$.each(products, function(key,value){
    select += '<option></option>';
})

select += '</select>'


$('#td1').append(select);