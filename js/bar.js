define(function(require) {
    var $ = require('jquery');
    var echarts = require('echarts');

    var bar = function(elem, options) {
        var option = {
            tooltip: {
                trigger: 'axis',
            },
            xAxis: {},
            yAxis: {},
            series: [{
                type: 'bar',
                label: {
                    normal: {
                        show: true,
                        position: 'top'
                    }
                },
                itemStyle: {
                    normal: {
                        color: '#4B9AEB'
                    }
                }
            }],
            grid: {x: 42, y: 18, x2: 15, y2: 20}
        };

        var chart = echarts.init(document.querySelector(elem));
        chart.setOption($.extend(true, option, options));
    };

    return{
        bar: bar
    };
});