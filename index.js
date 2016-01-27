var request = require('request'),
	cheerio	= require('cheerio');

var url='http://www.tusubtitulo.com/';

request(url, function(error, response, html)
{
	if(error)
	{
		return console.log('Error al realizar la petición a ',url);
	}else{
		var $ = cheerio.load(html);

		$('.line1').filter(function()
			{
				var dato= $(this);
				console.log(dato.children().text());
			});
	}
});	