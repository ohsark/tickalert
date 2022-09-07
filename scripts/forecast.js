function populatepage(region) {

    lgadata = regiondata.filter(l => {
        if(l.lga == region) {
            console.log(l.lga)
            return l
        }
    })[0]
    console.log(lgadata)

    $("#regionselectheader").text(lgadata.region + " | " + lgadata.lga)

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
        width: getdim("#thresholdcont").width,
        height: getdim("#thresholdcont").height - 90,
        color: "#4e79a7"
    })
    
    forecast({forecast: lgadata["forecast"][0], date: lgadata["horizon"], fit: lgadata["forecastPoints"]}, {
        x : "date",
        y : "forecast",
        width: getdim("#forecastcont").width,
        height: getdim("#forecastcont").height*0.55,
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
        width: getdim("#forecastcont").width,
        height: getdim("#forecastcont").height*0.25,
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
            width: getdim("#forecastcont").width,
            height: getdim("#forecastcont").height*0.55,
            color: "#4e79a7",
            div: "#forecastspread",
            forecastdate: new Date("2022-01-01"),
            forecast: true
        })
    
        forecastanomalies({forecast: lgadata["anomalies"], date: lgadata["horizon"]}, {
            x : "date",
            y : "forecast",
            width: getdim("#forecastcont").width,
            height: getdim("#forecastcont").height*0.25 ,
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
            width: getdim("#forecastcont").width,
            height: getdim("#forecastcont").height*0.55,
            color: "#4e79a7",
            div: "#forecastspread",
            forecastdate: new Date("2022-01-01"),
            
        })
    
        forecastanomalies({forecast: lgadata["anomalies"], date: lgadata["horizon"]}, {
            x : "date",
            y : "forecast",
            width: getdim("#forecastcont").width,
            height: getdim("#forecastcont").height*0.25,
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
        width: getdim("#thresholdcont").width,
        height: getdim("#thresholdcont").height - 90,
        color: "#4e79a7"
    })
})