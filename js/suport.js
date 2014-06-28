function reStart() {
 if (setLangOK) window.top.location.reload();
}

function repNumber(arrs) {
 var n = arrs.length;
 for (var i = 0; i < n; i++) {                        
  for (var j = (i + 1); j < n; j++) {             
   if (arrs[i] == arrs[j]) return new Array(true, arrs[i]);
  }	
 }
 return new Array(false, -1);
}

function number_format(number, decimals, dec_point, thousands_sep) {
 number = (number + '').replace(/[^0-9+\-Ee.]/g, '');
 var n = !isFinite(+number) ? 0 : +number, prec = !isFinite(+decimals) ? 0 : Math.abs(decimals), sep = (typeof thousands_sep === 'undefined') ? ',' : thousands_sep, dec = (typeof dec_point === 'undefined') ? '.' : dec_point, s = '',
 toFixedFix = function(n, prec) { var k = Math.pow(10, prec); return '' + (Math.round(n * k) / k).toFixed(prec); };
 s = (prec ? toFixedFix(n, prec) : '' + Math.round(n)).split('.');
 if (s[0].length > 3) { s[0] = s[0].replace(/\B(?=(?:\d{3})+(?!\d))/g, sep); }
 if ((s[1] || '').length < prec) { s[1] = s[1] || ''; s[1] += new Array(prec - s[1].length + 1).join('0'); }
 return s.join(dec);
}

function limitNumber(obj) {
 if (obj.value.length == maxLen || (obj.value.length == 1 && obj.value == 0)) return false;
}

function noZero(obj) {
 if (obj.value.length == 1 && obj.value == 0) {
  var c = obj.value.replace(0, "");
  obj.value = c;
 }
}

function onlyNumber(obj) {
 var c = obj.value.replace(/\D/g, ""); 
 var c = c.replace(/^(\d{5})(\d)/, "$1-$2"); 
 obj.value = c;
}