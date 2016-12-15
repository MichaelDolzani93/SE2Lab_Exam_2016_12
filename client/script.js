$(document).ready(function()
{	
	var baseAddress = "http://127.0.0.1:6000";
	$("#btn1").click(function(){
		$.post(baseAddress + "/searchStudent",
		{
			ID: "1"
		},
		function(data, status){
			alert("ID: " + data.ID + 
				  "\n SSN: " + data.SSN +
				  "\n name: " + data.name +
				  "\n address: " + data.address +
				  "\n mark: " + data.mark +
				  "\n Status: " + status);
		},
		"json");
	});
	
	$("#btn2").click(function(){
		$.post(baseAddress + "/deleteStudent",
		{
			ID: "1"
		},
		function(data, status){
			alert("ID: " + data.ID + 
				  "\n SSN: " + data.SSN +
				  "\n name: " + data.name +
				  "\n address: " + data.address +
				  "\n mark: " + data.mark +
				  "\n Status: " + status);
		},
		"json");
	});
	
	$("#btn3").click(function(){
		$.post(baseAddress + "/deleteStudent",
		{
			SSN: "A6T4"
		},
		function(data, status){
			alert("ID: " + data.ID + 
				  "\n SSN: " + data.SSN +
				  "\n name: " + data.name +
				  "\n address: " + data.address +
				  "\n mark: " + data.mark +
				  "\n Status: " + status);
		},
		"json");
	});
	
	$("#btn4").click(function(){
		$.post(baseAddress + "/addStudent",
		{
			ID: "6",
			SSN: "A6T4",	
			name: "Andrea",
			address: "via Rosmini",
			mark: "8"
		},
		function(data, status){
			alert("Status: " + status);
		},
		"json");
	});
		
	$("#btn5").click(function(){
		document.getElementById("segno");
		document.getElementById("numero");
	});
	
});
