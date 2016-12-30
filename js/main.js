$(document).ready(function() {
  // Handler for .ready() called.

  // initialize typedJS
  $(function() {
    $(".typedKB").typed({
      strings: [
        "I love a boy band (singular).",
        "I do not like food in my food.",
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
