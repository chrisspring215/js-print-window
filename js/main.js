function init() {

	/* Grabs the button element and add the var 'printPage' */
	var printPage = document.getElementById('printScreen');

	/* When printPage button is clicked, the content of the window are printed */
	printPage.onclick = function () {
		window.print();
	};
}