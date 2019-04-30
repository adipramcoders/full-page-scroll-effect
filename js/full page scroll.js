$(document).ready(function(){
	var a=0;
	
    $("body").bind("mousewheel", function(e){
        if(e.originalEvent.wheelDelta /120 > 0) {
			
			console.log('scrolling up !');
			if(a>=0)
			{	
				
			}
			else
			{
				a=a+100;
				$("#main").css("transform","translateY("+ a +"vh)");
			}
		}
        else{
			if(a>-100)
			{
			a=a-100;
            console.log('scrolling down !');
			$("#main").css("transform","translateY("+ a +"vh)");
			}
			else
			{
			
			}			
        }
    });
});