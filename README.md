## Website Performance Optimization portfolio project

#### Part 1: Optimize PageSpeed Insights score for index.html

*Completed Phase 1*

Optimized images, eliminated render blocking JS and CSS for above the fold content
##### PageSpeed Scores: M:92 D:94

#### Part 2: Optimize Frames per Second in pizza.html

*To optimize views/pizza.html, you will need to modify views/js/main.js until your frames per second rate is 60 fps or higher. You will find instructive comments in main.js.*

*Completed Phase 2*

1. Fixed janky performance of the pizza size slider, replaced querySelectorAll with getElementsByClassName
2. Did a lot of work on the updatePositions function to eliminate the layout thrashing that was happening

..* Replaced document.body.scrollTop with window.payYOffset as per MDN suggestion for better compatibility

..* Took the division operator out of the loop because it only needs to be calculated once

..* Added viewportWidth function to dynamically calculate the number of pizzas required to fill the screen using bootstrap break points

..* Took document.getElementById("movingPizzas1") out of the for loop because it only needs to run once
3. Animations are now averaging over 60FPS on the pizza page

## Running this Site
To run this page, please go to the command prompt and navigate to the project. Run a simple Python HTTP server and away you go!

```
$ cd <project-directory>
$ python -m SimpleHTTPServer 8080
```
