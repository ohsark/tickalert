let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]

function getdim(div) {
  width = $(div).width();
  height = $(div).height();
  console.log(div, width, height)
  return { width, height }
}

function percentageworse(data, {
	x, // given d in data, returns the (temporal) x-value
	y, // given d in data, returns the (quantitative) y-value
	percentage, // given d in data, returns true if defined (for gaps)
	curve = d3.curveBasis, // method of interpolation between points
	marginTop = 0, // top margin, in pixels
	marginRight = 50, // right margin, in pixels
	marginBottom =30, // bottom margin, in pixels
	marginLeft = 50, // left margin, in pixels
	width, // outer width, in pixels
	height, // outer height, in pixels
	xType = d3.scaleLinear, // type of x-scale
	xDomain, // [xmin, xmax]
	xRange = [marginLeft, width - marginRight], // [left, right]
	yType = d3.scaleLinear, // type of y-scale
	yDomain, // [ymin, ymax]
	yRange = [height - marginBottom, marginTop], // [bottom, top]
	yFormat, // a format specifier string for the y-axis
	yLabel, // a label for the y-axis
	color = "currentColor" // fill color of area
} = {}) {
	// Compute values.
	const X = data[x];
	const Y = data[y];
	const I = d3.range(X.length);
	console.log(height, width)
	console.log(percentage)
	// Compute default domains.
	if (xDomain === undefined) xDomain = d3.extent(X);
	if (yDomain === undefined) yDomain = [0, d3.max(Y)];
  
	// Construct scales and axes.
	const xScale = xType(xDomain, xRange);
	const yScale = yType(yDomain, yRange);

	// Construct an area generator.
	const area = d3.area()
		.curve(curve)
		.x(i => xScale(X[i]))
		.y0(yScale(0))
		.y1(i => yScale(Y[i]));
  
	const svg = d3
		.select("#percentageworse")
		.append("svg")
		.attr("width", width)
		.attr("height", height)
		.attr("viewBox", [0, 0, width, height])
		.attr("style", "max-width: 100%; height: auto; height: intrinsic;overflow:visible");
  
	svg.append("linearGradient")
		.attr("id", "percentageworsegradient")
		.attr("gradientUnits", "userSpaceOnUse")
		.attr("x1", '0%').attr("y1", '0%')
		.attr("x2", '100%').attr("y2", '0%')
		.selectAll("stop")
		.data([
			{offset: percentage, color: "#e15759"},
			{offset: percentage, color: "#bcd8ec"},
		])
		.enter().append("stop")
		.attr("offset", function(d) { return d.offset; })
		.attr("stop-color", function(d) { return d.color; });
  
	svg.append("path")
		.attr("fill", 'url(#percentageworsegradient)')
		.attr("d", area(I))

	svg.append("text")
		.attr("x", width / 3 - 40)
		.attr("y", height -10)
		.attr("fill", "currentColor")
		.attr("text-anchor", "start")
		.text("More likely to see an increase ⟶");

	return svg.node();
}

