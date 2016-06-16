define(function (require) {
    var common = require('common');
    var $ = require('jquery');
    var echarts = require('echarts');
    var urlmap = require('urlmap');

    var bar = function(url, elem, options){
        var promise = $.getJSON(url, function (data) {
            if (data.status !== 0) {
                return;
            }

            var rstArr = data.data.list;
            var typeBar = {
                type: 'bar'
            };
            var typeLine = {
                type: 'line',
                yAxisIndex: 1
            };
            var option = {
                tooltip: {
                    trigger: 'axis'
                },
                xAxis: {
                    type: 'category',
                    data: data.data.month || [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
                    splitLine: {show: false}
                },
                yAxis: {
                    type: 'value'
                },
                series: rstArr = $.map(rstArr, function (item, i) {
                    if(item.name == '环比增长率' || item.name == '同比增长率') {
                        return $.extend(true, item, typeLine);
                    } else {
                        return $.extend(true, item, typeBar);
                    }
                }),
                grid: {x: 70, y: 35, x2: 35, y2: 35},
                backgroundColor: '#F9F9F9',
                color: common.color
            };
            
            var chart = echarts.init($(elem)[0]);
            chart.setOption($.extend(true, option, options));
        });
        promise.fail(function () {
            $(elem).html('系统异常');
        });
    };

    return {
        bar : bar
    };
});