define(function(require) {
    var common = require('common');
    var $ = require('jquery');
    var echarts = require('echarts');

    var line = function(elem, options) {
        var option = {
            tooltip: {
                trigger: 'axis'
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            xAxis: {
                boundaryGap: false
            },
            color: common.color
        };

        var chart = echarts.init($(elem)[0]);
        chart.setOption($.extend(true, option, options));
    };
    return{
        line: line
    };
});