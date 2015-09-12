(function(){
    var scrapper = {};
    exports.runScrapping = scrapper.runScrapping = function(){
        //your logic
        var request = require('request');
        var cheerio = require('cheerio');

        var credentials = {
        	username: '8558997795',
        	password: 'Sanjeev1'
        };



    };

    if (!module.parent) {
        scrapper.runScrapping(process.argv[2]);
    }
})();
