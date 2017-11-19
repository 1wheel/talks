console.clear()

d3.loadData('/data/points.json', '/data/states.json', (err, res) => {
  points = res[0]
  states = res[1]

  var width = 700
  var height = width/2

  var projection = d3.geoConicConformal()
    .parallels([26 + 10 / 60, 27 + 50 / 60])
    .rotate([98 + 30 / 60, -25 - 40 / 60])
    .fitSize([width, height], topojson.mesh(states, states.objects.states))
    .fitSize([width, height], { 
      "type": "LineString", "coordinates": [[-99.2, 27.5], [-91.1, 30.5]]
    })

  points.forEach(d => {
    var total = 0
    d.totals = {}
    for (hour in d.vals){
      total += d.vals[hour]
      d.totals[hour] = total
    }

    d.pos = projection([d.Lon, d.Lat])
  })


  var ctx2 = d3.select('.graph')
    .html('')
    .append('canvas')
    .at({width, height})
    .node()
    .getContext('2d')

  var ctx = d3.select('.graph')
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

  var cities = [
    {name: 'Houston',     cord: [-95.369, 29.760]},
    {name: 'Austin',      cord: [-97.743, 30.267]},
    {name: 'San Antonio', cord: [-98.493, 29.424]}
  ]

  var citySel = svg.appendMany('g', cities)
    .translate(d => projection(d.cord))
  citySel.append('circle').at({r: 1})
  citySel.append('text')
    .text(d => d.name)
    .at({textAnchor: 'middle', dy: -5})

  svg.append('rect').at({width, height, fill: '#fff', mask: 'url(#ocean)'})
  var maskSel = svg.append('mask#ocean')
  maskSel.append('rect').at({width, height, fill: '#fff'})
  var maskStr = path(topojson.feature(states, states.objects.states))
  maskSel.append('path').at({d: maskStr})




  var color = d3.scaleLinear()
    .range(['rgba(255,0,255,0)', 'rgba(255,0,255,1)'])
  
  var totalColor = d => d3.interpolateYlGnBu(d / 10)


  var times = d3.range(24).map(d =>  2600 + d)
  var curTimeIndex = 0
  d3.interval(() => {
    drawTime(times[curTimeIndex++ % times.length])
  }, 400)

  function drawTime(time){
    ctx.clearRect(0, 0, width, height)
    if (time == times[0]) ctx2.clearRect(0, 0, width, height)

    points.forEach(d => {
      if (!d.vals[time]) return

      ctx.beginPath()
      ctx.fillStyle = color(d.vals[time])
      var [x, y] = projection([d.Lon, d.Lat])
      ctx.rect(x, y, 4, 4)
      ctx.fill()  

      ctx2.beginPath()
      ctx2.fillStyle = totalColor(d.totals[time])
      var [x, y] = projection([d.Lon, d.Lat])
      ctx2.rect(x, y, 4, 4)
      ctx2.fill()  
    })
  }

})

