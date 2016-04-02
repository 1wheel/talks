# Tiny Tools

## Writing Reusable D3

[1wheel.github.io/talks/tiny-tools](http://1wheel.github.io/talks/tiny-tools/#/)


## Adam Pearce
- [roadtolarissa.com](http://roadtolarissa.com)
- [github.com/1wheel](https://github.com/1wheel)
- [@adamrpearce](https://twitter.com/adamrpearce)

<!-- started at bloomberg two years ago, hired to develop explorative interactive data products -->
## 
![visual-data](img/visual-data.png)


<!-- complex interactions with lots of screens -->
## Bloomberg Billionaires
![billionaires gif](img/bill.gif)


<!--  -->
## Big tools
![angular/backbone/ember img](img/)

- Within a project, reuse code with compentent

- Between projects, reuse framework abstractions


<!--  start to publish interactive work on a weekly and daily basis intead of monthly. 

tk tk published in 2015!
-->
## Transitioning to a traditional graphics desk
![every project](http://www.bloomberg.com/graphics/2015-in-graphics/)


<!-- big frameworks become too unwieldly 
  
  - too many abstractions 
  - don't need to manage complex state 
  - working directly with DOM is hacky

  - high fixed cost to starting a new project
  - barrier to entry; want designers and reporters

default on techiqal debt!
-->
## frameworks become unwieldly 
  - unnessary abstractions 
  - higher barrier to entry


<!--  -->
## reusing code is trickier
- start project by copying/pasting bl.ocks 
- forage through old code for useful bits & bobs


<!-- working with much lower primatives than ggplot or something - tons of flexablitiy, but even doing something simple is hard -->
## d3 is verbose

'simple' scatterplot: 48 lines and 1398 characters of code
````
d3.tsv("data.tsv", function(error, data) {
  var margin = {top: 20, right: 20, bottom: 30, left: 40},
      width = 960 - margin.left - margin.right,
      height = 500 - margin.top - margin.bottom;

  var svg = d3.select("body").append("svg")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
    .append("g")
      .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
  
  var x = d3.scale.linear()
      .range([0, width]);

  var y = d3.scale.linear()
      .range([height, 0]);

  var color = d3.scale.category10();

  var xAxis = d3.svg.axis()
      .scale(x)
      .orient("bottom");

  var yAxis = d3.svg.axis()
      .scale(y)
      .orient("left");

  x.domain(d3.extent(data, function(d) { return d.sepalWidth; })).nice();
  y.domain(d3.extent(data, function(d) { return d.sepalLength; })).nice();

  svg.append("g")
      .attr("class", "x axis")
      .attr("transform", "translate(0," + height + ")")
      .call(xAxis)

  svg.append("g")
      .attr("class", "y axis")
      .call(yAxis)

  svg.selectAll(".dot")
      .data(data)
    .enter().append("circle")
      .attr("class", "dot")
      .attr("r", 3.5)
      .attr("cx", function(d) { return x(d.sepalWidth); })
      .attr("cy", function(d) { return y(d.sepalLength); })
      .style("fill", function(d) { return color(d.species); });
});
````


<!--  Gregor made add ons for d3
don't need bostock to merge a pull request - experment w/ APIs on your own first
 -->
##d3-jetpack
![jetpack comic](https://camo.githubusercontent.com/37eb19461d1dba8d6af9c2a816f488b9bf244691/687474703a2f2f33362e6d656469612e74756d626c722e636f6d2f74756d626c725f6d346b6b7864386e57423172776b7264626f315f3530302e6a7067)

- [github.com/gka/d3-jetpack](https://github.com/gka/d3-jetpack)


<!-- 
what do we end up copying and pasting all the time?

have to remember to type transform, then build the string w/ the wonky svg syntax-->
##translate

Before
````javascript
svg.append('g.x.axis')
    .attr('transform', 'translate(0,' + height + ')')
````

After

````javascript
svg.append('g.x.axis')
    .translate([0, height])
````


##appending with class
Works with ids and multiple classes

Before

````javascript
svg.append('g')
    .attr('class', 'y axis')
    .call(yAxis)
  .append('text')
    .attr('class', 'label')
````

After

````javascript
svg.append('g.y.axis')
    .call(yAxis)
  .append('text.label')
````


<!-- pluck, 

also composes. no more typing return!!

can do this w/ es6 too, nice not having a build step.  -->
##ƒIELD ACCESSOR
Before

````javascript
x.domain(d3.extent(data, function(d) { return d.sepalWidth; }))
y.domain(d3.extent(data, function(d) { return d.sepalLength; }))
````

After

````javascript
x.domain(d3.extent(data, ƒ('sepalWidth')))
y.domain(d3.extent(data, ƒ('sepalLength')))
````


##d3-starterkit
Snippets and conventions for starting a new d3 project

[github.com/1wheel/d3-starterkit](https://github.com/1wheel/d3-starterkit)






