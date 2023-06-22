// start of app.js file
// check to see the connection between app.js and index.html
console.log("Test for connection..good")

/*
1. Use the D3 library to read in samples.json from the URL https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json.
const roadster = "https://api.spacexdata.com/v3/roadster";

// Fetch the JSON data and console log it
d3.json(roadster).then(function(data) {
  console.log(data);
});
*/

// create variable to store samples.json endpoint stored on Amazon server s3
const sample_data = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json"

// Fetch the JSON data and console log it
d3.json(sample_data).then(function(data) {
    // console.log("This is sample data");
    // console.log(data);

// Note Data is not available below this point
});


/*
2. Create a horizontal bar chart with a dropdown menu to display the top 10 OTUs found in that individual.

    Use sample_values as the values for the bar chart.

    Use otu_ids as the labels for the bar chart.

    Use otu_labels as the hovertext for the chart.

 */

/*
3. Create a bubble chart that displays each sample.

    Use otu_ids for the x values.

    Use sample_values for the y values.

    Use sample_values for the marker size.

    Use otu_ids for the marker colors.

    Use otu_labels for the text values.
*/
function buildcharts(sample) {
  console.log("testing buildcharts function");
  d3.json(sample_data).then(function(data) {
    console.log("This is sample data");
    console.log(data);

    // to build the barchart need the samples object
    let samples = data.samples
    // view in console
    console.log(samples);

    // filter samples for the given sample (i.e. 940)
    let sampleArray = samples.filter(sampleobject => sampleobject.id ==sample);
    // view sampleArray
    console.log(sampleArray);

    // unpack the object from within the array
    let sampleResult = sampleArray[0];
    console.log(sampleResult);

    // create variables
    let sample_values = sampleResult.sample_values;
    console.log(sample_values);

    let otu_ids = sampleResult.otu_ids;
    console.log(otu_ids);

    let otu_labels = sampleResult.otu_labels;
    console.log(otu_labels);

    // Build Bubblechart

       // Use otu_ids for the x values.

       // Use sample_values for the y values.

       // Use sample_values for the marker size.

      // Use otu_ids for the marker colors.

     // Use otu_labels for the text values.
    // create trace
    let traceBubble = {
        x: otu_ids,
        y: sample_values,
        mode: 'markers',
        marker: {
          size: sample_values,
          color: otu_ids,
          colorscale: 'Y1GnBu'
        }
    }

    let dataBubble = [traceBubble];

    let layoutBubble = {
      title: "Bacteria in Sample",
      showlegend: false,
      xaxis: {title: "OTU ID"},
      yaxis: {title: "Sample Values"}

    }

    // build bubble chart in <div id="bubble"></div>
    Plotly.newPlot('bubble', dataBubble, layoutBubble ); 

// Note Data is not available below this point
});

};

    

























// create an initial function called initialize
function initialize() {


     // call buildcharts function
     buildcharts(940);

};

initialize();


    