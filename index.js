var request = require('request'),
	cheerio	= require('cheerio');

var url='http://www.tusubtitulo.com/ajax_tabs.php?mode=translated&page=1&max=20';

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
				url=dato.find('a').attr('href')	

				var serie=
				{
					titulo:titulos,
					url:'http://www.tusubtitulo.com/'+url
				}

				console.log(serie);
			});
	}
});	