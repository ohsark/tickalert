function populatepage(region) {

    lgadata = regiondata.filter(l => {
        if(l.lga == region) {
            console.log(l.lga)
            return l
        }
    })[0]
    console.log(lgadata)

    $("#regionselectheader").text(lgadata.region)
    $("#regionselectlga").text(lgadata.lga)

    d3.select("#percentageworse").select("svg").remove()
    d3.select("#forecastspread").select("svg").remove()
    d3.select("#forecastanomalies").select("svg").remove()
    d3.select("#thresholdprobability").select("svg").remove()


    // gauge("#gauge", 300, {value: Math.round(data[selected]["gauge"] * 100)})
    percentageworse({x:[1,2,3,4,5,6,7], y:[0,0.75,3,7,3,0.75,0]}, {
        x: "x",
        y: "y",
        width: getdim("#percentageworsecont").width,
        height: getdim("#percentageworsecont").height - 20,
        percentage: String(lgadata["gauge"] * 100) + "%",
        color: "#4e79a7"  
    })

    // console.log(lgadata)

    if(lgadata["gauge"] < 0.4) {
        $("#increasechance").text(String(Math.round(lgadata["gauge"] * 100)) + "%").css("color", "#4e79a7")
    } else if (lgadata["gauge"] > 0.4 && lgadata["gauge"] < 0.7) {
        $("#increasechance").text(String(Math.round(lgadata["gauge"] * 100)) + "%").css("color", "#f28e2c")
    } else {
        $("#increasechance").text(String(Math.round(lgadata["gauge"] * 100)) + "%").css("color", "#e15759")
    }
    
    $("#thresholdheading").text("3 or more cases?")
    thresholds({probs: lgadata["thresholds"][0], date: lgadata["months"]}, {
        x: "date",
        y: "probs",
        yFormat: "%",
        yLabel: "↑ Probability",
        // width: getdim("#thresholdcont").width,
        // height: getdim("#thresholdcont").height - 90,
        width: getdim("#thresholdprobability").width,
        height: getdim("#thresholdprobability").width *0.3,
        color: "#4e79a7"
    })
    
    forecast({forecast: lgadata["forecast"][0], date: lgadata["horizon"], fit: lgadata["forecastPoints"]}, {
        x : "date",
        y : "forecast",
        width: getdim("#forecastspread").width,
        height: getdim("#forecastspread").width*0.5,
        color: "#4e79a7",
        div: "#forecastspread",
        forecastdate: new Date("2022-01-01")
    })

    // forecasttrend({trend: lgadata["trends"], date: lgadata["horizon"]}, {
    //     x : "date",
    //     y : "trend",
    //     yLabel: "↑ Monthly Total",
    //     width: getdim("#forecasttrendcont").width,
    //     height: getdim("#forecasttrendcont").height - 0,
    //     color: "#4e79a7",
    //     div: "#forecasttrend",
    //     forecastdate: new Date("2022-01-01")
    // })

    forecastanomalies({forecast: lgadata["anomalies"], date: lgadata["horizon"]}, {
        x : "date",
        y : "forecast",
        width: getdim("#forecastanomalies").width,
        height: getdim("#forecastanomalies").width*0.2,
        color: "#4e79a7",
        div: "#forecastanomalies",
        forecastdate: new Date("2022-01-01")
    })

}

$("body").on("click", "div[aria-labelledby='region-selector'] a", e => {
    
    populatepage(e.target.dataset.lga)
})

