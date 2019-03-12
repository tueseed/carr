function radio()
{
	var radio = document.getElementsByName("belt");
	if(radio[0].checked)
	{
		var val = radio[0].value;
		
	}
	if(radio[1].checked)
	{
		var val = radio[1].value;
		
	}
	if(radio[2].checked)
	{
		var val = radio[2].value;
		
	}
	alert(val);
}