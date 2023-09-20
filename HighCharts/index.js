document.addEventListener('DOMContentLoaded', () => {
    Highcharts.chart('container', {
        chart: {
            // type: "bar",
            // type: "column",
            type: "areaspline",
            zoomType: "xy"
        },
        credits: {
            // enabled: false
            text: "google",
            href: "www.google.com",
            position: {
                align: "left",
                x: 20
            },
            style: {
                color: 'red',
                fontSize: '15px'
            }

        },
        // tooltip:{
        //   animation: false,
        //   backgroundColor:'#333',
        //   borderColor: 'red',
        //   borderWidth:2,
        //   borderRadius:4,
        //   followPointer:false,
        //   style:{
        //     color:'#fff'
        //   }
        // },
        tooltip: {
            backgroundColor:'#333',
            borderColor: 'red',
            borderWidth:2,
            borderRadius:4,
            style:{
                color:'#fff'
            },
            formatter(){
                // return `<b>X value</b> : ${this.x}. <em>Y value</em> : ${this.y}`
                let s = `<b>X value</b> : ${this.x}`;
                this.points.forEach(function(point){
                    s += `<br>Y is ${point.y}`;

                });
                return s;
            },
            shared: true

        },

        title: {
            text: "FRUITS CHART"
        },
        yAxis: {
            alternateGridColor:"#FEF",
            title: {
                text: "Fruits Eaten"
            }
        },
        xAxis: {
            title: {
                text: "Fruits"
            },
            categories: ["Apples", "Oranges", "Mangoes"]
        },
        series: [
            {
                negativeColor:'red',
                name: 'John',
                data: [1, -2, 3]

            },
            {
                negativeColor:'red',
                name: 'Jill',
                data: [4, 1, -1]

            },
        ],
        colors: ["#121212", "#ABABAB"],

    })
})