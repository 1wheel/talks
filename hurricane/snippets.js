ogr2ogr -f CSV 2607.csv nws_precip_2017082607.shp




URL="http://www.srh.noaa.gov/data/ridge2/Precip/qpehourlyshape/2017/201708/20170826/nws_precip_2017082607.tar.gz"
curl -s $URL | tar xz --strip=3
ogr2ogr -f CSV 2607.csv nws_precip_2017082607.shp








.fitSize([width, height], { 
  "type": "LineString", "coordinates": [[-99.2, 27.5], [-91.1, 30.5]]
})





var cities = [
  {name: 'Houston',     cord: [-95.369, 29.760]},
  {name: 'Austin',      cord: [-97.743, 30.267]},
  {name: 'San Antonio', cord: [-98.493, 29.424]}
]
