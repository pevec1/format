// получаем объект - тело страницы (body)
let body = document.body;

// получаем объект - форму (form с атрибутом name="settings")
let formSettings = document.forms.settings;

// получаем объекты - кнопку "Форматировать" и кнопку "Сбросить"
let btnFormatted = formSettings.elements.btnFormatted;
let btnClear = formSettings.elements.btnClear;

// получаем объекты - радиопереключатели "по умолчанию" и "пол.настр."
let radioDefault = document.querySelector("#radioDefault");
let radioCustom = document.querySelector("#radioCustom");

// получаем объект - область полей (fieldset) с польз. настр.
let customSettings = document.querySelector(".custom-settings");

//Обработчики события "click" на кнопки "Форматировать" и "Очистить"
btnFormatted.addEventListener("click", formattedPage);
btnClear.addEventListener("click", clearFormatted);

//Обработчик события "change" при выборе радиопереключ. "по умолчанию"
radioDefault.addEventListener("change", () => {
    if (!customSettings.classList.contains(".hidden")) {

        if (customSettings.classList.contains("animate__fadeInUp")) {
            customSettings.classList.remove("animate__fadeInUp");
        }

        customSettings.classList.toggle("animate__fadeOutUp");
        setTimeout(() => {
            customSettings.classList.add("hidden");
        }, 500);
    }
});

//Обработчик события "change" при выборе радиопереключ. "польз. настр."
radioCustom.addEventListener("change", showCustomSettings);

//Функция форматирования страницы "по умолчанию"
function formattedPage() {
	body.classList.add("page-default");
}

//Функция сброса форматирования
function clearFormatted() {
	if (body.classList.contains("page-default")) {
		body.classList.remove("page-default");
	}
}

//Функция отображения области с польз. настр.
function showCustomSettings() {
    customSettings.classList.remove("hidden");

    if (customSettings.classList.contains("animate__fadeOutUp")) {
        customSettings.classList.remove("animate__fadeOutUp");
    }

    customSettings.classList.toggle("animate__fadeInUp");
}