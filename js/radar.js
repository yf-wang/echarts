define(function(require) {
    var $ = require('jquery');
    var echarts = require('echarts');

    var radar = function(elem, options) {
        var option = {
            radar: {
                splitArea: {
                    areaStyle: {
                        color: '#FFFFFF',
                    }
                }
            },
            series: [{
                type: 'radar',
                itemStyle: {normal: {areaStyle: {opacity: 1, color: '#3366FF'}}},
                data: [{
                    symbolSize: 1,
                    label: {
                        normal: {
                            show: true,
                            position: 'inside',
                            textStyle: {color: '#696969', fontWeight: 'normal', fontSize: 14}
                        }
                    },
                    lineStyle: {    
                        normal: {
                            opacity: 0
                        }
                    }                   
                }]
            }]
        };

        var chart = echarts.init($(elem)[0]);
        chart.setOption($.extend(true, option, options));
    };
    return{
        radar: radar
    };
});