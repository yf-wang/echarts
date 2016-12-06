define(function(require) {
    var $ = require('jquery');
    var echarts = require('echarts');
    var chart = require('chart');

    function init() {
        var options = {
            tooltip: {
                trigger: 'item'
            },
            radar: {
                indicator: [
                   {name: '家庭情况', min: -9, max: 91},
                   {name: '偿债能力', min: -10, max: 152},
                   {name: '盈利能力', min: 61, max: 211},
                   {name: '信用记录', min: -4, max: 207},
                   {name: '稳定程度', min: -3, max: 87},
                ]
            },
            series: [{
                data: [{
                    value: [67, 77, 90, 89, 66],
                    name: '我的农信分',
                }],
                label: {
                    emphasis: {
                        show: true,
                        position: [2, 0]
                    }
                }
            }]
        };
        
        chart.radar('#graph', options);
    }

    return{
        init: init
    };
});