function anomalieschart(data, {
    x = ([x]) => x, // given d in data, returns the (temporal) x-value
    y = ([, y]) => y, // given d in data, returns the (quantitative) y-value
    z = () => 1, // given d in data, returns the (categorical) z-value
    title, // given d in data, returns the title text
    defined, // for gaps in data
    curve = d3.curveBasis, // method of interpolation between points
    marginTop = 20, // top margin, in pixels
    marginRight = 10, // right margin, in pixels
    marginBottom = 30, // bottom margin, in pixels
    marginLeft = 20, // left margin, in pixels
    width, // outer width, in pixels
    height, // outer height, in pixels
    xType = d3.scaleUtc, // type of x-scale
    xDomain, // [xmin, xmax]
    xRange = [marginLeft, width - marginRight], // [left, right]
    yType = d3.scaleLinear, // type of y-scale
    yDomain, // [ymin, ymax]
    yRange = [height - marginBottom, marginTop], // [bottom, top]
    yFormat, // a format specifier string for the y-axis
    yLabel, // a label for the y-axis
    zDomain, // array of z-values
    color = "currentColor", // stroke color of line, as a constant or a function of *z*
    strokeLinecap, // stroke line cap of line
    strokeLinejoin, // stroke line join of line
    strokeWidth = 2.5, // stroke width of line
    strokeOpacity, // stroke opacity of line
    mixBlendMode = "multiply", // blend mode of lines
    div
  } = {}) {
    // Compute values.
    const X = d3.map(data, x);
    const Y = d3.map(data, y);
    const Z = d3.map(data, z);
    const O = d3.map(data, d => d);
    if (defined === undefined) defined = (d, i) => !isNaN(Y[i]);
    const D = d3.map(data, defined);
    
    d3.select(div).select("svg").remove()
  
    // Compute default domains, and unique the z-domain.
    if (xDomain === undefined) xDomain = d3.extent(X);
    if (yDomain === undefined) yDomain = [-250,250];
    if (zDomain === undefined) zDomain = Z;
    zDomain = new d3.InternSet(zDomain);
  
    // console.log(X, Y, Z)
    // console.log(xDomain, yDomain, zDomain)
    // Omit any data not present in the z-domain.
    const I = d3.range(X.length).filter(i => zDomain.has(Z[i]));
    console.log(div)
    // Construct scales and axes.
    const xScale = xType(xDomain, xRange);
    const yScale = yType(yDomain, yRange);
    // const xAxis = d3.axisBottom(xScale).ticks(width / 80).tickSizeInner(-height + marginBottom);
    const xAxis = d3.axisBottom(xScale).ticks(width / 80).tickSizeOuter(0)
    const yAxis = d3.axisLeft(yScale).ticks(1, yFormat);
    
  
    // Construct a line generator.
    const line = d3.line()
        .defined(i => D[i])
        .curve(curve)
        .x(i => xScale(X[i]))
        .y(i => yScale(Y[i]));
  
    const svg = d3.select(div)
      .append("svg")
        .attr("width", width)
        .attr("height", height)
        .attr("viewBox", [0, 0, width, height])
        .attr("style", "max-width: 100%; height: auto; height: intrinsic;")
        .style("-webkit-tap-highlight-color", "transparent")
		.on("pointerenter", pointerentered)
        .on("pointermove", pointermoved)
        .on("pointerleave", pointerleft)
        .on("touchstart", event => event.preventDefault());
  
    svg.append("linearGradient")
        .attr("id", "anomalies-gradient")
        .attr("gradientUnits", "userSpaceOnUse")
        .attr("x1", 0).attr("y1", 0)
        .attr("x2", 0).attr("y2", height)
      .selectAll("stop")
        .data([
            {offset:yScale(200)/height, color: "darkred"},
            {offset:yScale(200)/height, color: "red"},
            {offset:yScale(100) / height, color: "red"},
            {offset:yScale(100) / height, color: "orange"},
            {offset:yScale(50) / height, color: "orange"},
            {offset:yScale(50) / height, color: "#4e79a7"},
            {offset:yScale(0) / height, color: "#4e79a7"},
            {offset:yScale(0) / height, color: "#4e79a7"},
            // {offset:yScale(-50) / height, color: "#4e79a7"},
            // {offset:yScale(-50) / height, color: "orange"},
            // {offset:yScale(-100) / height, color: "orange"},
            // {offset:yScale(-100) / height, color: "red"},
            // {offset:yScale(-200) / height, color: "red"},
            // {offset:yScale(-200) / height, color: "darkred"},
        ])
      .enter().append("stop")
        .attr("offset", function(d) { return d.offset; })
        .attr("stop-color", function(d) { return d.color; });

    svg.append("g")
        .attr("transform", `translate(0,${height - marginBottom})`)
        // .attr()
        .call(xAxis)
        .call(g => {
            g.select(".domain")
              .attr("stroke-opacity", 0)
              // .attr("stroke", "#ddd")
            g.selectAll(".tick")
            .select("line")
            .attr("stroke-opacity", 1)
            // .attr("stroke", "#ddd");
            g.selectAll(".tick text")
              .attr("font-size", "14px")
              .attr("transform", `translate(${marginLeft + marginBottom },0)`)
            .call(g => g.append("text")
              .attr("x", width - marginRight - 10)
              .attr("y",35)
              .attr("font-size", "1.25em")
              .attr("font-weight", "600")
              .attr("fill", "currentColor")
              // .attr("text-anchor", "start")
              .text("Positive"));
        });
    
    svg.append("g")
        .attr("transform", `translate(${marginLeft},0)`)
        .call(yAxis)
        .call(g => g.select(".domain").remove())
        .call(g => g.selectAll(".tick line").clone()
            .attr("x2", width - marginLeft - marginRight)
            .attr("stroke-opacity", 1)
            .attr("stroke", "#ddd"))
			.call(g => g.append("text")
            .attr("x", -5)
            .attr("y", 14)
            .attr("fill", "currentColor")
            .attr("text-anchor", "start")
            .text("↑ Above Average"))
		.call(g => g.append("text")
            .attr("x", -5)
            .attr("y", 110)
            .attr("fill", "currentColor")
            .attr("text-anchor", "start")
            .text("↓ Below Average"));
		


    const path = svg.append("g")
        .attr("fill", "none")
        .attr("stroke", typeof color === "string" ? 'url(#anomalies-gradient)' : null)
        .attr("stroke-linecap", strokeLinecap)
        .attr("stroke-linejoin", strokeLinejoin)
        .attr("stroke-width", strokeWidth)
        .attr("stroke-opacity", strokeOpacity)
      .selectAll("path")
      .data(d3.group(I, i => Z[i]))
      .join("path")
        .style("mix-blend-mode", mixBlendMode)
        .attr("stroke", typeof color === "function" ? ([z]) => color(z) : null)
        .attr("d", ([, I]) => line(I));
    
	const dot = svg.append("g")
        .attr("class", "focus")
        .attr("display", "none");
  
    dot.append("circle")
        .attr("r", 5);

    dot.append("rect")
        .attr("class", "tooltip-line")
        .attr("width", 100)
        .attr("height", Z[1] == undefined ? 50 : 70)
        .attr("x", -50)
        .attr("y", Z[1] == undefined ? -70 : -90)
        .attr("rx", 4)
        .attr("ry", 4)
		.attr("fill", "#fff")
		.attr("stroke", "#333");
  
    dot.append("text")
        .attr("class", "tooltip-date")
        .attr("x", -45)
        .attr("y", -50);
	
	dot.append("text")
        .attr("class", "tooltip-strata")
        .attr("x", -45)
        .attr("y", -70)
		.attr("font-weight", "bold");
  
    dot.append("text")
        .attr("x", -45)
        .attr("y", -30)
        .text("Total:");
  
    dot.append("text")
        .attr("class", "tooltip-count")
        .attr("x", 0)
        .attr("y", -30)
		.attr("font-weight", "bold");
		console.log(Y)
    function pointermoved(event) {
      const [xm, ym] = d3.pointer(event);
      const i = d3.least(I, i => Math.hypot(xScale(X[i]) - xm, yScale(Y[i]) - ym)); // closest point
      path.style("stroke", ([z]) => Z[i] === z ? null : "#ddd").filter(([z]) => Z[i] === z).raise();
      dot.attr("transform", `translate(${xScale(X[i])},${yScale(Y[i])})`);
      dot.select(".tooltip-date").text(months[X[i].getMonth()] + ", " + X[i].getFullYear());
	  dot.select(".tooltip-strata").text(Z[i]);
      dot.select(".tooltip-count").text(String(Math.round(Y[i])) + "%");
      svg.property("value", O[i]).dispatch("input", {bubbles: true});
    }
  
    function pointerentered() {
      path.style("mix-blend-mode", null).style("stroke", "#ddd");
      dot.attr("display", null);
    }
  
    function pointerleft() {
      path.style("mix-blend-mode", "multiply").style("stroke", null);
      dot.attr("display", "none");
      svg.node().value = null;
      svg.dispatch("input", {bubbles: true});
	}
    
    return Object.assign(svg.node(), {value: null});
}

