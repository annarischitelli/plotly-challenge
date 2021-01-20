// 1. Use D3 to read in samples.json
function chartData(id){
    d3.json("samples.json").then((data) => {
        var sampleData = data.samples.filter(samples => samples.id === id)[0];
        console.log(sampleData)
        var sampleValue = sample.sample_values.slice(0.10).reverse();
        console.log(sampleValue);
        
    
    })

};
// 2. Create a horizontal bar chart with a dropdown menu to display the top 10 OTUs found in that individual.
    // 2a. Use sample_values as the values for the bar chart.
    // 2b. Use otu_ids as the labels for the bar chart.
    // 2c. Use otu_labels as the hovertext for the chart.


// 3. Create a bubble chart that displays each sample.
    // 3a. Use otu_ids for the x values.
    // 3b. Use sample_values for the y values.
    // 3c. Use sample_values for the marker size.
    // 3d. Use otu_ids for the marker colors.
    // 3e. Use otu_labels for the text values.


// 4. Display the sample metadata, i.e., an individual's demographic information.


// 5. Display each key-value pair from the metadata JSON object somewhere on the page.


// 6. Update all of the plots any time that a new sample is selected.