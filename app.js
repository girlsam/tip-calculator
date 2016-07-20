$(document).ready(function() {
  console.log('sanity test');
});
$('form').submit(function(event) {
  event.preventDefault();
  var subTotal = parseInt($('#amount').val());
  $('.result').append('<h1 class="text-center">' + "You should tip $" + parseFloat(subTotal * 0.2).toFixed(2) + "." + '<h1>');
});
