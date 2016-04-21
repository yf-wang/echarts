define(function(require) {
    var echarts = require('echarts');

    var radar = function() {
        var option = {
            tooltip: {},
            radar: {
                indicator: [
                   {name: '家庭情况', min: -9, max: 91},
                   {name: '偿债能力', min: -10, max: 152},
                   {name: '盈利能力', min: 61, max: 211},
                   {name: '信用记录', min: -4, max: 207},
                   {name: '稳定程度', min: -3, max: 87},
                ],
                splitArea: {
                    areaStyle: {
                        color: '#FFFFFF',
                    }
                }
            },
            series: [{
                name: '',
                type: 'radar',
                itemStyle: {normal: {areaStyle: {opacity: 1, color: '#3366FF'}}},
                data: [{
                    value: [67, 77, 90, 89, 66],
                    name: '我的农信分',
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

        var chart = echarts.init(document.getElementById('graph'));
        chart.setOption(option);
    };
    return{
        radar: radar
    };
});