$("input[id='inclforecast']").change(e => {
    let include = $(e.target).prop('checked')

    d3.select("#forecastspread").select("svg").remove()
    d3.select("#forecastanomalies").select("svg").remove()
    
    if(include) {
        forecast({forecast: lgadata["forecast"][0], date: lgadata["horizon"], fit: lgadata["forecastPoints"]}, {
            x : "date",
            y : "forecast",
            yLabel: "↑ Total",
            width: getdim("#forecastspread").width,
            height: getdim("#forecastspread").width*0.5,
            color: "#4e79a7",
            div: "#forecastspread",
            forecastdate: new Date("2022-01-01"),
            forecast: true
        })
    
        forecastanomalies({forecast: lgadata["anomalies"], date: lgadata["horizon"]}, {
            x : "date",
            y : "forecast",
            width: getdim("#forecastanomalies").width,
            height: getdim("#forecastanomalies").width*0.2 ,
            color: "#4e79a7",
            div: "#forecastanomalies",
            forecastdate: new Date("2022-01-01"),
            forecast: true
        })
    } else {
        forecast({forecast: lgadata["forecast"][0], date: lgadata["horizon"], fit: lgadata["forecastPoints"]}, {
            x : "date",
            y : "forecast",
            yLabel: "↑ Total",
            width: getdim("#forecastspread").width ,
            height: getdim("#forecastspread").width*0.5,
            color: "#4e79a7",
            div: "#forecastspread",
            forecastdate: new Date("2022-01-01"),
            
        })
    
        forecastanomalies({forecast: lgadata["anomalies"], date: lgadata["horizon"]}, {
            x : "date",
            y : "forecast",
            // width: getdim("#forecastspread").width - 60,
            // height: getdim("#forecastspread").height*0.25,
            width: getdim("#forecastanomalies").width,
            height: getdim("#forecastanomalies").width*0.2,
            color: "#4e79a7",
            div: "#forecastanomalies",
            forecastdate: new Date("2022-01-01"),
        })
    }
})

$("input[name='threshold']").change(e => {
    threshold = $(e.target).attr('id')
    let selection = 0

    switch(threshold) {
        case "thresholdone":
            $("#thresholdheading").text("3 or more cases?")
            selection = 0
            break;
        case "thresholdtwo":
            $("#thresholdheading").text("6 or more cases?")
            selection = 1
            break;
        case "thresholdthree":
            $("#thresholdheading").text("9 or more cases?")
            selection = 2
            break;
        case "thresholdfour":
            $("#thresholdheading").text("12 or more cases?")
            selection = 3
            break;
        default:
            selection = 0
    }

    d3.select("#thresholdprobability").select("svg").remove()
    // console.log(selection)
    thresholds({probs: lgadata["thresholds"][selection], date: lgadata["months"]}, {
        x: "date",
        y: "probs",
        yFormat: "%",
        yLabel: "↑ Frequency",
        // width: getdim("#thresholdcont").width,
        // height: getdim("#thresholdcont").height - 90,
        width: getdim("#thresholdprobability").width,
        height: getdim("#thresholdprobability").width*0.3,
        color: "#4e79a7"
    })
})