function forecast(data, {
    x,
    y,
    curve = d3.curveBasis, // method of interpolation between points
    marginTop = 20, // top margin, in pixels
    marginRight = 0, // right margin, in pixels
    marginBottom = 30, // bottom margin, in pixels
    marginLeft = 30, // left margin, in pixels
    width, // outer width, in pixels
    height, // outer height, in pixels
    xType = d3.scaleUtc, // type of x-sc ale
    xDomain, // [xmin, xmax]
    xRange = [marginLeft, width - marginRight], // [left, right]
    yType = d3.scaleLinear, // type of y-scale
    yDomain, // [ymin, ymax]
    yRange = [height - marginBottom, marginTop], // [bottom, top]
	xLabel = "Date →",
	yLabel = "↑ Total",
    yFormat, // a format specifier string for the y-axis
    color = "currentColor", // fill color of area
	strokeLinecap = "round", // stroke line cap of the line
    strokeLinejoin = "round", // stroke line join of the line
    strokeWidth = 1.5, // stroke width of line, in pixels
    strokeOpacity = 1, // stroke opacity of line
    div,
    forecastdate,
	fit,
	forecast 
  } = {}) {
    // Compute values.
    const l5 = data[y][0];
    const l20 = data[y][1];
    const l30 = data[y][2];
    const l40 = data[y][3];
    const l50 = data[y][4];
    const l60 = data[y][5];
    const l70 = data[y][6];
    const l80 = data[y][7];
    const l95 = data[y][8];
	  const modelFit = data["fit"]
	
    const X = d3.map(data[x], d => new Date(d))
    const I = d3.range(X.length)

    let forecaststart = data[x].indexOf("2022-01-01")
    // let forecastperiod = data[x].length - data[x].indexOf("2022-01-01")
	
    if (xDomain === undefined) xDomain = d3.extent(forecast ? X.slice(forecaststart) : X)
    if (yDomain === undefined) yDomain = [d3.min(d3.map(data[y], d => d3.min(d))) < 0 ? d3.min(d3.map(data[y], d => d3.min(d))) : 0, d3.max(d3.map(data[y], d => d3.max(d)))];
    // Construct scales and axes.

    const xScale = xType(xDomain, xRange);
    const yScale = yType(yDomain, yRange);
    const xAxis = d3.axisBottom(xScale).ticks(width / 80).tickSizeOuter(0);
    const yAxis = d3.axisLeft(yScale).ticks(height / 40, yFormat);
  
    // Construct an area generator.
    const area95 = d3.area()
        .curve(curve)
        .x(i => xScale(X[i]))
        .y0(i => yScale(l5[i]))
        .y1(i => yScale(l95[i]));
	
    const area80 = d3.area()
          .curve(curve)
          .x(i => xScale(X[i]))
          .y0(i => yScale(l20[i]))
          .y1(i => yScale(l80[i]));

    const area70 = d3.area()
          .curve(curve)
          .x(i => xScale(X[i]))
          .y0(i => yScale(l30[i]))
          .y1(i => yScale(l70[i]));
    
    const area60 = d3.area()
          .curve(curve)
          .x(i => xScale(X[i]))
          .y0(i => yScale(l40[i]))
          .y1(i => yScale(l60[i]));
    
	const line = d3.line()
		.curve(curve)
		.x(i => xScale(X[i]))
		.y(i => yScale(l50[i]));
        
	const svg = d3.select(div)
		.append("svg")
			.attr("width", width - 30)
			.attr("height", height)
			.attr("viewBox", [0, 0, width, height])
			.attr("style", "max-width: 100%; height: auto; height: intrinsic;overflow: visible")
			.on("pointerenter", pointerentered)
			.on("pointermove", pointermoved)
			.on("pointerleave", pointerleft)
			.on("touchstart", event => event.preventDefault());;

    svg.append("g")
        .attr("transform", `translate(0,${height - marginBottom})`)
        .call(xAxis)
		// .call(g => g.append("text")
    //         .attr("x", width - marginRight )
    //         .attr("y",35)
    //         .attr("font-size", "1.25em")
    //         .attr("font-weight", "600")
    //         .attr("fill", "currentColor")
    //         // .attr("text-anchor", "start")
    //         .text(xLabel));
		
  
    svg.append("g")
        .attr("transform", `translate(${marginLeft},0)`)
        .call(yAxis)                        
        .call(g => g.select(".domain").remove())
        .call(g => g.append("text")
            .attr("x", 10)
            .attr("y",12)
            .attr("font-size", "1.25em")
            .attr("font-weight", "600")
            .attr("fill", "currentColor")
            // .attr("text-anchor", "start")
            .text(yLabel));

	if (!forecast) {
		svg.append("path")
			.attr("fill", "#ddd")
			.attr("d", area95(I.slice(0,forecaststart + 1)));
		
		svg.append("line")
			.attr("x1", xScale(forecastdate)) 
			.attr("y1", 0)
			.attr("x2", xScale(forecastdate)) 
			.attr("y2", height - marginBottom)
				.style("stroke-width", 2)
				.style("stroke", "#ddd")
				.style("fill", "none");
		
		svg.append("text")
        .attr("x", xScale(forecastdate) + 10) 
        .attr("y", marginBottom)
      .style("font-weight", "bolder")
      .style("font-size", "0.825em")
      .style("fill", "#4e79a7")
      .append("tspan")
        .attr('x', xScale(forecastdate) + 10)
			  .text("Forecast")
      .append("tspan")
        .attr('x', xScale(forecastdate) + 10)
        .attr('dy', 14)
        .text("→")
			// .text("Forecast ")
				

		svg.append("text")
        .attr("x", xScale(forecastdate) - 100) 
        .attr("y", marginBottom)
      .style("font-weight", "bolder")
      .style("font-size", "0.825em")
      .style("fill", "#aaa")
      .append("tspan")
        .attr('x', xScale(forecastdate) - 80)
			  .text("Model Train")
      .append("tspan")
        .attr('x', xScale(forecastdate) - 25)
        .attr('dy', 14)
        .text("←")

		svg.append("g")
			.attr("fill", "#000")
			.selectAll("circle")
			.data(I.slice(0,forecaststart))
			.join("circle")
				.attr("cx", i => xScale(X[i]))
				.attr("cy", i => yScale(modelFit[i]))
				.attr("r", i => modelFit[i] == "NA" ? 0 : 3.5)
        .attr("stroke", "white")
        .attr("stroke-width", 1.5)
	}

	svg.append("path")
		.attr("fill", "#d5eeff")
		.attr("d", area95(I.slice(forecaststart)));

    svg.append("path")
		.attr("fill", "#bcd8ec")
		.attr("d", area80(I.slice(forecaststart)));
	
	svg.append("path")
		.attr("fill", "#a4c3d8")
		.attr("d", area70(I.slice(forecaststart)));

	svg.append("path")
		.attr("fill", "#8baec6")
		.attr("d", area60(I.slice(forecaststart)));
	
	svg.append("path")
        .attr("fill", "none")
        .attr("stroke", "#43718f")
        .attr("stroke-width", strokeWidth)
        .attr("stroke-linecap", strokeLinecap)
        .attr("stroke-linejoin", strokeLinejoin)
        .attr("stroke-opacity", strokeOpacity)
        .attr("d", line(I.slice(forecaststart)));

	const info = svg.append("g")
        .attr("class", "focus zindex-tooltip")
        .attr("display", "none")
		.attr("overflow", "visible");
  
    info.append("line")
      .attr("x1", 0) 
      .attr("y1", 0)
      .attr("x2", 0) 
      .attr("y2", height - marginBottom)
        .style("stroke-width", 1)
        .style("stroke", "#000")
        .style("fill", "none");

    info.append("rect")
        .attr("class", "conf-desc")
        .attr("width", 100)
        .attr("height", 70)
        .attr("y", 0)
        .attr("rx", 4)
        .attr("ry", 4)
		.attr("fill", "#fff")
		.attr("stroke", "#333");
  
    info.append("text")
        .attr("class", "tooltip-date")
        .attr("y", 18);
	
	  info.append("text")
        .attr("class", "tooltip-main")
        .attr("y", 40)
		.attr("font-weight", "bold")
		.attr("font-size", "1.1rem");
  
    info.append("text")
        .attr("class", "tooltip-conf")
        .attr("y", 60);
  
    function pointermoved(event) {
      const [xm, ym] = d3.pointer(event);
      const i = d3.least(I, i => Math.hypot(xScale(X[i]) - xm, yScale(l5[i]) - ym)); // closest point
     
      info.attr("transform", `translate(${xScale(X[i])},${0})`);
      info.select(".tooltip-date").text(months[X[i].getMonth()] + ", " + X[i].getFullYear());
	    info.select(".tooltip-main").text(l50[i]);
      info.select(".tooltip-conf").text("[" + l5[i] + "-" + l95[i] + "]");
      
      if(xm > xScale(forecastdate) -60) {
        info.select(".conf-desc").attr("x", -105);
        info.select(".tooltip-date").attr("x", -100);
        info.select(".tooltip-main").attr("x", -100);
        info.select(".tooltip-conf").attr("x", -100);
      } else {
        info.select(".conf-desc").attr("x", 5);
        info.select(".tooltip-date").attr("x", 10);
        info.select(".tooltip-main").attr("x", 10);
        info.select(".tooltip-conf").attr("x", 10);
      }

    }
  
    function pointerentered() {
    //   path.style("mix-blend-mode", null).style("stroke", "#ddd");
      info.attr("display", null);
    }
  
    function pointerleft() {
    //   path.style("mix-blend-mode", "multiply").style("stroke", null);
      info.attr("display", "none");
      svg.node().value = null;
      svg.dispatch("input", {bubbles: true});
    }
    

    return svg.node();
}

