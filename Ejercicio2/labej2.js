$(document).ready(function() {
    // SUMAR
    $('#btn-sumar').click(function() { 
        var n1 = parseFloat($('#num1').val());
        var n2 = parseFloat($('#num2').val());
        var res = n1 + n2;
        if (isNaN(n1) || isNaN(n2)){
                alert("Llenar los espacios. Por favor");
                return;
            }
        $('#resultado').val(res);
    });
    // RESTAR
    $('#btn-restar').click(function() { 
        var n1 = parseFloat($('#num1').val());
        var n2 = parseFloat($('#num2').val());
        var res = n1 - n2;
        if (isNaN(n1) || isNaN(n2)){
                alert("Llenar los espacios. Por favor");
                return;
            }
        $('#resultado').val(res);
    });
    // MULTIPLICAR
    $('#btn-mult').click(function() { 
        var n1 = parseFloat($('#num1').val());
        var n2 = parseFloat($('#num2').val());
        var res = n1 * n2;
        if (isNaN(n1) || isNaN(n2)){
                alert("Llenar los espacios. Por favor");
                return;
            }
        $('#resultado').val(res);
    });
    // DIVIDIR
    $('#btn-div').click(function() { 
        var n1 = parseFloat($('#num1').val());
        var n2 = parseFloat($('#num2').val());
        var res = n1/n2;
        if (isNaN(n1) || isNaN(n2)){
                alert("Llenar los espacios. Por favor");
                return;
            }
        if (n2===0){
                alert("no se puede dividir entre cero");
                return;
            }
        $('#resultado').val(res);
    });
});