fetch('./data/lga_totals.json')
    .then(response => response.json())
    .then(data => {
        lga_totals = data
        lgas = data.map(i => i.LGACode)
        console.log(lgas)
        fetch('./data/lga_map.geojson')
            .then(response => response.json())
            .then(data => {
                data = data.features.map(lga => {
                    if(lgas.includes(lga.properties.LGA_CODE20)) {
                        lga.properties.total = lga_totals.filter(i => i.LGACode == lga.properties.LGA_CODE20)[0].total
                    } else {
                        lga.properties.total = NaN
                    }
                    return lga
                })
                let getColor = v => {
                    return  v > 1000 ? '#800026' :
                            v > 500  ? '#BD0026' :
                            v > 200  ? '#E31A1C' :
                            v > 100  ? '#FC4E2A' :
                            v > 50   ? '#FD8D3C' :
                            v > 20   ? '#FEB24C' :
                            v > 10   ? '#FED976' :
                                        '#FFEDA0';
                }

                let maxTotal = Math.max(...lga_totals.map(i => i.total))
                console.log(maxTotal)
                let map = L.map('map').setView([147.0967,-36.0406 ], 13),
                vector = L.geoJson(data, {
                    onEachFeature: (feature, layer) => {
                        let style;

                        
                        let zoomToFeature = (e) => {
                            // $("#map").css('width', '60%')
                            map.fitBounds(e.target.getBounds());
                            populatepage(e.target.feature.properties.LGA_CODE20)
                            $("#regionselectheader").text(e.target.feature.properties.LGA_NAME20)
                            $("#regionselectlga").text(e.target.feature.properties.LGA_CODE20)
                        }

                        let highlightFeature = (e) => {
                            let layer = e.target;

                            layer.setStyle({
                                weight: 3,
                                color: '#777',
                                dashArray: '',
                                fillOpacity: 0.7
                            });
                            
                            layer.bindTooltip("<div><b>" + feature.properties.LGA_NAME20 + "</b><div>Total:<b>" + feature.properties.total + "</b></div></div>").openTooltip()

                            if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
                                layer.bringToFront();
                            }

                        }

                        let resetHighlight = (e) => {
                            let layer = e.target;
                            layer.closeTooltip()
                            layer.setStyle({
                                fillColor: feature.properties.total ? getColor(feature.properties.total) : "#fff",
                                color: "#ccc",
                                weight: 1,
                                fillOpacity: 1
                            });
                            // data.resetStyle(layer)
                                
                        }         

                        if(feature.properties.total)  {
                            style = {
                                // fillColor: "rgba(0, 0, 200, " + (feature.properties.total/maxTotal).toFixed(2)  + ")",
                                // color: "rgba(0, 0, 200, " + (feature.properties.total/maxTotal).toFixed(2)  + ")"
                                fillColor: getColor(feature.properties.total),
                                // color: getColor(feature.properties.total),
                                weight: 1
                            }
                        } else {
                            style = {
                                fillColor: "#fff",
                                color: "#ccc",
                                // dashArray: "5",                                   
                            }
                        }
                        layer.setStyle(style)
                        layer.on({
                            mouseover: highlightFeature,
                            mouseout: resetHighlight,
                            click: zoomToFeature
                        });

                        
                    },
                    style: {
                        // color: "#EC5858",
                        color: "#ccc",
                        weight: 1,
                        // fillColor: "#fff",
                        fillColor: "#fff",
                        fillOpacity: 1
                    }
                }).addTo(map); 

                // let legend = L.control({position: 'bottomleft'});

                // legend.onAdd = function (map) {

                //     var div = L.DomUtil.create('div', 'info legend'),
                //         grades = [0, 10, 20, 50, 100, 200, 500, 1000],
                //         labels = [];
                
                //     div.innerHTML +=
                //         '<i style="background-color:#fff"></i> ' +
                //         'Data Not Available <br>';

                //     // loop through our density intervals and generate a label with a colored square for each interval
                //     for (var i = 0; i < grades.length; i++) {
                //         div.innerHTML +=
                //             '<i style="background-color:' + getColor(grades[i] + 1) + '"></i> ' +
                //             grades[i] + (grades[i + 1] ? '&ndash;' + grades[i + 1] + '<br>' : '+' );
                //     }
                    
                //     return div;
                // };

                // legend.addTo(map);

                let myIcon = L.icon({
                    iconUrl: './img/placemarker.png',
                    iconSize: [25, 25],
                    
                });

                L.marker([-33.8688, 151.2093], {
                    icon: myIcon,
                    riseOnHover: true,
                    title: "Sydney"
                }).addTo(map)
                L.marker([-27.4705, 153.0260], {
                    icon: myIcon,
                    riseOnHover: true,
                    title: "Brisbane"
                }).addTo(map)
                L.marker([-28.0167, 153.4000], {
                    icon: myIcon,
                    riseOnHover: true,
                    title: "Gold Coast"
                }).addTo(map)
                L.marker([-37.8136, 144.9631], {
                    icon: myIcon,
                    riseOnHover: true,
                    title: "Melbourne"
                }).addTo(map)
                L.marker([-16.9203, 145.7710], {
                    icon: myIcon,
                    riseOnHover: true,
                    title: "Cairns"
                }).addTo(map)
                L.marker([-31.9523, 115.8613], {
                    icon: myIcon,
                    riseOnHover: true,
                    title: "Perth"
                }).addTo(map)
                L.marker([-32.9283, 151.7817], {
                    icon: myIcon,
                    riseOnHover: true,
                    title: "Newcastle"
                }).addTo(map)
            
                map.fitBounds(vector.getBounds());
                // vector.bindPopup(function (layer) {
                //     return layer.feature.properties.description;
                // }) 
            })
            .catch(error => console.log(error));
    })
