define(function (require) {
    var common = require('common');
    var $ = require('jquery');
    var echarts = require('echarts');
    var urlmap = require('urlmap');

    var pie = function(url, elem, options){
        var promise = $.getJSON(url, function (data) {
            if (data.status !== 0) {
                return;
            }
            var option = {
                tooltip : {
                    trigger: 'item',
                    formatter: "{b} : {c} ({d}%)"
                },
                series : [{
                    type: 'pie',
                    radius : '68%',
                    center: ['50%', '48%'],
                    data: data.data.list,
                    itemStyle: {
                        emphasis: {
                            shadowBlur: 10,
                            shadowOffsetX: 0,
                            shadowColor: 'rgba(0, 0, 0, 0.5)'
                        }
                    }
                }],
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
        pie : pie
    };
});