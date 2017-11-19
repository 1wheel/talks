URL="http://www.srh.noaa.gov/data/ridge2/Precip/qpehourlyshape/2017/201708/20170826/nws_precip_2017082607.tar.gz"
curl -s $URL | tar xz --strip=3
ogr2ogr -f CSV 2607.csv nws_precip_2017082607.shp
