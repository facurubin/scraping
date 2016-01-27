var request = require('request'),
	cheerio	= require('cheerio');

var url='http://www.tusubtitulo.com/ajax_tabs.php?mode=translated&page=1&max=10';

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

				titulos = dato.children().text();

				//release = data.children().last().children().text();
				console.log(titulos);
			});
	}
});	