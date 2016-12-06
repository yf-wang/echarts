define(function (require) {
    var common = require('common');
    var $ = require('jquery');
    var echarts = require('echarts');
    var chart = require('chart');
    var urlmap = require('urlmap');

    function init() {
        chart.line(urlmap['line'], '#graph_line1');

        var setting = {
            areaStyle: {
                normal: {
                    opacity: 0.15
                }
            }              
        };
        var options = {
            xAxis: {
                boundaryGap: false
            }
        };
        chart.line(urlmap['line1'], '#graph_line2', options, setting);
    }

    return{
        init: init
    };
});