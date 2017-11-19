var {_, d3, jp, glob, io} = require('scrape-stl')

var data = []
glob.sync(__dirname + '/hours/*.csv').forEach(path => {
  var time = _.last(path.split('/')).split('.csv')[0]
  io.readDataSync(path).forEach(d => {
    d.time = time
    data.push(d)
  })
})

io.writeDataSync(__dirname + '/all-hours.csv', data)


var points = jp.nestBy(data, d => d.Id).map(point => {
  var vals = {}
  point.forEach(d => vals[d.time] = +d.Globvalue)
   return {vals, Lat: +point[0].Lat, Lon: +point[0].Lon}
})

io.writeDataSync(__dirname + '/points.json', points)

points = points.filter(d =>{
  var validLat =  25.7 <= d.Lat && d.Lat <= 31.2
  var validLon = -99.2 <= d.Lon && d.Lon <= -89.1

  return validLat && validLon
})

io.writeDataSync(__dirname + '/points.json', points)
