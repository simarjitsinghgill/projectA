function discount_$(item_price,discount_rate){
	var discount_$ = (item_price*discount_rate)/100;
	return discount_$;
}
function net_price(item_price,discount_rate)	{
	var net_price = item_price - discount_rate;
	return net_price;
}
function calculate(){
var item_price= parseFloat(document.getElementById("item_price").value);
var discount_rate= parseFloat(document.getElementById("discount_rate").value);
if (isNaN(item_price)||isNaN(discount_rate))
			{
				alert("values are invalid")
			}
			else
			{
				if (item_price>1000|| item_price<0){
	alert ("Item price should be between 0 or 1000");
}
else
	{
		if (discount_rate>70|| discount_rate <0)
		{
			alert("discount % should be between 0 and 70")
		}
		else
		{

				document.getElementById("discount_$").value= discount_$(item_price, discount_rate);
				document.getElementById("net_price").value= net_price(item_price,discount_rate);
			}
		}
	}
}
window.onload = function(){
    document.getElementById("calculate").onclick = calculate;
}