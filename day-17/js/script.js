
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
    {id: 1, name: 'Shirt', price: 2000},
    {id: 2, name: 'Saree', price: 4000},
    {id: 3, name: 'T-shirt', price: 1200},
    {id: 4, name: 'football', price: 1500},
    {id: 5, name: 'Mobile', price: 1500},
];


var select = '';
select += '<select onchange="setPriceQuantityAndTotalPrice(this.value)">';
select += '<option  disabled selected> -- Select Product -- </option>';
$.each(products, function(key,value){
    select += '<option value="'+value.id+'">'+value.name+'</option>';
});

select += '</select>'


$('#td1').append(select);







/*===============New Row ADD=================*/
$('#addBtn').click(function(){
    var tr = '';
    tr += '<tr align="center">';
    tr += '<td>';
    tr += '<select onchange="setPriceQuantityAndTotalPrice(this.value)">';
    tr += '<option  disabled selected> -- Select Product -- </option>';
    $.each(products, function(key,value){
        tr += '<option value="'+value.id+'" >'+value.name+'</option>';
    });




select += '</select>'
    tr += '</td>';
    tr += '<td>200</td>';
    tr += '<td>2</td>';
    tr += '<td>400</td>';
    tr += '<td><button type="button" class="remove-btn">-</button></td>';
    tr +=  '</tr>';


    $('#res').append(tr);
});







$(document).on('click','.remove-btn',function(){
    $(this).closest('tr').remove();
});

// anather way
// $(document).on('click','.remove-btn',function(){
//     $(.remove-btn).closest('tr').remove();
// });


//Wrong
// $('.remove-btn').click(function(){
//     $(this).closest('tr').remove();
// });




//value = product id

function setPriceQuantityAndTotalPrice(value)
{
    // alert(value);
    // find();      full object nia ashe
    // findIndex();     index nia ashe


  var product = products.find(product => {return product.id == value});
//   console.log(product);
$('#price').val(product.price);
$('#qty').val(1);
$('#total').val(product.price*1);
}