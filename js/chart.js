define(function (require) {
    var common = require('common');
    var $ = require('jquery');
    var echarts = require('echarts');

    /**
     * @param  {url}      图表数据请求地址
     * @param  {elem}     图表容器
     * @param  {options}  echarts配置项
     */
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

    /**
     * @param  {url}      图表数据请求地址
     * @param  {elem}     图表容器
     * @param  {options}  echarts配置项
     * @param  {setting}  series数据配置项
     */
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
                    type: 'value',
                    minInterval: 1
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

    /**
     * @param  {url}      图表数据请求地址
     * @param  {elem}     图表容器
     * @param  {options}  echarts配置项
     */
    var pie = function(url, elem, options){
        var promise = $.getJSON(url, function (data) {
            if (data.status !== 0) {
                return;
            }
            var option = {
                legend: {
                    orient: 'vertical',
                    right: 20,
                    top: 10,
                    itemWidth: 10,
                    itemHeight: 10,
                    itemGap: 1,
                    data: data.data.list
                },
                tooltip: {
                    trigger: 'item',
                    formatter: "{b} : {c} ({d}%)"
                },
                series: [{
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

    /**
     * @param  {elem}     图表容器
     * @param  {options}  echarts配置项
     */
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
        };

        var chart = echarts.init($(elem)[0]);
        chart.setOption($.extend(true, option, options));
    };

    return {
        bar: bar,
        line: line,
        pie : pie,
        radar: radar
    };
});