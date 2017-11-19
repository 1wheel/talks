console.clear()

d3.loadData('data/points.json', 'data/states.json', (err, res) => {
  points = res[0]
  states = res[1]

  var width = 700
  var height = width/2

  var projection = d3.geoConicConformal()
    .parallels([26 + 10 / 60, 27 + 50 / 60])
    .rotate([98 + 30 / 60, -25 - 40 / 60])
    .fitSize([width, height], { 
      "type": "LineString", "coordinates": [[-99.2, 27.5], [-91.1, 30.5]]
    })


  var ctx = d3.select('.graph')
    .html('')
    .append('canvas')
    .at({width, height})
    .node()
    .getContext('2d')


  var svg = d3.select('.graph')
    .append('svg')
    .at({width, height})


  var path = d3.geoPath().projection(projection)
  var pathStr = path(topojson.mesh(states, states.objects.states))
  svg.append('path')
    .at({d: pathStr, stroke: '#000', fill: 'none', strokeWidth: .5})


  var mask = svg.append('mask#ocean')

  mask.append('rect').at({width, height, fill: '#fff'})
  var pathStr = path(topojson.feature(states, states.objects.states))
  mask.append('path').at({d: pathStr})
  svg.append('rect')
    .at({width, height, fill: '#fff', mask: 'url(#ocean)'})

  var cities = [
    {name: 'Houston',     cord: [-95.369, 29.760]},
    {name: 'Austin',      cord: [-97.743, 30.267]},
    {name: 'San Antonio', cord: [-98.493, 29.424]}
  ]
  var citySel = svg.appendMany('g', cities)
    .translate(d => projection(d.cord))
  citySel.append('circle').at({r: 1})
  citySel.append('text').text(d => d.name)
    .at({textAnchor: 'middle', dy: -5})

  var curTimeIndex = 0
  var times = d3.range(2600, 2623)
  d3.interval(() => {
    var time = times[curTimeIndex++ % times.length]

    data.forEach(d => {
      ctx.beginPath()
      ctx.fillStyle = color(d.Globvalue)

      var [x, y] = projection([d.Lon, d.Lat])

      ctx.rect(x, y, 3.5, 3.5)
      ctx.fill()
    })


  }, 200)

  var color = d3.scaleLinear()
    .range(['rgba(255,0,255,0)', 'rgba(255,0,255,1)'])
    .domain([0, 1])


})