module.exports = webscrape ;

function webscrape() {
  var request = require('request');
  var cheerio = require('cheerio');

  return {
    scrapULItemsText:scrapULItemsText
  } ;

  /*
  Function that retrieves elements within the UL tag.
    Parameters:
    url       = the url to search
    parameter = a css selector search chain.
    Returns:
    promise containing the resolution of items within the page body or exception
  */
  function scrapULItemsText(url, pattern) {
    pattern = pattern.toLowerCase();
    return new Promise( function(resolve, reject){
      if (pattern.indexOf("ul") > -1){
        var listItems = [];
        request(url, function(error, response, body){
          if (!error && response.statusCode == 200) {
            var $ = cheerio.load(body) ;
            var elements = $(pattern) ;
            for (var i=0; i<elements.length; i++){
              listItems.push($(elements[i]).text()) ;
            }
            resolve(listItems);
          }
        })
      }
      else {
        reject("Exception: Parameter pattern does not contain a UL tag.");
      }
    })
  }


}

// test calls
webscrape()
  .scrapULItemsText('http://wikipedia.org/wiki/October_8', 'div#mw-content-text > h2 + ul:nth-of-type(2) > li')
  .then(function(result){ console.log(result); })
  .catch(function(error){ console.log(error); });
// webscrape().scrapULItems('http://www.mangafox.me', 'ul#updates > li > div > h3 a') ;
// var a = webscrape().scrapULItemsText('http://wikipedia.org/wiki/October_8', 'div#mw-content-text > h2 + ul:nth-of-type(2) > li');
// console.log(a);
