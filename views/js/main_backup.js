function updatePositions() {
    frame++;
    window.performance.mark("mark_start_frame");
  
    var items = document.querySelectorAll('.mover');
    for (var i = 0; i < items.length; i++) {
      // document.body.scrollTop is no longer supported in Chrome.
      var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
      var phase = Math.sin((scrollTop / 1250) + (i % 5));
      items[i].style.left = items[i].basicLeft + 100 * phase + 'px';
    }
  
    // User Timing API to the rescue again. Seriously, it's worth learning.
    // Super easy to create custom metrics.
    window.performance.mark("mark_end_frame");
    window.performance.measure("measure_frame_duration", "mark_start_frame", "mark_end_frame");
    if (frame % 10 === 0) {
      var timesToUpdatePosition = window.performance.getEntriesByName("measure_frame_duration");
      logAverageFrame(timesToUpdatePosition);
    }
  }
  
  // runs updatePositions on scroll
  window.addEventListener('scroll', updatePositions);
  
  // Generates the sliding pizzas when the page loads.
  document.addEventListener('DOMContentLoaded', function() {
    var cols = 8;
    var s = 256;
    for (var i = 0; i < 40; i++) {
      var elem = document.createElement('img');
      elem.className = 'mover';
      elem.src = "images/pizza.webp";
      elem.basicLeft = (i % cols) * s;
      elem.style.top = (Math.floor(i / cols) * s) + 'px';
      document.querySelector("#movingPizzas1").appendChild(elem);
    }
    updatePositions();