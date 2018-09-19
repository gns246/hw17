// chat box popover content and show upon load
$("#chatPopover").popover({
  title: `How can we help you?<button id="popoverClose" type="button" class="ml-auto close" aria-label="Close">
      <span aria-hidden="true">&times;</span>
    </button>`,
  content: `
        <form>
          <label for="question">Ask a question.</label>
          <input type="text" class="form-control" id="question">
          <button style="margin-top: 0.5rem;" type="submit" class="btn">Submit</button>
        </form>
        `,
  html: true,
  placement: "top",
  trigger: "manual"
}).popover("show");

// Popover event listener
$("body").on("click", "#popoverClose", function() {
  $("#chatPopover").popover("toggle");
  $(".chat").toggleClass("closed-state");
});

//changing colors
$(document).ready(function(){
  $("#colorChange").mouseenter(function(){
      $("#colorChange").css("color", "gold");
  });
  $("#colorChange").mouseleave(function(){
      $("#colorChange").css("color", "black");
  });
});

// trigger css for product-info class
$('.product-info').css({
	'border': '0px',
	'border-top': '1px dashed gold',
	'transform': 'scale(1.5)',
	'transition': '5s ease',
	'border-radius': '0'
});

//.focus() jquery modal-signup
$(document).ready(function(){
  $("input").focus(function(){
    $("#focus").css("display", "inline").fadeOut(400);
  });
});
//tooltip hover addToCartButton
$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip();
});

// focus event listener
$(".form-control").focus(function(){
  $(this).css("background-color","#f0f0f5");
})

// toggle button color and popover
$(".chat").click(function() {
  $("#chatPopover").popover("toggle");
  $(this).toggleClass("closed-state");
});

//  modal interactivity
$("#signUpBtn").click(function() {

  // store input values as variables
  var name = $("#firstName").val();
  var email = $("#eMail").val();

  // if both name and email are not empty, then change modal content
  if (email !== "" && name !== "") {
    $(".modal-title").html("Thank you for signing up, " + name + "!");
    $(".modal-body").html("Great deals are on the way!");
    $(".modal-footer").hide();
  }
  else {
    // clear the current alert if any
    $("#emailAlert").hide();
    $("#nameAlert").hide();
    // show respective alerts if field empty
    if (email === "") {
      $("#emailAlert").show();
    }
    if (name === "") {
      $("#nameAlert").show();
    }
  }
});

// Add to cart

// initialize cart value at 0
var cartNumber = 0;

// listen, tally, display badge
$("#addToCart").click(function() {

  // prevent reload
  event.preventDefault();

  // store input as variable
  var additionalValue = $("#quantity").val();

  // Tally
  cartNumber = cartNumber + parseInt(additionalValue);

  // Change html
  $("#cartItems").html(cartNumber);

  // Show the badge
  $("#cartItems").show();
});
