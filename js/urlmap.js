define(function(require) {
    var $ = require('jquery');

    var getEnv = function() {
        var devList = ['dev.f2e.tcredit.com'];
        var isLocal = $.inArray(location.hostname, devList) > -1;
        return isLocal ? 'development' : 'production';
    };

    var devMap = {
        bar: 'mock/bar.json',
        bar_line: 'mock/bar_line.json',
        pie: 'mock/pie.json',
        pie1: 'mock/pie1.json',
        line: 'mock/line.json',
        line1: 'mock/line1.json'
    };

    var productionMap = {
        bar: '',
        bar_line: '',
        pie: '',
        pie1: '',
        line: '',
        line1: ''
    };

    return getEnv() === 'development' ? devMap : productionMap;
});
