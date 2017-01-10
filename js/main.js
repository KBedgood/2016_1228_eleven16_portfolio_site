$(document).ready(function() {
  // Handler for .ready() called.

  // initialize typedJS
  $(function() {
    $(".typedKB").typed({
      strings: [
        "I'm a graphic designer.",
        "I'm a front-end developer.",
        "I'm a print production artist.",
        "I designed this site using Sketch.",
        "I am writing the code for it too.",
        "My name is Kristie."
      ],
      typeSpeed: 0,
      // time before typing starts
      startDelay: 2000,
      // backspacing speed
      backSpeed: -400,
      // shuffle the strings
      shuffle: false,
      // time before backspacing
      backDelay: 3000,
      // loop
      loop: false,
    });
  });

});
