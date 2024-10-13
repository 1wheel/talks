## Why Aren't We Using Visualizations to Interact with AI?

Well-crafted visualizations are the highest bandwidth way of downloading information into our brains. As complex machine learning models become increasingly useful and important, can we move beyond mostly using text to understand and engage with them?

https://visxai.io/


https://claude.ai/new
https://arxiv.org/abs/2001.08361


## Newsgraphics

### New ways of looking at information

https://archive.nytimes.com/www.nytimes.com/interactive/2010/02/26/sports/olympics/20100226-olysymphony.html
https://archive.nytimes.com/www.nytimes.com/interactive/2012/11/02/us/politics/paths-to-the-white-house.html
https://www.nytimes.com/newsgraphics/2013/11/30/football-conferences/index.htm
https://benschmidt.org/mvp/#-Batting-oWAR-counting
https://www.nytimes.com/interactive/2014/06/25/upshot/984-ways-the-united-states-can-advance-to-the-next-round-of-the-world-cup.html
https://archive.ph/D7StI

### Why did this work?

browser distribution platform/v8 got fast
https://v8.dev/blog/10-years#performance-ups-and-downs

capacity overhang/academic techniques
https://reingold.co/tidier-drawings.pdf
https://github.com/d3/d3-hierarchy/blob/563dd3a8f0465d72fce087adcb13bf1d6576e06f/src/tree.js#L99
https://archive.nytimes.com/www.nytimes.com/interactive/2012/11/02/us/politics/paths-to-the-white-house.html

d3 combines in a toolbox
https://bost.ocks.org/mike/example/

rich newsgraphics tradition
https://archive.nytimes.com/www.nytimes.com/imagepages/2007/03/17/nyregion/nyregionspecial2/20070318_TRAIN_GRAPHIC.html

clarifying deadlines
https://www.drupal.org/
https://underscorejs.org/
https://svelte.dev/


default on tech debt, gratuitous animations in a nascent attention economy
https://www.bloomberg.com/graphics/2015-measles-outbreaks/
https://www.bloomberg.com/graphics/2015-uk-election/messy.html

sugar on data — more visually interesting than what's on most of the internet for someone bored at the office.

### Why did it stop working?

platforms hand out sugar hyper optimized for you now
https://www.cbc.ca/news/entertainment/sludge-content-1.6716185

mobile
- careful layout/annotations not possible
- new context — outside, other distracting things on your phone
- everything is a bar chart
https://x.com/adamrpearce/status/760138092024045568

also measured interactive usage
https://www.vis4.net/blog/in-defense-of-interactive-graphics/

Design Is a Search Problem
https://youtu.be/fThhbt23SGM?si=UrRUH5eK_cGzXPNn&t=196
maybe we've picked the low hanging fruit?
https://archive.nytimes.com/www.nytimes.com/interactive/2010/07/29/sports/rodriguez-600.html
https://www.nytimes.com/interactive/2016/04/16/upshot/stephen-curry-golden-state-warriors-3-pointers.html
https://www.nytimes.com/interactive/2017/05/25/sports/basketball/lebron-career-playoff-points-record.html
https://www.nytimes.com/interactive/2023/02/07/sports/basketball/lebron-james-kareem-abdul-jabbar-points.html
https://flowingdata.com/2022/02/02/charts-showing-tom-bradys-standout-career/

nostalgia?
ken perlin made tron
https://www.youtube.com/watch?v=1kyiQzc4134
https://x.com/bizweekgraphics/status/1395784329834475529/photo/1
https://app.datawrapper.de/river/favorites


## AI Explorables

### Exciting ml work

https://research.google.com/bigpicture/attacking-discrimination-in-ml/
http://www.r2d3.us/visual-intro-to-machine-learning-part-1/
https://playground.tensorflow.org
https://karpathy.github.io/2015/05/21/rnn-effectiveness/#visualizing-the-predictions-and-the-neuron-firings-in-the-rnn

### Didn't change the canon


https://pair.withgoogle.com/explorables/
- explain new research
- understandable by everyone
- meaningful interaction

same crosswinds
attention economy, platforms optimizing more around keeping people on them

parallel crosswinds
everything from 2018 or before!
https://github.com/tensorflow/tfjs/graphs/contributors

carcinization, but for tf playground instead crabs
https://distill.pub/2021/gnn-intro/#gnn-playground
https://pair.withgoogle.com/explorables/federated-learning/#playground


Unique
bigger models, can't fit in the browser
https://pair.withgoogle.com/explorables/uncertainty-ood/
no privileged basis
https://distill.pub/2016/handwriting/

image models to text
https://distill.pub/2019/activation-atlas/
text isn't preattentive
text isn't continuous, deep dream feature visualization doesn't work
https://pair-code.github.io/interpretability/text-dream/blogpost/index.html

### Good explainer work

not interactive
https://www.youtube.com/watch?v=wjZofJX0v4M

not accessible
https://karpathy.ai/zero-to-hero.html


also charts are used to understand models!
https://github.com/karpathy/nn-zero-to-hero/blob/master/lectures/makemore/makemore_part2_mlp.ipynb
https://github.com/karpathy/nn-zero-to-hero/blob/master/lectures/makemore/makemore_part3_bn.ipynb

and in research
https://arxiv.org/pdf/2001.08361
https://arxiv.org/pdf/2402.10962#page=6

but they're not interactive, why?


## Vis for research

- embedding/clustering/plotting linked hover
- found a new thing!
- made an app, tried to pitch teams on using it
- do over: find more new things, write them out
- make another composable tool for the toolbox, not an app
https://arxiv.org/abs/2301.04518

https://cscheid.net/2011/11/01/how-many-papers-could-nyt-write-in-three-weeks.html

### Too hard?

min(vis, ml, software)
https://pair-code.github.io/interpretability/uncertainty-over-space/

collaborate!
don't just ask for data
get in the inner loop/be able to run experiment

need to have lots of contact with ideas!
most potential interactive vis requires too much work to make. more fundamentally, need to immerse yourself in the ideas and internalize them to find where you can bend rules/data/make new data

distill has sliders, distill is good. i want to make something good, so i'll make some sliders?
https://arxiv.org/pdf/2001.08361 information density key — only add interaction when you're stuck

https://pair-code.github.io/tiny-transformers/decision-boundary/08-animate-vocab-embed/
https://pair-code.github.io/tiny-transformers/decision-boundary/14-rasp-hand-weights/
https://pair-code.github.io/tiny-transformers/patch/00-addition-identity/

https://pair-code.github.io/tiny-transformers/mlp-modular/00-sweep/
https://pair-code.github.io/tiny-transformers/mlp-modular/01-train-embedding/


### Things I'm excited by

https://transformer-circuits.pub/2024/qualitative-essay/index.html

claude
https://www.geoffreylitt.com/2023/03/25/llm-end-user-programming

https://www.datadoghq.com/blog/datadog-dashboards/#responsive-grid-based-layout
https://blocks.roadtolarissa.com/1wheel/raw/f6f6caa321fc2eff5afa272e8242e042/index.html

https://idl.uw.edu/mosaic/
https://anywidget.dev/
https://penzai.readthedocs.io/en/stable/notebooks/how_to_think_in_penzai.html
also make jax-js please
https://transformerlensorg.github.io/TransformerLens/
https://nnsight.net/


new lens
https://lre.baulab.info/
https://arxiv.org/pdf/2401.06102
https://transformer-circuits.pub/2024/scaling-monosemanticity/


# Misc


https://pair-code.github.io/tiny-transformers/
