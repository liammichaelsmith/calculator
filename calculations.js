$(document).on("change", ".qty1", function() {
  var sum = 0;
  $(".qty1").each(function() {
    sum += +$(this).val();
  });
  $(".total").val(sum);
});

$(document).on("change", ".qty2", function() {
  var sum = 0;
  $(".qty2").each(function() {
    sum += +$(this).val();
  });
  $(".total2").val(sum);
  var a = "a";
});
