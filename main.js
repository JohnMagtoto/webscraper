module.exports = webscrape ;

function webscrape() {
  var request = require('request');
  var cheerio = require('cheerio');

  return {
    startScrappingText:startScrappingText
  } ;

  /*
  Function that retrieves text within the specified element
    Parameters
    url       :  the url to search
    parameter :  a css selector search chain.

    Returns
    The promise containing the resolution of items within the page body or exception
  */
  function startScrappingText(url, pattern) {
    pattern = pattern.toLowerCase();
    return new Promise( function(resolve, reject){
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
        else {
          reject(error);
        }
      })
    })
  }

  function scrap
}

// test calls
webscrape()
  .startScrappingText('http://wikipedia.org/wiki/October_8', 'div#mw-content-text > h2 + div:nth-of-type(2) > li')
  .then(function(result){ console.log(result); })
  .catch(function(error){ console.error(error); });
