define(function(require) {
    var echarts = require('echarts');

    var bar = function() {
        var option = {
            tooltip: {
                trigger: 'axis',
                // formatter: function (params) {
                //     if (params[0].value === '-') {
                //         return params[0].name + '<br/>无此月数据';
                //     } else {
                //         return params[0].name + '<br/>新增客户: ' + params[0].value + '个';
                //     }
                // }
                formatter: '{b}<br/>新增客户:{c}个'
            },
            xAxis: {
                data: ['2015/12', '2015/11', '2015/10', '2015/09', '2015/08', '2015/07', '2015/06', '2015/05', '2015/04', '2015/03', '2015/02', '2015/01']
            },
            yAxis: {},
            series: [{
                name: '新增客户',
                type: 'bar',
                data: [65, 56, 16, 11, 17, 9000, 66, 50, 30, 0, 21, 11],
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

        var chart = echarts.init(document.getElementById('graph'));
        chart.setOption(option);
    };

    return{
        bar: bar
    };
});