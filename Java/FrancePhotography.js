var slideIndicator = 1;
displaySlide(slideIndicator);

function currentSlide(num) 
{
	displaySlide(slideIndicator = num);
}

function addSlide(num) 
{
	displaySlide(slideIndicator += num);
}

function displaySlide(num) 
{
	var x;
	var slides = document.getElementsByClassName("Slides");
	var marker = document.getElementsByClassName("marker");

	if (num > slides.length) {slideIndicator = 1}    
	if (num < 1) {slideIndicator = slides.length}
	for (x = 0; x < slides.length; x++) 
	{
	  slides[x].style.display = "none";  
	}
	for (x = 0; x < marker.length; x++) 
	{
	  marker[x].className = marker[x].className.replace(" active", "");
	}
	slides[slideIndicator-1].style.display = "block";  
	marker[slideIndicator-1].className += " active";
}

function bigImg(x) 
{
	x.style.height = "100%";
	x.style.width = "100%";
}

function normalImg(x) 
{
	x.style.height = "50%";
	x.style.width = "50%";
}

function changebgcolor(color)
{
	document.getElementsByTagName('body')[0].style.
	backgroundColor = color.value;
}

function updateTextColour(value)
{
	document.body.style.color = value;
}


function ShowHideDiv1() 
{
	var checkBox = document.getElementById("Eiffel_Tower");
	var text = document.getElementById("show1");
	
	if (checkBox.checked == true)
	{
	text.style.display = "block";
	} else 
	{
	text.style.display = "none";
	}
}
  
function ShowHideDiv2() 
{
	var checkBox = document.getElementById("Frog_Legs");
	var text = document.getElementById("show2");
	
	if (checkBox.checked == true)
	{
	text.style.display = "block";
	} else 
	{
	text.style.display = "none";
	}
}

function ShowHideDiv3() 
{
	var checkBox = document.getElementById("Louvre_Pyramid");
	var text = document.getElementById("show3");
	
	if (checkBox.checked == true)
	{
	text.style.display = "block";
	} else 
	{
	text.style.display = "none";
	}
}

function ShowHideDiv4() 
{
	var checkBox = document.getElementById("Paris");
	var text = document.getElementById("show4");
	
	if (checkBox.checked == true)
	{
	text.style.display = "block";
	} else 
	{
	text.style.display = "none";
	}
}

function ShowHideDiv5() 
{
	var checkBox = document.getElementById("Snails");
	var text = document.getElementById("show5");
	
	if (checkBox.checked == true)
	{
	text.style.display = "block";
	} else 
	{
	text.style.display = "none";
	}
}

document.getElementById("Logo").
	addEventListener("click", function() {
		document.location.href="HomePage.html";
});