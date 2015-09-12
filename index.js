(function(){
    var scraper = {};
    exports.scrapeData = scrapper.scrapeData = function(){
        //your logic
        var request = require('request');
        var cheerio = require('cheerio');

        var credentials = {
        	username: '8558997795',
        	password: 'Sanjeev1'
        };



    };

    if (!module.parent) {
        scrapper.scrapeData(process.argv[2]);
    }
})();