function forecastanomalies(data, {
    x,
    y,
    curve = d3.curveBasis, // method of interpolation between points
    marginTop = 20, // top margin, in pixels
    marginRight = 0, // right margin, in pixels
    marginBottom = 30, // bottom margin, in pixels
    marginLeft = 30, // left margin, in pixels
    width, // outer width, in pixels
    height, // outer height, in pixels
    xType = d3.scaleUtc, // type of x-sc ale
    xDomain, // [xmin, xmax]
    xRange = [marginLeft, width - marginRight], // [left, right]
    yType = d3.scaleLinear, // type of y-scale
    yDomain, // [ymin, ymax]
    yRange = [height - marginBottom, marginTop], // [bottom, top]
	strokeLinecap = "round", // stroke line cap of the line
    strokeLinejoin = "round", // stroke line join of the line
    strokeWidth = 1.5, // stroke width of line, in pixels
    strokeOpacity = 1, // stroke opacity of line
    div,
	xLabel = "Date →",
	yLabel = "↑ Total",
    forecastdate,
	forecast
  } = {}) {
    // Compute values.
    const l5 = data[y][0];
    const l20 = data[y][1];
    const l30 = data[y][2];
    const l40 = data[y][3];
    const l50 = data[y][4];
    const l60 = data[y][5];
    const l70 = data[y][6];
    const l80 = data[y][7];
    const l95 = data[y][8];
	// let anomabove0 = 0
	
    let forecaststart = data[x].indexOf("2022-01-01")

    const X = d3.map(data[x], d => new Date(d))
    const I = d3.range(X.length)

	// I.slice(forecaststart).forEach(i => {
	// 	console.log(l50[i])
	// 	if(l50[i] > 0) {
	// 		anomabove0++
	// 	} else {
	// 		anomabove0--
	// 	}
	// })

	// if(anomabove0 > 0) {
	// 	d3.select("#anomaliestext")
	// 		.style("color", "#e15759")
	// 		.text("Total for most of the months is above the average showing an upward trend in the tick cases for next year.")
	// } else {
	// 	d3.select("#anomaliestext")
	// 		.style("color", "#4e79a7")
	// 		.text("Total for most of the months is below the average showing a downward trend in the tick cases for next year.")			
	// }
	
    if (xDomain === undefined) xDomain = d3.extent(forecast ? X.slice(forecaststart) : X)
    if (yDomain === undefined) yDomain = [-1,1];
    // Construct scales and axes.
    const xScale = xType(xDomain, xRange);
    const yScale = yType(yDomain, yRange);
    const xAxis = d3.axisBottom(xScale).ticks(width / 80).tickSizeOuter(0);
    const yAxis = d3.axisLeft(yScale).ticks(1);

    // Construct an area generator.
    const area95 = d3.area()
        .curve(curve)
        .x(i => xScale(X[i]))
        .y0(i => yScale(l5[i]))
        .y1(i => yScale(l95[i]));
	
    const area80 = d3.area()
          .curve(curve)
          .x(i => xScale(X[i]))
          .y0(i => yScale(l20[i]))
          .y1(i => yScale(l80[i]));

    const area70 = d3.area()
          .curve(curve)
          .x(i => xScale(X[i]))
          .y0(i => yScale(l30[i]))
          .y1(i => yScale(l70[i]));
    
    const area60 = d3.area()
          .curve(curve)
          .x(i => xScale(X[i]))
          .y0(i => yScale(l40[i]))
          .y1(i => yScale(l60[i]));
    
	const line = d3.line()
		.curve(curve)
		.x(i => xScale(X[i]))
		.y(i => yScale(l50[i]));
        
	const svg = d3.select(div)
		.append("svg")
			.attr("width", width -11)
			.attr("height", height)
			.attr("viewBox", [0, 0, width, height])
			.attr("style", "max-width: 100%; height: auto; height: intrinsic;overflow: visible");

	svg.append("rect")
		.attr("width", width - marginLeft - marginRight)
		.attr("height", height - marginBottom )
		.attr("fill", "#ddd")
		.attr("x", marginLeft)
		.attr("y", 0)		
		.attr("opacity", 0.25);

    svg.append("g")
        .attr("transform", `translate(0,${height - marginBottom})`)
        .call(xAxis)
        .call(g => g.append("text")
            .attr("x", width - marginRight )
            .attr("y",35)
            .attr("font-size", "1.25em")
            .attr("font-weight", "600")
            .attr("fill", "currentColor")
            // .attr("text-anchor", "start")
            .text(xLabel));

	svg.append("path")
		.attr("fill", "#d5eeff")
		.attr("d", area95(forecast ? I.slice(forecaststart) : I));
		
    svg.append("path")
		.attr("fill", "#bcd8ec")
		.attr("d", area80(forecast ? I.slice(forecaststart) : I));
	
	svg.append("path")
		.attr("fill", "#a4c3d8")
		.attr("d", area70(forecast ? I.slice(forecaststart) : I));

	svg.append("path")
		.attr("fill", "#8baec6")
		.attr("d", area60(forecast ? I.slice(forecaststart) : I));

	if(!forecast) {
		svg.append("path")
		.attr("fill", "#ccc")
		.attr("d", area95(I.slice(0,forecaststart+1)));
	}


	
	svg.append("path")
        .attr("fill", "none")
        .attr("stroke", "#43718f")
        .attr("stroke-width", strokeWidth)
        .attr("stroke-linecap", strokeLinecap)
        .attr("stroke-linejoin", strokeLinejoin)
        .attr("stroke-opacity", strokeOpacity)
        .attr("d", line(I.slice(forecaststart)));

	svg.append("line")
		.attr("x1", xScale(forecastdate))  //<<== change your code here
		.attr("y1", 0)
		.attr("x2", xScale(forecastdate))  //<<== and here
		.attr("y2", height - marginBottom)
			.style("stroke-width", 2)
			.style("stroke", "#ddd")
			.attr("stroke-opacity", 0.6)
			.style("fill", "none");
			
	svg.append("g")
        .attr("transform", `translate(${marginLeft},0)`)
        .call(yAxis)                        
        .call(g => g.select(".domain").remove())
        .call(g => g.selectAll(".tick line").clone()
            .attr("x2", width - marginLeft - marginRight)
            .attr("stroke-opacity", 0.6))
        .call(g => g.append("text")
            .attr("x", 5)
            .attr("y", 14)
            .attr("fill", "currentColor")
            .attr("text-anchor", "start")
            .text("↑ Above Average"))
		.call(g => g.append("text")
            .attr("x", 5)
            .attr("y", height - marginBottom - 5)
            .attr("fill", "currentColor")
            .attr("text-anchor", "start")
            .text("↓ Below Average"));
	

    return svg.node();
}

