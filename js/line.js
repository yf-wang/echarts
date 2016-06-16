define(function(require) {
    var common = require('common');
    var $ = require('jquery');
    var echarts = require('echarts');

    var line = function(url, elem, options, setting){
        var promise = $.getJSON(url, function (data) {
            if (data.status !== 0) {
                return;
            }

            var rstArr = data.data.list;
            var option = {
                tooltip: {
                    trigger: 'axis'
                },
                grid: {
                    left: '3%',
                    right: '4%',
                    bottom: '3%',
                    containLabel: true,
                    backgroundColor: '#F9F9F9'
                },
                xAxis: {
                    type: 'category',
                    data: data.data.month,
                    splitLine: {show: false}
                },
                yAxis: {
                    type: 'value'
                },
                series: rstArr = $.map(rstArr, function (item, i) {
                    return $.extend(true, item, $.extend(true, {type: 'line'}, setting));
                }),
                color: common.color
            };

            var chart = echarts.init($(elem)[0]);
            chart.setOption($.extend(true, option, options));
        });
        promise.fail(function () {
            $(elem).html('系统异常');
        });
    };
    return{
        line: line
    };
});