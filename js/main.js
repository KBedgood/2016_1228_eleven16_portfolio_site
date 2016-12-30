$(document).ready(function() {
  // Handler for .ready() called.

  // initialize typedJS
  $(function() {
    $(".typedKB").typed({
      strings: [
        "This site is under construction.",
        "Thank you for your patience.",
        "I designed this site using Sketch.",
        "I'm writing all of the code too!",
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
