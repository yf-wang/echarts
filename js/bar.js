define(function (require) {
    var common = require('common');
    var $ = require('jquery');
    var echarts = require('echarts');
    var chart = require('chart');
    var urlmap = require('urlmap');

    function init() {
        var options1 = {
            xAxis: {
                name: '月',
                axisLabel: {
                    show: false
                }
            },
            yAxis: {
                name: '订单总额',
            }
        };
        chart.bar(urlmap['bar'], '#graph_bar', options1);
        
        var options2 = {
            yAxis: [
                { 
                    type: 'value'
                },
                {
                    type: 'value',
                    axisLabel: {
                        formatter: '{value}%'
                    },
                    splitLine: {show: false}
                }
            ],
            series: [{
                type: 'bar',
                label: {
                    normal: {
                        show: true,
                        position: 'top'
                    }
                },
                /*itemStyle: {
                    normal: {
                        color: '#4B9AEB'
                    }
                }*/
            }],
            grid: {x: 70, y: 35, x2: 50, y2: 35}
        };
        chart.bar(urlmap['bar_line'], '#graph_bar_line', options2);
    }

    return {
        init: init
    };
});