var lgs = new Array(), lgf = new Array();
lgs[0] = [ "MMC - MDC", "LCM - GCD" ];
lgs[1] = [ "Quantos números<br />deseja calcular?", "How many numbers<br />you want to calculate?" ];
lgs[2] = [ "ESCOLHER NÚMEROS", "CHOOSE NUMBERS" ];

lgf[0] = [ "Números desejados?", "Numbers you want?" ];
lgf[1] = [ "CÁLCULAR MMC/MDC", "CALCULATE LCM/GCD" ];
lgf[2] = [ "Preencha TODOS os números!", "Fill out ALL the numbers!" ];
lgf[3] = [ "Não repita", "Do not repeat" ];
lgf[4] = [ "números!", "numbers!" ];
lgf[5] = [ "NÚMEROS", "NUMBERS" ];
lgf[6] = [ "MMC", "LCM" ];
lgf[7] = [ "MDC", "GCD" ];
lgf[8] = [ "RECOMEÇAR", "RESTART" ];

function setLang() {
 var uLang = navigator.language || navigator.userLanguage; 
 appLang = (uLang.indexOf('pt') > -1) ? 0 : 1;
 for (var i = 0; i < lgs.length; i++) {
  document.getElementById(('L' + i)).innerHTML = lgs[i][appLang];
 }
 
 setLangOK = true; 
}

