window.addEventListener("load", function() {
  var sounds = document.querySelectorAll(".sound");
  var pads = document.querySelectorAll(".pads div");
  var visual = document.querySelector(".visual");
  var colors = [
    "#60d394",
    "#d36060",
    "#c060d3",
    "#d3d160",
    "#6860d3",
    "#60b2d3"
  ];

  //lets get going  with the  sound here
  pads.forEach(function(pad, index) {
    pad.addEventListener("click", function() {
      sounds[index].currentTime = 0;
      sounds[index].play();

      createBubbles(index);
    });
  });

  //create a function that makes bubbles

  var createBubbles = function(index) {
    var bubble = document.createElement("div");
    visual.appendChild(bubble);
    bubble.style.backgroundColor = colors[index];
    bubble.style.animation = "jump 1s ease";
    bubble.addEventListener("animationend", function() {
      visual.removeChild(this);
    });
  };
});
