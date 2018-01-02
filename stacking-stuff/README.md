# Stacking Stuff: Tricks for Visualizing Data Through Occlusion

Drawing complicated shapes with code is hard. Drawing simple shapes and stacking them to create complicated shapes is a little easier.

This talk will describe different ways to apply this idea, showing how to: efficiently animate a line chart; fake 3D in SVG; animate millions of points with canvas; and use crisp, word-wrapped text with WebGL.


## text + smaller text = text shadow

write text over charts

https://stackoverflow.com/questions/20644415/d3-appending-text-to-a-svg-rectangle/20644664#20644664


## path + rect = animated line

Simpler than https://bocoup.com/blog/improving-d3-path-animation

## lines + clipPath circle = fake 3D

https://www.bloomberg.com/graphics/2015-satellite-network/embed/o3b.html


## canvas + alpha rect = motion blur

https://macwright.org/2015/08/14/canvas-animation-methods.html


## canvas + clearRect canvas = rate and accumulation 

https://www.bloomberg.com/graphics/2015-uk-election/messy.html

https://www.nytimes.com/interactive/2017/05/12/world/europe/wannacry-ransomware-map.html



## 5 rects + mask path = colored histogram

https://twitter.com/adamrpearce/status/890933122992398338

https://bl.ocks.org/1wheel/76a07ca0d23f616d29349f7dd7857ca5


## image + mouseover = 

unpublished Olympic medal charts 


## canvas regl + svg = crisp text over 100,000s points

https://www.nytimes.com/interactive/2017/12/17/upshot/tax-calculator.html


## canvas + clearRect canvas + svg + mask = map

https://twitter.com/adamrpearce/status/905482198840639488


## d3-jetpack does the hard work for you!

`var {layers: [svg, bg_ctx, fg_ctx]} = d3.conventions({layers: 'scc'})`

https://github.com/gka/d3-jetpack
