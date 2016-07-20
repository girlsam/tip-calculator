$(document).ready(function() {
  console.log('sanity test');
});
$('form').submit(function(event) {
  event.preventDefault();
  var subTotal = parseInt($('#amount').val());
  var tipAmount = $('#howMuch').val();
  $('.result').append('<h1 class="text-center">' + "You should tip $" + parseFloat(subTotal * tipAmount).toFixed(2) + "." + '<h1>');
});
});
