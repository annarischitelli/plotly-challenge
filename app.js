// 1. Use D3 to read in samples.json
function chartData(id){
    d3.json("samples.json").then((data) => {
        var sample = data.samples.filter(s => s.id === id)[0];
        console.log(sample);
        // Pull out top 10 sample values 
        var sampleValues = sample.sample_values.slice(0, 10).reverse();
        console.log(sampleValues);
        // Pull out top 10 OTUs found in individuals
        var otu = sample.otu_ids.slice(0, 10).reverse();
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
            tile: "Top 10 OTUs found in individuals"
            margin: {
                l: 125,
                r: 125,
                t: 125,
                b: 125,
            }
        };

        var data = [barChart];
        plotly.newPlot("bar", data, layout);

// 3. Create a bubble chart that displays each sample.
    // 3a. Use otu_ids for the x values.
    // 3b. Use sample_values for the y values.
    // 3c. Use sample_values for the marker size.
    // 3d. Use otu_ids for the marker colors.
    // 3e. Use otu_labels for the text values.

    });

};






// 4. Display the sample metadata, i.e., an individual's demographic information.


// 5. Display each key-value pair from the metadata JSON object somewhere on the page.


// 6. Update all of the plots any time that a new sample is selected.