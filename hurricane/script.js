d3.loadData('data/hours/2607.csv', 'data/states.json', (err, res) => {
  data = res[0]
  states = res[1]

  var width = 700
  var height = width/2

  var projection = d3.geoConicConformal()
    .parallels([26 + 10 / 60, 27 + 50 / 60])
    .rotate([98 + 30 / 60, -25 - 40 / 60])

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
  var pathStr = path(topojson.mesh(states, state.objects.states))
  console.log(pathStr)


  var color = d3.scaleLinear()
    .range(['rgba(255,0,255,0)', 'rgba(255,0,255,1)'])
    .domain([0, 1])

  data.forEach(d => {
    ctx.beginPath()
    ctx.fillStyle = color(d.Globvalue)
    ctx.rect(d.Hrapx, d.Hrapy, 1, 1)
    ctx.fill()
    
  })

})