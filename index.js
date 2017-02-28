var striptags = require('striptags');
var request = require('superagent');

var url = 'https://www.jrcigars.com/item/saint-luis-rey-cigars/saint-luis-rey-reserva-especial/belicoso/sl15b';
var jrExtract = url => {

};
var tcExtract = url => {

};
var fsExtract = url => {

};
var ciExtract = url => {

};
var gcExtract = url => {

};
var btExtract = url => {

};

request.get(url)
  .end(function(e, response){
  console.log('is ok?', response.ok);
  var html = String(response.text);
  var brand = striptags(html.match(/<h1 itemprop=\"brand\" class=\"tight\">([a-zA-Z0-9 _-]*)<\/h1>/)[0]);
  var description = striptags(html.match(/<div class=\"item-description\">\s*<p>(.*)<\/p><\/div><a href=\"#read-more\"/)[0]);
  console.log(brand);
  console.log(description);
});