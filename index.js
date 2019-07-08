$(document).ready(function() {
  $(".dropdown").on("show.bs.dropdown", () => {
    var intervalID = setInterval(display, 5);
    let h = 0;
    function display() {
      if (h <= 100) {
        $(".clubs").height(`${(h * 94) / 100}vh`);
        $(".team").height(`${(h * 47) / 100}vh`);
        $(".events").height(`${(h * 47) / 100}vh`);
        $(".banner").width(`${(h * 27) / 100}vw`);
        $(".media").width(`${(h * 27) / 100}vw`);
        h++;
      } else {
        clearInterval(intervalID);
      }
    }
  });
  $(".dropdown").on("hide.bs.dropdown", () => {
    $(".team").height("0");
    $(".events").height("0");
    $(".banner").width("0");
    $(".media").width("0");
    $(".clubs").height("0");
  });
});
