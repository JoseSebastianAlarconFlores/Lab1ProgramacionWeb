$(document).ready(function() {
    $('a[href="#forgot-password"], a[href="#login"]').click(function(e) {
        e.preventDefault();
        var target = $(this).attr('href');
        $('.tab-pane').removeClass('active fade').hide();
        $(target).fadeIn().addClass('active');
    });
    $('#login').submit(function(e) {
        e.preventDefault();
        var correo = $(this).find('input[type="email"]').val();
        var clave = $(this).find('input[type="password"]').val();
        $.ajax({
            url: 'login.php',
            type: 'POST',
            data: {
                user: correo,
                pass: clave
            },
            success: function(respuesta) {
                if(respuesta.trim() === "success") {
                    alert("¡Bienvenido!");
                } else {
                    alert("Error, datos incorrectos.");
                }
            }
        });
    });
    $('#forgot-password').submit(function(e) {
        e.preventDefault();
        var emailRecuperar = $(this).find('input[type="email"]').val();
        alert("Se ha enviado un enlace de recuperación a: " + emailRecuperar);
    });
});