function forecasttrend(data, {
    x,
    y,
    curve = d3.curveBasis, // method of interpolation between points
    marginTop = 0, // top margin, in pixels
    marginRight = 0, // right margin, in pixels
    marginBottom = 0, // bottom margin, in pixels
    marginLeft = 30, // left margin, in pixels
    width, // outer width, in pixels
    height, // outer height, in pixels
    xType = d3.scaleLinear, // type of x-sc ale
    xDomain, // [xmin, xmax]
    xRange = [marginLeft, width - marginRight], // [left, right]
    yType = d3.scaleLinear, // type of y-scale
    yDomain, // [ymin, ymax]
    yRange = [height - marginBottom, marginTop], // [bottom, top]
  	xLabel = "Time",
    yFormat, // a format specifier string for the y-axis
    yLabel, // a label for the y-axis
    color = "currentColor", // fill color of area
	  strokeLinecap = "round", // stroke line cap of the line
    strokeLinejoin = "round", // stroke line join of the line
    strokeWidth = 1.5, // stroke width of line, in pixels
    strokeOpacity = 1, // stroke opacity of line
    div,
    forecastdate,
	fit
  } = {}) {
    // Compute values.
    const l5 = data[y][0];
    const l20 = data[y][1];
    const l30 = data[y][2];
    const l40 = data[y][3];
    const l50 = data[y][4];
    const l60 = data[y][5];
    const l70 = data[y][6];
    const l80 = data[y][7];
    const l95 = data[y][8];
    // const X = d3.map(data[x], d => new Date(d))
    const I = d3.range(l5.length)
    
    if (xDomain === undefined) xDomain = d3.extent(I)
    if (yDomain === undefined) yDomain = [d3.min(d3.map(data[y], d => d3.min(d))) < 0 ? d3.min(d3.map(data[y], d => d3.min(d))) : 0, d3.max(d3.map(data[y], d => d3.max(d)))];
    // Construct scales and axes.
    const xScale = xType(xDomain, xRange);
    const yScale = yType(yDomain, yRange);
    const xAxis = d3.axisBottom(xScale).ticks(width / 80).tickSizeOuter(0);
    const yAxis = d3.axisLeft(yScale).ticks(height / 40, yFormat);
  
    // Construct an area generator.
    const area95 = d3.area()
        .curve(curve)
        .x(i => xScale(i))
        .y0(i => yScale(l5[i]))
        .y1(i => yScale(l95[i]));
	
    const area80 = d3.area()
          .curve(curve)
          .x(i => xScale(i))
          .y0(i => yScale(l20[i]))
          .y1(i => yScale(l80[i]));

    const area70 = d3.area()
          .curve(curve)
          .x(i => xScale(i))
          .y0(i => yScale(l30[i]))
          .y1(i => yScale(l70[i]));
    
    const area60 = d3.area()
          .curve(curve)
          .x(i => xScale(i))
          .y0(i => yScale(l40[i]))
          .y1(i => yScale(l60[i]));
    
	const line = d3.line()
		.curve(curve)
		.x(i => xScale(i))
		.y(i => yScale(l50[i]));
        
	const svg = d3.select(div)
		.append("svg")
			.attr("width", width)
			.attr("height", height)
			.attr("viewBox", [0, 0, width, height])
			.attr("style", "max-width: 100%; height: auto; height: intrinsic;");

	svg.append("path")
		.attr("fill", "#ddd")
		.attr("d", area95(I.slice(0,592)));

	svg.append("path")
		.attr("fill", "#d5eeff")
		.attr("d", area95(I.slice(591)));

    svg.append("path")
		.attr("fill", "#bcd8ec")
		.attr("d", area80(I.slice(591)));
	
	svg.append("path")
		.attr("fill", "#a4c3d8")
		.attr("d", area70(I.slice(591)));

	svg.append("path")
		.attr("fill", "#8baec6")
		.attr("d", area60(I.slice(591)));
	
	svg.append("path")
        .attr("fill", "none")
        .attr("stroke", "#43718f")
        .attr("stroke-width", strokeWidth)
        .attr("stroke-linecap", strokeLinecap)
        .attr("stroke-linejoin", strokeLinejoin)
        .attr("stroke-opacity", strokeOpacity)
        .attr("d", line(I));

	// svg.append("line")
	// 	.attr("x1", xScale(591))  
	// 	.attr("y1", 0)
	// 	.attr("x2", xScale(591))  
	// 	.attr("y2", height - marginBottom)
	// 		.style("stroke-width", 2)
	// 		.style("stroke", "#ddd")
	// 		.style("fill", "none");
	

    return svg.node();
}


  function thresholds(data, {
    x , // given d in data, returns the (ordinal) x-value
    y, // given d in data, returns the (quantitative) y-value
    title, // given d in data, returns the title text
    marginTop = 20, // the top margin, in pixels
    marginRight = 0, // the right margin, in pixels
    marginBottom = 30, // the bottom margin, in pixels
    marginLeft = 40, // the left margin, in pixels
    width, // the outer width of the chart, in pixels
    height, // the outer height of the chart, in pixels
    xDomain, // an array of (ordinal) x-values
    xRange = [marginLeft, width - marginRight], // [left, right]
    yType = d3.scaleLinear, // y-scale type
    yDomain, // [ymin, ymax]
    yRange = [height - marginBottom, marginTop], // [bottom, top]
    xPadding = 0.1, // amount of x-range to reserve to separate bars
    yFormat, // a format specifier string for the y-axis
    yLabel, // a label for the y-axis
    color = "currentColor" // bar fill color
  } = {}) {
    // Compute values.
    const X = data[x];
    const Y = data[y];
  
    // Compute default domains, and unique the x-domain.
    if (xDomain === undefined) xDomain = X;
    if (yDomain === undefined) yDomain = [0, 1];
    xDomain = new d3.InternSet(xDomain);
  
    // Omit any data not present in the x-domain.
    const I = d3.range(X.length).filter(i => xDomain.has(X[i]));
  
    // Construct scales, axes, and formats.
    const xScale = d3.scaleBand(xDomain, xRange).padding(xPadding);
    const yScale = yType(yDomain, yRange);
    const xAxis = d3.axisBottom(xScale).tickSizeOuter(0);
    const yAxis = d3.axisLeft(yScale).ticks(height / 40, yFormat);
  
    // Compute titles.
    if (title === undefined) {
      const formatValue = yScale.tickFormat(100, yFormat);
      title = i => `${X[i]}\n${formatValue(Y[i])}`;
    } else {
      const O = d3.map(data, d => d);
      const T = title;
      title = i => T(O[i], i, data);
    }
  
    const svg = d3.select("#thresholdprobability")
    .append("svg")
        .attr("width", width)
        .attr("height", height)
        .attr("viewBox", [0, 0, width, height])
        .attr("style", "max-width: 100%; height: auto; height: intrinsic;");
  
    svg.append("g")
        .attr("transform", `translate(${marginLeft},0)`)
        .call(yAxis)
        .call(g => g.select(".domain").remove())
        .call(g => g.append("text")
            .attr("x", -marginLeft)
            .attr("y", 10)
            .attr("fill", "currentColor")
            .attr("text-anchor", "start")
            .text(yLabel));

	

    svg.append("g")
        .selectAll("rect")
        .data(I)
        .join("rect")
            .attr("x", i => xScale(X[i]))
            .attr("y", i => yScale(Y[i]))
            .attr("height", i => yScale(0) - yScale(Y[i]))
            .attr("width", xScale.bandwidth())
			.attr("fill", i => Y[i] < 0.7 ? "#bcd8ec" : "#e15759");
    svg.append("g")
        .attr("transform", `translate(0,${height - marginBottom})`)
        .call(xAxis);
	
	svg.append("line")
		.attr("x1", marginLeft)  
		.attr("y1", yScale(0.7))
		.attr("x2", width)  
		.attr("y2", yScale(0.7))
			.style("stroke-width", 1)
			.style("stroke", "#777")
			.style("fill", "none")
			.style("border", "5px solid #fff");
  
    return svg.node();
}

