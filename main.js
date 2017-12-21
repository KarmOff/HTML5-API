//Data attributes

var elem = document.querySelector("#someTag");
console.log(elem.dataset);
elem.dataset.fontFamilly = "Roboto";
console.log(elem.dataset);
console.log(elem.dataset.fontFamilly);

//History states

var defaults = {
	bgcolor: '#fff',
	fcolor: '#000',
	fsize: '16px'
};

document.body.addEventListener('keyup', function (e) {
	applyStyles();
});


btn.addEventListener('click', function () {
	var url = '/' + bgcolor.value + '/' + fcolor.value + '/' + fsize.value;  //  при сохранении в переменную url просто заносится строка из значений инпутов

	history.pushState({   // history.pushState фишка от htnl5 позволяет сохранять "состояния"
 		bgcolor: bgcolor.value,
		fcolor: fcolor.value,
		fsize: fsize.value
	}, 'new state', url);
});


window.addEventListener('popstate', function (e) {    // при переходах между страницами срабатывает popstate и если были сохранены состояния то они просто вытягиваются
	var state = e.state;                              // и не потребуется перезагрузки страницы
	bgcolor.value = state.bgcolor;
	fcolor.value  = state.fcolor;
	fsize.value   = state.fsize;
	applyStyles ();
});









function applyStyles () {
	someTag.style.backgroundColor = bgcolor.value;
	someTag.style.color = fcolor.value;
	someTag.style.fontSize = fsize.value;
}
