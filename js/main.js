$(document).ready(function() {
  // Handler for .ready() called.

  // initialize typedJS
  $(function() {
    $(".typedKB").typed({
      strings: [
        "This site is under construction.",
        "Thank you for your patience.",
        "Yes, I designed it.",
        "Yes, I'm developing it.",
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
