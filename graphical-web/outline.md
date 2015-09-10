
#Choosing the right tool: Combining manual and programmatic manipulation of SVG

Over the last few years, the acceleration of client-side javascript and development of D3 has enabled the creation of increasingly sophisticated interactive visualizations. Transforming data into an SVG with D3 makes many previously difficult tasks trivial. But other tasks -- like text positioning, layout and illustration -- are much easier with tools designed for manually manipulating SVGs, like Illustrator or Inkscape. This talk will discuss different techniques that Bloomberg Graphics uses to combine the two approaches. 

####Adding Animation
By strategically placing illustrated elements in groups and loading an SVG in a browser, we can add rudimentary animations with d3.timer and d3.transition. Smoothly changing transform, translate and/or rotate over time creates the illusion of movement. Toggling the opacity of an arm or another object drawn in two different positions also brings static images to life. 

####Adding Interaction
Beyond creating gif-like loops (with vectors and a full color palette), SVG animations can be trigged by user interactions. Changing the stroke-dashoffset while scrolling down the page looks quite nice while being simple to implement. Bar charts are also easy to add a flourish to - just save the drawn heights, set the heights to 0 on load and use a staggered transition to move them back to their original positions.

####There and Back Again
In addition to creating SVGs from scratch in Illustrator and animating them with D3, we've also used D3 to transform data to an SVG, then saved the SVG and opened it with Illustrator to clean up positioning. This technique is particularly useful for tidying up force layouts. 
                         
####Work Flow
SVGs can be saved from the browser with SVG crowbar or copying and pasting 'Edit as HTML.' It's a little trickier to load SVGs in the browser. d3.xml can load and append an SVG to the page, but it doesn't work with IE9 and adds a network so a build step might be necessary.  

If you just need to position things, d3.drag is a solid alternative to Illustrator. For a few elements, console.log the coordinates and copy/paste to a config file; for a lot, save the positions to an array of objects and save to a csv with copy(d3.csv.format(positions)).

Don't be afraid to experiment with creating your own tools - shrinking the feedback loop between making a change and seeing pays off in unexpected ways.

####Responsiveness
We use viewport resizing or css transform scale until the text gets too small and then switch to fallback images. ai2html has a more robust solution, converting text elements to absolutely positioned divs that support text wrapping. 