define(function (require) {
    var common = require('common');
    var $ = require('jquery');
    var echarts = require('echarts');
    var chart = require('chart');
    var urlmap = require('urlmap');

    function init() {
        var options1 = {
            legend: {
                show: false
            }
        };
        chart.pie(urlmap['pie'], '#graph_pie1', options1);

        var options2 = {
            tooltip: {
                trigger: 'item',
                formatter: "{a}<br/>{b} : {c} ({d}%)"
            },
            series: [{
                name: '销量',
                selectedMode: 'single',  /* single:单选, multiple:多选 */
                center: ['45%', '55%'],
                label: {
                    normal: {
                        position: 'inner'
                    }
                },
                labelLine: {
                    normal: {
                        show: false
                    }
                }
            }]
        };
        chart.pie(urlmap['pie'], '#graph_pie2', options2);

        var options3 = {
            tooltip: {
                trigger: 'item',
                formatter: function (params) {
                    return params.name + ': '+ params.value +' (' + Math.round(params.percent) + '%)';
                }
            },
            series: [{
                radius: ['35%', '70%'],
                center: ['50%', '55%'],
                label: {
                    normal: {
                        formatter: function (params) {
                            return Math.round(params.percent) + '%';
                        }
                    }
                }
            }]
        };
        chart.pie(urlmap['pie1'], '#graph_pie3', options3);

        var options4 = {          
            series: [{
                radius : ['40%', '68%'],
                center: ['50%', '55%'],
                avoidLabelOverlap: false,
                label: {
                    normal: {
                        show: false,
                        position: 'center'
                    },
                    emphasis: {
                        show: true,
                        formatter: '{d}%\n{b}',
                        textStyle: {fontSize: 15}
                    }
                },
                labelLine: {
                    normal: {
                        show: false
                    }
                },
            }]
        };
        chart.pie(urlmap['pie1'], '#graph_pie4', options4);
    } 

    return {
        init : init
    };
});