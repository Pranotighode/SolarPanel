$(document).ready(function () {
  $("Home").click(function (e) {
    e.preventDefault();
    var target = $(this).attr("banner");
    $("html, body").animate(
      {
        scrollTop: $(target).offset().top,
      },
      800
    );
  });
});
$(document).ready(function () {
  $("About Us").click(function (e) {
    e.preventDefault();
    var target = $(this).attr("about");
    $("html, body").animate(
      {
        scrollTop: $(target).offset().top,
      },
      800
    );
  });
});
$(document).ready(function () {
  $("Services").click(function (e) {
    e.preventDefault();
    var target = $(this).attr("info");
    $("html, body").animate(
      {
        scrollTop: $(target).offset().top,
      },
      800
    );
  });
});
$(document).ready(function () {
  $("Contact").click(function (e) {
    e.preventDefault();
    var target = $(this).attr("registration.html");
    $("html, body").animate(
      {
        scrollTop: $(target).offset().top,
      },
      800
    );
  });
});

document.getElementById("btn").addEventListener("click", function (event) {
  event.preventDefault();
  var newWindow = window.open("registration.html", "_blank");
  if (newWindow) {
    newWindow.focus();
  } else {
    alert(
      "The pop-up window was blocked by the browser. Please allow pop-ups for this site."
    );
  }
});
