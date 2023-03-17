
$(document).ready(function(){

  // SHOW-HIDE PASSWORD
  $(".toggle-password").click(function() {

    $(this).toggleClass("fa-eye fa-eye-slash");
    var input = $($(this).attr("toggle"));
    if (input.attr("type") == "password") {
      input.attr("type", "text");
    } else {
      input.attr("type", "password");
    }
  });
  // END SHOW-HIDE PASSWORD

  // SHOW HIDE PANLES
  $("#btn-show-validar-correo").click(function() {
    $("#fs-registro-correo").hide();
    $("#fs-registro-validar-correo").show();
    $("#fs-registro-cuenta").hide();
  });

  $("#btn-show-completar-cuenta").click(function() {
    $("#fs-registro-correo").hide();
    $("#fs-registro-validar-correo").hide();
    $("#fs-registro-cuenta").show();
  });

  $("#optionDelivery2").click(function() {
    $("#form-delivery-time").show();
  });

  $("#optionDelivery1").click(function() {
    $("#form-delivery-time").hide();
  });

  // END SHOW HIDE PANELS

  // LOAD IMG PROFILE
$('#input-preview-img').change(function(){
  var curElement = $('#preview-logo-user');
  console.log(curElement);
  var reader = new FileReader();

  reader.onload = function (e) {
      // get loaded data and render thumbnail.
      curElement.attr('src', e.target.result);
  };

  // read the image file as a data URL.
  reader.readAsDataURL(this.files[0]);
});
// END LOAD IMG PROFILE

// INCREMENTO - DECREMENTO =================

$('.qtybutton').on('click', function() {
  var $button = $(this);
  var oldValue = $button.parent().find("input").val();
  if ($button.text() == "+") {
    var newVal = parseFloat(oldValue) + 1;
  } else {
    // Don't allow decrementing below zero
    if (oldValue > 1) {
      var newVal = parseFloat(oldValue) - 1;
    } else {
      newVal = 1;
    }
  }
  $button.parent().find("input").val(newVal);
});

// FIN INCREMENTO - DECREMENTO

});
