(function () {
	var names = [
		" hammad",
		"John sins",
		" mia khilifa",
		"jerry",
		"Frank",
		"Paul",
	];

	for (var i = 0; i < names.length; i++) {
		var firstLetter = names[i].charAt(0).toLowerCase();
		if (firstLetter === "j") {
			console.log("good bye " + names[i]);
		} else {
			console.log("hello" + names[i]);
		}
	}
})();
