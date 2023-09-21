async function draw(el) {
    // Data
    const dataset = await d3.json('data.json')

    // Dimensions
    let dimensions = {
        width: 600,
        height: 150,
    };

    const box = 30;

    // Draw Image
    const svg = d3.select(el)
        .append("svg")
        .attr("width", dimensions.width)
        .attr("height", dimensions.height)
    
    // Rectangles
    svg.append('g')
        .attr('fill', '#ddd')
        .selectAll('rect')
        .data(dataset)
        .join('rect')
        .attr('width', box-1)
        .attr('height', box-1)
        .attr('x', (d,i)=> box*(i%20))
        .attr('y', (d,i)=> box*((i/20) | 0))
}

draw('#heatmap1')