function linechart(data, {
  x = ([x]) => x, // given d in data, returns the (temporal) x-value
  y = ([, y]) => y, // given d in data, returns the (quantitative) y-value
  z = () => 1, // given d in data, returns the (categorical) z-value
  title, // given d in data, returns the title text
  defined, // for gaps in data
  curve = d3.curveLinear, // method of interpolation between points
  marginTop = 20, // top margin, in pixels
  marginRight = 30, // right margin, in pixels
  marginBottom = 30, // bottom margin, in pixels
  marginLeft = 40, // left margin, in pixels
  width, // outer width, in pixels
  height, // outer height, in pixels
  xType = d3.scaleUtc, // type of x-scale
  xDomain, // [xmin, xmax]
  xRange = [marginLeft, width - marginRight], // [left, right]
  yType = d3.scaleLinear, // type of y-scale
  yDomain, // [ymin, ymax]
  yRange = [height - marginBottom, marginTop], // [bottom, top]
  yFormat, // a format specifier string for the y-axis
  yLabel, // a label for the y-axis
  xLabel, // a label for the x-axis
  zDomain, // array of z-values
  color = "currentColor", // stroke color of line, as a constant or a function of *z*
  strokeLinecap, // stroke line cap of line
  strokeLinejoin, // stroke line join of line
  strokeWidth = 2.5, // stroke width of line
  strokeOpacity, // stroke opacity of line
  mixBlendMode = "multiply", // blend mode of lines
  div,
  tickFormat
} = {}) {
  // Compute values.
  const X = d3.map(data, x);
  const Y = d3.map(data, y);
  const Z = d3.map(data, z);
  const O = d3.map(data, d => d);
  if (defined === undefined) defined = (d, i) => !isNaN(Y[i]);
  const D = d3.map(data, defined);
  d3.select(div).select("svg").remove()
console.log(d3.map(data, x))
  // Compute default domains, and unique the z-domain.
  if (xDomain === undefined) xDomain = d3.extent(X);
  if (yDomain === undefined) yDomain = [0, d3.max(Y, d => typeof d === "string" ? +d : d)];
  if (zDomain === undefined) zDomain = Z;
  zDomain = new d3.InternSet(zDomain);

  // console.log(X, Y, Z)
  // console.log(xDomain, yDomain, zDomain)
  // Omit any data not present in the z-domain.
  const I = d3.range(X.length).filter(i => zDomain.has(Z[i]));
  console.log(div)
  // Construct scales and axes.
  const xScale = xType(xDomain, xRange);
  const yScale = yType(yDomain, yRange);
  const xAxis = d3.axisBottom(xScale).ticks(width / 80).tickSizeOuter(0).tickFormat(tickFormat);
  const yAxis = div == "#trend" || div == "#seasonal" ? d3.axisLeft(yScale) : d3.axisLeft(yScale).ticks(height / 60, yFormat);
  

  // Construct a line generator.
  const line = d3.line()
      .defined(i => D[i])
      .curve(curve)
      .x(i => xScale(X[i]))
      .y(i => yScale(Y[i]));

  const svg = d3.select(div)
    .append("svg")
      .attr("width", width)
      .attr("height", height)
      .attr("viewBox", [0, 0, width, height])
      .attr("style", "max-width: 100%; height: auto; height: intrinsic; overflow: visible")
      .style("-webkit-tap-highlight-color", "transparent")
      .on("pointerenter", pointerentered)
      .on("pointermove", pointermoved)
      .on("pointerleave", pointerleft)
      .on("touchstart", event => event.preventDefault());

  svg.append("g")
      .attr("transform", `translate(0,${height - marginBottom})`)
      .call(xAxis)
      .call(g => g.append("text")
          .attr("x", width - marginRight - 10)
          .attr("y",35)
          .attr("font-size", "1.25em")
          .attr("font-weight", "600")
          .attr("fill", "currentColor")
          // .attr("text-anchor", "start")
          .text(xLabel));
      


  svg.append("g")
      .attr("transform", `translate(${marginLeft},0)`)
      .call(yAxis)
      .call(g => g.select(".domain").remove())
      .call(g => g.append("text")
          .attr("x", 0)
          .attr("y",12)
          .attr("font-size", "1.25em")
          .attr("font-weight", "600")
          .attr("fill", "currentColor")
          // .attr("text-anchor", "start")
          .text(yLabel));
  
  const path = svg.append("g")
      .attr("fill", "none")
      .attr("stroke", typeof color === "string" ? color : null)
      .attr("stroke-linecap", strokeLinecap)
      .attr("stroke-linejoin", strokeLinejoin)
      .attr("stroke-width", strokeWidth)
      .attr("stroke-opacity", strokeOpacity)
    .selectAll("path")
    .data(d3.group(I, i => Z[i]))
    .join("path")
      .style("mix-blend-mode", mixBlendMode)
      .attr("stroke", typeof color === "function" ? ([z]) => color(z) : null)
      .attr("d", ([, I]) => line(I));

  const dot = svg.append("g")
      .attr("class", "focus")
      .attr("display", "none");

  dot.append("circle")
      .attr("r", 5);

  dot.append("rect")
      .attr("class", "tooltip-line")
      .attr("width", 100)
      .attr("height", Z[1] == undefined ? 50 : 70)
      .attr("x", -50)
      .attr("y", Z[1] == undefined ? -70 : -90)
      .attr("rx", 4)
      .attr("ry", 4)
  .attr("fill", "#fff")
  .attr("stroke", "#333");

  dot.append("text")
      .attr("class", "tooltip-date")
      .attr("x", -45)
      .attr("y", -50);

dot.append("text")
      .attr("class", "tooltip-strata")
      .attr("x", -45)
      .attr("y", -70)
  .attr("font-weight", "bold");

  dot.append("text")
      .attr("x", -45)
      .attr("y", -30)
      .text("Total:");

  dot.append("text")
      .attr("class", "tooltip-count")
      .attr("x", 0)
      .attr("y", -30)
  .attr("font-weight", "bold");

  function pointermoved(event) {
    const [xm, ym] = d3.pointer(event);
    const i = d3.least(I, i => Math.hypot(xScale(X[i]) - xm, yScale(Y[i]) - ym)); // closest point
    path.style("stroke", ([z]) => Z[i] === z ? null : "#ddd").filter(([z]) => Z[i] === z).raise();
    dot.attr("transform", `translate(${xScale(X[i])},${yScale(Y[i])})`);
    dot.select(".tooltip-date").text(months[X[i].getMonth()] + ", " + X[i].getFullYear());
  dot.select(".tooltip-strata").text(Z[i]);
    dot.select(".tooltip-count").text(Y[i]);
    svg.property("value", O[i]).dispatch("input", {bubbles: true});
  }

  function pointerentered() {
    path.style("mix-blend-mode", null).style("stroke", "#ddd");
    dot.attr("display", null);
  }

  function pointerleft() {
    path.style("mix-blend-mode", "multiply").style("stroke", null);
    dot.attr("display", "none");
    svg.node().value = null;
    svg.dispatch("input", {bubbles: true});
  }
  
  return Object.assign(svg.node(), {value: null});
}

