define(function(require) {
    var echarts = require('echarts');

    var pie = function() {
        var option = {
            //tooltip: {show: false},
            legend: {
                orient: 'vertical',
                left: 200,
                itemGap: 1,
                data: ['农资经销商', '种植户', '养殖户', '种植兼养殖户']
                //data: categoryData
            },
            series: [{
                name: '经营类别',
                type: 'pie',
                radius: ['50%', '70%'],
                center: ['42%', '60%'],
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
                //data: dataData
                data: [
                   {value: 335, name: '农资经销商'},
                   {value: 310, name: '种植户'},
                   {value: 234, name: '养殖户'},
                   {value: 135, name: '种植兼养殖户'}
                ]
            }],
            color: ['#1f77b4', '#ff7f0e', '#2ca02c', '#d62728', '#9467bd', '#8c564b', '#e377c2', '#7f7f7f', '#bcbd22', '#17becf']
        };

        var chart = echarts.init(document.getElementById('graph'));
        chart.setOption(option);
    };
    return{
        pie: pie
    };
});