const button1 = document.querySelector(".checker");
function light() {
	document.body.style.backgroundColor = "#fff";
}

function dark() {
	document.body.style.backgroundColor = "#000";
}
if (button1.checked == true) {
	light();
} else {
	dark();
}