function MultiLineChart(data, {
  x = ([x]) => x, // given d in data, returns the (temporal) x-value
  y = ([, y]) => y, // given d in data, returns the (quantitative) y-value
  z = () => 1, // given d in data, returns the (categorical) z-value
  title, // given d in data, returns the title text
  defined, // for gaps in data
  curve = d3.curveLinear, // method of interpolation between points
  marginTop = 20, // top margin, in pixels
  marginRight = 30, // right margin, in pixels
  marginBottom = 30, // bottom margin, in pixels
  marginLeft = 40, // left margin, in pixels
  width, // outer width, in pixels
  height, // outer height, in pixels
  xType = d3.scaleUtc, // type of x-scale
  xDomain, // [xmin, xmax]
  xRange = [marginLeft, width - marginRight], // [left, right]
  yType = d3.scaleLinear, // type of y-scale
  yDomain, // [ymin, ymax]
  yRange = [height - marginBottom, marginTop], // [bottom, top]
  yFormat, // a format specifier string for the y-axis
  yLabel, // a label for the y-axis
  xLabel, // a label for the x-axis
  zDomain, // array of z-values
  color = "currentColor", // stroke color of line, as a constant or a function of *z*
  strokeLinecap, // stroke line cap of line
  strokeLinejoin, // stroke line join of line
  strokeWidth = 2.5, // stroke width of line
  strokeOpacity, // stroke opacity of line
  mixBlendMode = "multiply", // blend mode of lines
  colors = d3.schemeTableau10,
  div,
  voronoi // show a Voronoi overlay? (for debugging)
} = {}) {
  // Compute values.
  const X = d3.map(data, x);
  const Y = d3.map(data, y);
  const Z = d3.map(data, z);
  const O = d3.map(data, d => d);
  if (defined === undefined) defined = (d, i) => !isNaN(Y[i]);
  const D = d3.map(data, defined);

  // Compute default domains, and unique the z-domain.
  if (yDomain === undefined) yDomain = [0, d3.max(Y, d => typeof d === "string" ? +d : d)];
  if (xDomain === undefined) xDomain = d3.extent(X);
  if (zDomain === undefined) zDomain = Z;
  zDomain = new d3.InternSet(zDomain);

  // Omit any data not present in the z-domain.
  const I = d3.range(X.length).filter(i => zDomain.has(Z[i]));

  // Construct scales and axes.
  const xScale = xType(xDomain, xRange);
  const yScale = yType(yDomain, yRange);
  const zScale = d3.scaleOrdinal(zDomain, colors);
  const xAxis = d3.axisBottom(xScale).ticks(width / 80).tickSizeOuter(0);
  const yAxis = d3.axisLeft(yScale).ticks(height / 60, yFormat);

  // Compute titles.
  const T = title === undefined ? Y : title === null ? null : d3.map(data, title);



  // Construct a line generator.
  const line = (I, axis) => d3.line()
      .defined(i => D[i])
      .curve(curve)
      .x(i => axis(X[i]))
      .y(i => yScale(Y[i]))(I);

  d3.select(div).select("svg").remove()

  const svg = d3.select(div)
      .append("svg")
      .attr("width", width)
      .attr("height", height)
      .attr("viewBox", [0, 0, width, height])
      .attr("style", "max-width: 100%; height: auto; height: intrinsic;overflow: visible")
      .style("-webkit-tap-highlight-color", "transparent")
      .on("pointerenter", pointerentered)
      .on("pointermove", pointermoved)
      .on("pointerleave", pointerleft)
      .on("touchstart", event => event.preventDefault());

  const legend = svg.append('g')
        .attr('font-family', 'sans-serif')

  // create one g for each entry in the color scale
  const cell = legend.selectAll('g')
  .data(zScale.domain())
  .join('g');

  const squareSize = 15;

  // add the colored square for each entry
  cell.append('rect')
      .attr('fill', d => zScale(d))
      .attr('width', squareSize)
      .attr('height', squareSize)

  // add the text label for each entry
  cell.append('text')
      .attr('dominant-baseline', 'middle')
      .attr('x', squareSize * 1.5)
      .attr('y', squareSize / 2 + 2)
      .text(d => d);

  // position the cells
  let xPosition = 0;

  cell.each(function(d, i) {
      d3.select(this)
          .attr('transform', `translate(${xPosition})`);
      
      xPosition += (this.getBBox().width + squareSize);
  });
    
  legend.attr('transform', (d, i) => `translate(${width - xPosition},0)`)

  let xaci = svg.append("g")
      .attr("transform", `translate(0,${height - marginBottom})`)
      .attr("class", "axis-x")
      .call(xAxis)
      .call(g => g.append("text")
          .attr("x", width - marginRight)
          .attr("y", 27)
          .attr("fill", "currentColor")
          .attr("text-anchor", "end")
          .text(xLabel));;

  svg.append("g")
      .attr("transform", `translate(${marginLeft},0)`)
      .call(yAxis)
      .call(g => g.select(".domain").remove())
      .call(g => g.append("text")
          .attr("x", -marginLeft)
          .attr("y", 10)
          .attr("fill", "currentColor")
          .attr("text-anchor", "start")
          .text(yLabel));

  const path = svg.append("g")
      .attr("fill", "none")
      .attr("stroke", typeof color === "string" ? color : null)
      .attr("stroke-linecap", strokeLinecap)
      .attr("stroke-linejoin", strokeLinejoin)
      .attr("stroke-width", strokeWidth)
      .attr("stroke-opacity", strokeOpacity)
      .selectAll("path")
      .data(d3.group(I, i => Z[i]))
      .join("path")
      .style("mix-blend-mode", mixBlendMode)
      .attr("stroke", ([i,]) => zScale(i))
      .attr("d", ([, I]) => line(I, xScale));

      const dot = svg.append("g")
      .attr("class", "focus")
      .attr("display", "none");

      dot.append("circle")
          .attr("r", 5);

      dot.append("rect")
          .attr("class", "tooltip-line")
          .attr("width", 100)
          .attr("height", Z[1] == undefined ? 50 : 70)
          .attr("x", -50)
          .attr("y", Z[1] == undefined ? -70 : -90)
          .attr("rx", 4)
          .attr("ry", 4)
      .attr("fill", "#fff")
      .attr("stroke", "#333");

      dot.append("text")
          .attr("class", "tooltip-date")
          .attr("x", -45)
          .attr("y", -50);

    dot.append("text")
          .attr("class", "tooltip-strata")
          .attr("x", -45)
          .attr("y", -70)
      .attr("font-weight", "bold");

    dot.append("text")
        .attr("x", -45)
        .attr("y", -30)
        .text("Total:");

    dot.append("text")
        .attr("class", "tooltip-count")
        .attr("x", 0)
        .attr("y", -30)
    .attr("font-weight", "bold");

    function pointermoved(event) {
      const [xm, ym] = d3.pointer(event);
      const i = d3.least(I, i => Math.hypot(xScale(X[i]) - xm, yScale(Y[i]) - ym)); // closest point
      path.style("stroke", ([z]) => Z[i] === z ? null : "#ddd").filter(([z]) => Z[i] === z).raise();
      dot.attr("transform", `translate(${xScale(X[i])},${yScale(Y[i])})`);
      dot.select(".tooltip-date").text(months[X[i].getMonth()] + ", " + X[i].getFullYear());
    dot.select(".tooltip-strata").text(Z[i]);
      dot.select(".tooltip-count").text(Y[i]);
      svg.property("value", O[i]).dispatch("input", {bubbles: true});
    }

    function pointerentered() {
      path.style("mix-blend-mode", null).style("stroke", "#ddd");
      dot.attr("display", null);
    }

    function pointerleft() {
      path.style("mix-blend-mode", "multiply").style("stroke", null);
      dot.attr("display", "none");
      svg.node().value = null;
      svg.dispatch("input", {bubbles: true});
    }

    // const handleZoom = (e) => {
    //   // d3.select("#kmc").selectAll("svg").attr("transform", e.transform)
    //   // xaxe.call(xAxis.scale(d3.event.transform.rescaleX(x)))
    //   // xaxe.call(xAxis, xz)
    //   xaci.call(xAxis.scale(e.transform.rescaleX(xScale)));
    //   path.attr("d", line(I, e.transform.rescaleX(xScale)))
    // };

    // const zoom = d3.zoom()
    //     .scaleExtent([1, 32])
    //     .extent([[marginLeft, 0], [width - marginRight, height]])
    //     .translateExtent([[marginLeft, -Infinity], [width - marginRight, Infinity]])
    //     .on('zoom', handleZoom);

    // d3.select(div).selectAll("svg").call(zoom)
    
    return Object.assign(svg.node(), { value: null });
}