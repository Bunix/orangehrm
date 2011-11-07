$(document).ready(function() {

    disableWidgets()
    //form validation
    $("#frmGenInfo").validate({
        rules: {
            'organization[name]': {
                required: true
            },
            'organization[phone]': {
                phone: true
            },
            'organization[fax]': {
                phone: true
            },
            'organization[email]' : {
                email: true
            }
        },
        messages: {
            'organization[name]': {
                required: nameRequired
            },
            'organization[phone]' : {
                phone: invalidPhoneNumber
            },
            'organization[fax]' : {
                phone: invalidFaxNumber
            },
            'organization[email]' : {
                email: incorrectEmail
            }
        },

        errorElement : 'label',
        errorPlacement: function(error, element) {
             error.appendTo( element.prev('label') );
        }
    });

    $.validator.addMethod("phone", function(value, element) {
        return (checkPhone(element));
    });

    $('#btnSaveGenInfo').click(function() {
        //if user clicks on Edit make all fields editable
        if($("#btnSaveGenInfo").attr('value') == edit) {
            enableWidgets()
            $("#btnSaveGenInfo").attr('value', save)
        }
        else {
            $("#frmGenInfo").submit()
        }
    });
    
});

function disableWidgets(){
    $('.txtBox').attr('disabled', 'disabled')
    $('.drpDown').attr('disabled', 'disabled')
    $('.txtArea').attr('disabled', 'disabled')
}

function enableWidgets(){
    $('.txtBox').removeAttr('disabled')
    $('.drpDown').removeAttr('disabled')
    $('.txtArea').removeAttr('disabled')
}

