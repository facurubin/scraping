var request = require('request'),
	cheerio	= require('cheerio');
	async	= require('async')

var url='http://www.tusubtitulo.com/ajax_tabs.php?mode=translated&page=1&max=20';

var series={};

function listaSubtitulos(cb)
//Peticion get a url y filter clase .line1 en DOM
{
	var series = []
	request(url, function(error, response, html)
	{
		if(error)
		{
			cb('Error al realizar la petición a '+url);
		}else{
			var $ = cheerio.load(html);

			var lista = $('.line1 a').filter(function()
				{

					var dato= $(this);

					dato.each(function(i, elem) 
					{
				  		series.push(
				  			{
				  				titulo: $(this).text(),
				  				url: 'http://www.tusubtitulo.com/'
				  				+ elem.attribs.href
				  			});
					});
				});

			cb(null,series);
		}
	});
}

async.waterfall([listaSubtitulos],log)

function log(err,dato)
{
	console.log(err)
	console.log('Dato:',dato);	
}