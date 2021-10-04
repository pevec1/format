// function settingsViewPage(color = "#f0f0f0", width, ...props) {
// 	if (color != undefined) {
// 		document.body.style.backgroundColor = color;
// 	}

// 	if (width != undefined) {
// 		document.body.style.width = width;
// 		document.body.style.margin = "auto";
// 	}

// 	if (props[0]) {
// 		document.body.style.padding = props[0];
// 	}
// 	if (props[1]) {
// 		document.body.style.boxShadow = props[1];
// 	}
// 	if (props[2]) {
// 		document.body.textContent = props[2];
// 		document.body.style.color = "white";
// 	}
// }

// settingsViewPage();
// settingsViewPage("rgb(150, 50, 50)");
// settingsViewPage("rgb(150, 50, 50)", "85%");
// settingsViewPage("rgb(150, 50, 50)", "50%", "50px", "0 0 10px 0 gold", "Текст Текст Текст");





// let btnHightLight = document.getElementById("btnHihgtLight");
// let pAll = document.querySelectorAll("p");

// btnHightLight.addEventListener("click", setHightLight);

// function setHightLight() {
// 	for (let p of pAll) {
// 		p.classList.toggle("bg");
// 		p.classList.toggle("space");
// 	}
// 	if (btnHightLight.textContent == "Выключить") {
// 		btnHightLight.textContent = "Включить";
// 	} else {
// 		btnHightLight.textContent = "Выключить";
// 	}
// }

// btnHightLight.addEventListener("click", function () {
// 	for (let p of pAll) {
// 		p.classList.toggle("bg");
// 		p.classList.toggle("space");
// 	}
// 	if (btnHightLight.textContent == "Выключить") {
// 		btnHightLight.textContent = "Включить";
// 	} else {
// 		btnHightLight.textContent = "Выключить";
// 	}
// });

// btnHightLight.addEventListener("click", () => {
// 	for (let p of pAll) {
// 		p.classList.toggle("bg");
// 		p.classList.toggle("space");
// 	}
// 	if (btnHightLight.textContent == "Выключить") {
// 		btnHightLight.textContent = "Включить";
// 	} else {
// 		btnHightLight.textContent = "Выключить";
// 	}
// });