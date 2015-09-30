(function(){
    var scraper = {};
    exports.scrapeData = scraper.scrapeData = function(){
        //your logic
        var request = require('request');
        var cheerio = require('cheerio');
        var nazarik = require('bone-scrapping')({
          login_name:"ctl00$ContentPlaceHolder1$txtuserid",
          password_name:"ctl00$ContentPlaceHolder1$txtpassid",
          username_value: "8558997795",
          password_value: "Sanjeev1",
          login_url : "https://www.statebankrewardz.com/memberlogin.aspx",
          url_to_scrap : "https://www.statebankrewardz.com/MyAccount.aspx",
          form_row : 0
        });

        // var credentials = {
        // 	username: '8558997795',
        // 	password: 'Sanjeev1'
        // };
        // console.log(nazarik) ;
        nazarik.then(function(res){
          console.log(res) ;
        }) ;

        // request
        //   .post({
        //     uri : "https://www.statebankrewardz.com/memberlogin.aspx",
        //     headers : {'content-type': 'application/x-www-form-urlencoded'},
        //     body : require("querystring").stringify(credentials)
        //   }, function(err, res, body){
        //     if (err){
        //       callback.call(null, new Error('Login failed'));
		    //       return;
        //     }
        //     console.log(body) ;
        //     console.log("\n\n\n\n")
        //     console.log(res) ;
        //   })

    };

    if (!module.parent) {
        scraper.scrapeData(process.argv[2]);
    }
})();
