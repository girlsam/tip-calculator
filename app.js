$(document).ready(function() {
  console.log('sanity test');
});
function calculateTip(sub, tip) {
  return (sub * tip).toFixed(2);
}
$('form').submit(function(event) {
  event.preventDefault();
  var subTotal = parseInt($('#amount').val());
  var tipAmount = $('#howMuch').val();
  $('.result').append('<h1 class="text-center">' + "You should tip $" + calculateTip(subTotal, tipAmount) + "." + '<h1>');
});
