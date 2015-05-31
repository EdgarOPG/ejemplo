$(document).ready(function()
{
		$('li a').mouseenter(function()
		{
				$(this).animo('blur', {duration: 0, amount: .9});
				$(this).mouseleave(function()
				{
					$(this).animo('focus');
    			});				
		});

		setInterval(function interval() 
		{
      		$('.animacion').animo( { animation: 'tada' } );
			console.log("animacion aplicada a icon");
		}, 2000);

		$('.icon').mouseenter(function()
		{
			$(this).animo( { animation: 'bounce' } );
			$(this).removeClass('animacion');
    	});

    	$('.icon').mouseleave(function()
		{
			$(this).addClass('animacion');
    	});

    	$('#networks').click(function()
    	{
    		$.ajax(
    		{
        		url: "http://edgaropg.github.io/ejemplo/networks.html",
        		success: function(datos)
        		{
       				$("#wrapper").html(datos);
      			}
			});
    	});

});
