(function () {
    var margin = { top: 50, left: 50, right: 50, bottom: 50 },
        height = 400-margin.top - margin.bottom,
        width = 800 - margin.left - margin.right;
    
    var svg = d3.select("#map")
            .append("svg")
            .attr("height", height + margin.top + margin.bottom)
            .attr("width", width + margin.left + margin.right)
            .append("g")
            .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
           
    /*
    Read in us.json
    */
    d3.queue()
        .defer(d3.json, "us.json")
        .await(ready)
        
    var projection = d3.geoAlbersUsa()
        .translate([ width / 2, height /2 ])
        .scale(850)
    
    var path = d3.geoPath()
        .projection(projection)     
    
    function ready(error, data) {
        console.log(data);
        
        var counties = topojson.feature(data, data.objects.counties).features
        console.log(counties);
        
        svg.selectAll(".county")
            .data(counties)
            .enter().append("path")
            .attr("class", 'county')
            .attr('d', path)
            var states = topojson.feature(data, data.objects.states).features
            console.log(states);
            
            svg.selectAll(".state")
            .data(states)
            .enter().append("path")
            .attr("class", 'state')
            .attr('d', path)
        }
            
    
})()

    

    