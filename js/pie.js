define(function(require) {
    var $ = require('jquery');
    var echarts = require('echarts');

    var pie = function(elem, options) {
        var option = {
            legend: {
                orient: 'vertical',
                itemWidth: 10,
                itemHeight: 10,
                itemGap: 1,
            },
            series: [{
                type: 'pie',
                avoidLabelOverlap: false,
                label: {
                    normal: {
                        show: false,
                        position: 'center'
                    },
                    emphasis: {
                        show: true,
                        formatter: '{d}%\n{b}',
                        textStyle: {fontSize: '15'}
                    }
                },
                labelLine: {
                    normal: {
                        show: false
                    }
                },
            }],
            color: color
        };

        var chart = echarts.init(document.querySelector(elem));
        chart.setOption($.extend(true, option, options));
    };
    return{
        pie: pie
    };
});