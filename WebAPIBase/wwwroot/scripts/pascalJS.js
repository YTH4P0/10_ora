window.onload = function () {
	var drawPascal = function (sorszam) {
		var pascaldiv = document.getElementById('pascal')
		for (var sor = 0; sor < sorszam; sor++) {
			var ujsor = document.createElement('div')
			ujsor.classList.add('sor')
			pascaldiv.appendChild(ujsor)

			for (var oszlop = 0; oszlop <= sor; oszlop++) {
				var ujelem = document.createElement('div')
				ujelem.classList.add('elem')
				ujelem.innerHTML = fakt(sor) / (fakt(oszlop) * fakt(sor - oszlop))
				ujsor.appendChild(ujelem)
			}
		}
	}
}



var fakt = function (a) {
	if (a==1) {
		return 1
	}
	else {
		return a * fakt(a - 1)
	}
}