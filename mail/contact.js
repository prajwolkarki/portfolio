$(function () {
    $("#contactForm input,#contactForm textarea").jqBootstrapValidation({
        preventSubmit: true,
        submitError: function ($form, event, errors) {
            // Add error messages if needed
        },
        submitSuccess: function ($form, event) {
            event.preventDefault(); // Prevent form submission
            var name = $("input#name").val();
            var email = $("input#email").val();
            var subject = $("input#subject").val();
            var message = $("textarea#message").val();

            // You can add custom validation rules here if needed

            // Perform your AJAX form submission here
            $.ajax({
                url: "contact.php", // Replace with the URL of your PHP script
                type: "POST",
                data: {
                    name: name,
                    email: email,
                    subject: subject,
                    message: message
                },
                cache: false,
                success: function () {
                    // Handle success, e.g., display a success message
                    $('#success').html("<div class='alert alert-success'>");
                    $('#success > .alert-success')
                        .html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;</button>")
                        .append("<strong>Your message has been sent successfully.</strong>");
                    $('#success > .alert-success')
                        .append('</div>');
                    // Reset the form if needed
                    $form.trigger("reset");
                },
                error: function () {
                    // Handle error, e.g., display an error message
                    $('#success').html("<div class='alert alert-danger'>");
                    $('#success > .alert-danger')
                        .html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;</button>")
                        .append("<strong>Sorry " + name + ", it seems that our mail server is not responding. Please try again later!</strong>");
                    $('#success > .alert-danger')
                        .append('</div>');
                    // Reset the form if needed
                    $form.trigger("reset");
                }
            });
        },
        filter: function () {
            return $(this).is(":visible");
        },
    });

    // Prevent focus event from clearing success message
    $("input#name, input#email, input#subject, textarea#message").focus(function () {
        $("#success").html("");
    });
});
