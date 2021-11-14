function checkFirstName(){
    var firstName = $('#firstName').val();
    var regex = /^[a-zA-Z0-99 ]{2,15}$/;
    if(regex.test(firstName))
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



$('#registrationForm').submit(function(){
    return false;
});