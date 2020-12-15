// в препросе всегда проверяй галку у Process Automatically и у итогового script.js и у script.js в папке source
// библиотеку swiper добавляй в script.js перед sliders.js, т.к. в ней есть объект, который будет юзаться в sliders.js
// не обязательно script.js, но какой-либо js файл юзай для сборки остальных файлов (т.к. например, здесь, если ты после подключенных js файлов будешь добавлять код, он не будет корректно работать, т.к. в основной js папке, которую преобразовывает prepros код будет начинаться с этого кода, соответственно, написанные тобой файлы будут после него и все будет крашиться)

//@prepros-append libs/datepicker-full.min.js
//@prepros-append libs/tippy.js
//@prepros-append libs/smoothScroll.js
//@prepros-append libs/lightgallery.min.js
//@prepros-append libs/nouislider.js
//@prepros-append libs/wNumb.min.js
//@prepros-append libs/inputmask.min.js
//@prepros-append libs/swiper.min.js
//@prepros-append sliders.js
//@prepros-append functions.js
//@prepros-append forms.js
//@prepros-append scroll.js











