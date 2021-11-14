function checkFirstName(){
    var firstName = $('#firstName').val();

    if(firstName.length >= 2 && firstName.length <=15)
    {
        $('#firstNameError').text(' ');
        return true;
    }else{
        $('#firstNameError').text('First Name must be in 2-15 character');
        return false;
    }
}

$('#firstName').keyup(function(){
    checkFirstName();
});