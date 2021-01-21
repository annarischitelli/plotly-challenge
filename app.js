// 1. Use D3 to read in samples.json
function chartData(id){
    d3.json("samples.json").then((data) => {
        var sampleData = data.samples.filter(s => s.id === id)[0];
        console.log(sampleData);
        // Pull out top 10 sample values 
        var sampleValues = sampleData.sample_values.slice(0, 10).reverse();
        console.log(sampleValues);
        // Pull out top 10 OTUs found in individuals
        var otu = sampleData.otu_ids.slice(0, 10).reverse();
        console.log(otu);
        // Map otu_ids to OTU for reference later
        var otuIDs = otu.map(data => "OTU" + data)
        var otu_labels = sampleData.otu_labels.slice(0,10).reverse();
        console.log(otu_labels)

// 2. Create a horizontal bar chart with a dropdown menu to display the top 10 OTUs found in that individual.
    // 2a. Use sample_values as the values for the bar chart.
    // 2b. Use otu_ids as the labels for the bar chart.
    // 2c. Use otu_labels as the hovertext for the chart.
        var barChart = {
            x: sampleValues,
            y: otuIDs,
            text: otu_labels,
            type: "bar",
            orientation: "h"
        };
        
        var layout = {
            title: "Top 10 OTUs found in individuals",
            xaxis: {title: "Sample Values"},
            yaxis: {title: "OTU ID"},
            margin: {
                left: 125,
                right: 125,
                top: 125,
                bottom: 125,
            }
        };

        var data = [barChart];
        Plotly.newPlot("bar", data, layout);

// 3. Create a bubble chart that displays each sample.
    // 3a. Use otu_ids for the x values.
    // 3b. Use sample_values for the y values.
    // 3c. Use sample_values for the marker size.
    // 3d. Use otu_ids for the marker colors.
    // 3e. Use otu_labels for the text values.
        var bubbleChart = {
            x: sampleData.otu_ids,
            y: sampleData.sample_values,
            marker: {
                color: sampleData.otu_ids,
                size: sampleData.sample_values
            },
            mode: "markers",
            text: sampleData.otu_labels
        }

        var layout = {
            xaxis: {title: "OTU IDs"},
            height: 500,
            width: 1200
        }

        var data2 = [bubbleChart]
        Plotly.newPlot("bubble", data2, layout)
    })
};

// 4. Display the sample metadata, i.e., an individual's demographic information.
function sampleMetadata(id){
    d3.json("samples.json").then((data) => {
        var metadata = data.metadata;
        console.log(metadata);
        var demoInfo = metadata.filter(row => row.id.toString()=== id)[0];
        console.log(demoInfo);
        var demoFinal = d3.select("#sample-metadata");
        demoFinal.html("");
        // My group helped me with the following lines of code because I was SO stuck.
        Object.entries(demoInfo).forEach((key) => {
            demoFinal.append("h5").text(key[0] + ": " + key[1] + "\n");
        });
    });
}

// 5. Display each key-value pair from the metadata JSON object somewhere on the page.
function dropdownChange(id) {
    chartData(id)
    sampleMetadata(id)
}

// 6. Update all of the plots any time that a new sample is selected.
// 6a. Call functions to create webpage
function run() {
    var dropdownMenu = d3.selectAll("#selDataset");
    d3.json("samples.json").then ((data) => {
        data.names.forEach(function (name){
            dropdownMenu.append("option").text(name).property("value");
            console.log(data.names[0]);
        });
        chartData(data.names[0]);
        sampleMetadata (data.names[0]);
    })
}
run()


// Attempt at gauge
function gauge (id){
    var gaugeData = d3.selectAll("#gauge");
    var data = [
        {
            domain: { x: [0, 1], y: [0, 1] },
            value: 10,
            title: { text: "Speed" },
            type: "indicator",
            mode: "gauge+number"
        }
    ];
    
    var layout = { width: 600, height: 500, margin: { t: 0, b: 0 } };
    Plotly.newPlot('myDiv', data, layout);
}
    