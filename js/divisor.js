function getInputs() {
 var htmln = '', ttnbr = document.getElementById('f1').value;
 if (ttnbr.length) {
  total = parseInt(ttnbr);
  if (total > maxNbr) total = maxNbr; 
  
  htmln += '<div class="pane" id="info">';
  htmln += ' <div class="infoItem">' + lgf[0][appLang] + '</div>';
  htmln += ' <form action="#" method="post">';
  htmln += ' <table width="50%" border="0" cellspacing="0" cellpading="0">';
  
  for (var i = 0; i < total; i++) {
   htmln += ' <tr>';	  
   htmln += '  <td width="10%"><div class="infoItem">#' + (i + 1) + ':&nbsp;</td>';
   htmln += '  <td width="90%"><input type="number" min="1" max="999" step="0" name="n' + i + '" id="n' + i + '" value="" class="onlynbr" onkeyup="javascript:noZero(this); onlyNumber(this);" onkeypress="javascript:return limitNumber(this);" /></td>';
   htmln += ' </tr>';
  }
  
  htmln += ' </table>';
  htmln += ' </form>';
  htmln += '</div>';
  htmln += '<div align="center" class="pane button" onclick="javascript:calcNumbers();">';
  htmln += ' <table border="0" cellspacing="0" cellpadding="0">';
  htmln += '  <tr>';
  htmln += '   <td>' + lgf[1][appLang] + '</td>';
  htmln += '   <td>&nbsp;&nbsp;<img src="images/next.png" width="32" height="20" border="0" alt="" /></td>';
  htmln += '  </tr>';
  htmln += ' </table>';
  htmln += '</div>';
 
  document.getElementById('part2').innerHTML = htmln;
  document.getElementById('part1').style.display = "none";
  document.getElementById('part2').style.display = "";
 }
}

