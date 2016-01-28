var request = require('request'),
	cheerio	= require('cheerio');
	async	= require('async')

var url='http://www.tusubtitulo.com/ajax_tabs.php?mode=translated&page=1&max=20';

var series = [];

function listaSubtitulos(cb)
//Peticion get a url y filter clase .line1 en DOM
{
	
	request(url, function(error, response, html)
	{
		if(!error && response.statusCode == 200)
		{
			var $ = cheerio.load(html);

			$('li.line1 > a').each(function(i, elem) 
				{
			  		series.push(
			  			{
			  				titulo: $(this).text(),
			  				url: 'http://www.tusubtitulo.com/'
			  				+ elem.attribs.href
			  			});
				});

			cb(null,series);
		}else
		{
			cb('Error al realizar la petición a '+url);
		}
	});
}

async.waterfall([listaSubtitulos],log)

function log(err,dato)
{
	if(err)
	{
		return console.log('Error: ',err);
	}
	console.log(dato);	
}