function calcNumbers() {
 var htmln = '', ycalc = true, sMMC = '', sMDC = '';
 for (var i = 0; i < total; i++) { 
  var ns = document.getElementById(('n' + i)).value;
  if (ns.length) nbrs[i] = parseInt(ns);
  else {
   alert(lgf[2][appLang]);
   ycalc = false;
   break;
  }
 }
 
 var repNbs = repNumber(nbrs);
 if (repNbs[0]) {
  alert(lgf[3][appLang] + ' (' + repNbs[1] + ') ' + lgf[4][appLang]);
  ycalc = false;
 }
 
 if (ycalc) {
  nbrs.sort(function(a, b) { return (a - b); });
  maxDiv = nbrs[(nbrs.length - 1)];
  
  if (total >= 10) var nClass = 'numbers2', nsClassB = 'numbersB2', ntClass = 'titles2', nrClass = 'results2';
  if (total >= 20) var nClass = 'numbers3', nsClassB = 'numbersB3', ntClass = 'titles3', nrClass = 'results3';
  else var nClass = 'numbers', nsClassB = 'numbersB', ntClass = 'titles', nrClass = 'results';
  
  htmln += '<div class="pane" id="info">';
  htmln += ' <table border="0" cellspacing="1" cellspacing="0" bgcolor="#343434" class="tables">';
  htmln += '  <tr height="35" bgcolor="#0D0D0D">';
  htmln += '   <td colspan="' + total + '" align="center" class="' + ntClass + '">&nbsp;' + lgf[5][appLang] + '&nbsp;</td>';
  htmln += '   <td align="center" class="' + ntClass + '">&nbsp;' + lgf[6][appLang] + '&nbsp;</td>';
  htmln += '   <td align="center" class="' + ntClass + '">&nbsp;' + lgf[7][appLang] + '&nbsp;</td>';
  htmln += '  </tr><tr height="27" bgcolor="#222222">';
  
  for (var n = 0; n < total; n++) htmln += ' <td align="center" class="' + nsClassB + '">' + nbrs[n] + '</td>';
  recDiv(nbrs, mimDiv, 0);
  
  var tRes = res.length;
  for (var l = 0; l < tRes; l++) { 
    if (l == 0) {
	var values = res[l].split("|"), tstrs = values.length;
	htmln += ' <td align="center" class="' + nClass + '">' + values[(tstrs - 2)] + '</td>';
	htmln += ' <td align="center" class="' + nClass + '">' + values[(tstrs - 1)] + '</td>';
	htmln += '</tr><tr height="27" bgcolor="#222222">';
	   
	if (values[(tstrs - 2)].length) mmc *= values[(tstrs - 2)];
	if (values[(tstrs - 1)].length) mdc *= values[(tstrs - 1)];
   } else if (l == (tRes - 1)) {
	var values = res[(l - 1)].split("|"), tstrs = values.length;
	for (var n = 0; n < (tstrs - 2); n++) htmln += ' <td align="center" class="' + nClass + '">' + values[n] + '</td>';
	   
	var values2 = res[l].split("|"), tstrs2 = values2.length;
	htmln += ' <td align="center" class="' + nClass + '">' + values2[(tstrs2 - 2)] + '</td>';
	htmln += ' <td align="center" class="' + nClass + '">' + values2[(tstrs2 - 1)] + '</td>';
	htmln += '</tr><tr height="27" bgcolor="#222222">';
	   
	if (values2[(tstrs2 - 2)].length) mmc *= values2[(tstrs2 - 2)];
	if (values2[(tstrs2 - 1)].length) mdc *= values2[(tstrs2 - 1)];
	
	for (var n2 = 0; n2 < (tstrs2 - 2); n2++) htmln += ' <td align="center" class="' + nClass + '">' + values2[n2] + '</td>';
	htmln += '<td colspan="2">&nbsp;</td>';
   } else {
	var values = res[(l - 1)].split("|"), tstrs = values.length;
	for (var n = 0; n < (tstrs - 2); n++) htmln += ' <td align="center" class="' + nClass + '">' + values[n] + '</td>';
	   
	var values2 = res[l].split("|"), tstrs2 = values2.length;
	htmln += ' <td align="center" class="' + nClass + '">' + values2[(tstrs2 - 2)] + '</td>'
	htmln += ' <td align="center" class="' + nClass + '">' + values2[(tstrs2 - 1)] + '</td>'
	htmln += '</tr><tr height="27" bgcolor="#222222">';
	   
	if (values2[(tstrs2 - 2)].length) mmc *= values2[(tstrs2 - 2)];
	if (values2[(tstrs2 - 1)].length) mdc *= values2[(tstrs2 - 1)];
   }
  }
  
  if (mmc > 1) sMMC = number_format(mmc, 0, ".", ".");
  if (mdc > 1) sMDC = number_format(mdc, 0, ".", ".");
  
  htmln += '  <tr height="30" bgcolor="#535353">';
  htmln += '   <td colspan="' + total + '">&nbsp;</td>';
  htmln += '   <td align="center" class="' + nrClass + '">' + sMMC + '</td>'
  htmln += '   <td align="center" class="' + nrClass + '">' + sMDC + '</td>'
  htmln += '  </tr>';
  htmln += ' </table>';
  htmln += '</div>';
  
  htmln += '<div align="center" class="pane button" onclick="javascript:reStart();">';
  htmln += ' <table border="0" cellspacing="0" cellpadding="0">';
  htmln += '  <tr>';
  htmln += '   <td>' + lgf[8][appLang] + '</td>';
  htmln += '   <td>&nbsp;&nbsp;<img src="images/reload.png" width="18" height="20" border="0" alt="" /></td>';
  htmln += '  </tr>';
  htmln += ' </table>';
  htmln += '</div>';
	 
  document.getElementById('part2').innerHTML = htmln;
 }	
}

function recDiv(nbrs, mimDiv, s) {
 var temp = new Array(), divSame = 0, divNot = 0, sumFinish = 0;
 
 for (var d = mimDiv; d <= maxDiv; d++) {
  for (var n = 0; n < total; n++) {
   if (nbrs[n] > 1) {
    if ((nbrs[n] % d) == 0) { 
	 temp[n] = (nbrs[n] / d);
	 divSame++; 
	} else {
	 temp[n] = nbrs[n];
     divNot++;
	} 
   } else {
    temp[n] = 1;
	divNot++;
	sumFinish++;	
   }   
  }
  
  if (sumFinish < total) {
   if (divSame == total) {
    res[s] = (temp.join("|") + "|" + d + "|" + d);
    recDiv(temp, mimDiv, (s + 1));
    break;
   } else if (divNot == total) {
    recDiv(temp, (mimDiv + 1), s);
    break; 
   } else {
    res[s] = (temp.join("|") + "|" + d + "|");
    recDiv(temp, mimDiv, (s + 1));
    break;
   }
  } else break;
 }
}