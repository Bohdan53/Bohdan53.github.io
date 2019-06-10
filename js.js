var c = 1;
function slc(m){
	var is = document.getElementById('mslimg');
	var slco = document.getElementById('mslc');
	switch(m){
		case 0:c--;break;
		case 1:c++;break;
	}
	switch(c){
		case 4:c = 1;break;
		case 0:c = 3;break;
	}
	switch(c){
		case 1:sc('img/b1.jpg');break;
		case 2:sc('img/b2.jpg');break;
		case 3:sc('img/b3.jpg');break;
	}
	slco.innerHTML = c;
}

function sc(sr){
	var is = document.getElementById('mslimg');
	is.style.opacity = '0';
	setTimeout(function(){is.src = sr;},400);
	setTimeout(function(){is.style.opacity = '1'},600);
}

function sel(co){
	var comt = document.getElementById('comt');
	var comd = document.getElementById('comd');
	var comi = document.getElementById('comimg');
	var commands = document.getElementById('commands');
	
	commands.style.opacity = '0';
	setTimeout(function(){
	switch(co){
		case 'commbc':comt.innerHTML = 'Huawei';comd.innerHTML = 'Huawei Technologies Co. Ltd. — одна из крупнейших мировых компаний в сфере телекоммуникаций. Основана бывшим инженером Народно-освободительной армии Китая Жэнем Чжэнфэем в 1987 году.';comi.src = 'img/ll.png';commands.style.background = 'white';commands.style.color = '#d31145';break;
		case 'commhr':comt.innerHTML = 'Apple';comd.innerHTML = 'Apple — американская корпорация, производитель персональных и планшетных компьютеров, аудиоплееров, телефонов, программного обеспечения. Один из пионеров в области персональных компьютеров и современных многозадачных операционных систем с графическим интерфейсом.';comi.src = 'img/hr.jpg';commands.style.background = 'white';commands.style.color = 'black';break;
		case 'commcb':comt.innerHTML = 'Samsung';comd.innerHTML = 'Безусловный лидер нашего рейтинга – корейская Samsung. Сегодня этот гигант в одиночку контролирует практически треть всего рынка смартфонов и в обозримом будущем никуда с первого места двигаться не собирается.';comi.src = 'img/cb.jpg';commands.style.background = 'white';commands.style.color = '#4285f4';break;
	}
},400);
	setTimeout(function(){commands.style.opacity = '1';},500);
}

function podpis(){
	var fc = document.getElementById('fotcon');
	fc.style.opacity = '0';
	setTimeout(function(){fc.innerHTML = 'Ви підписані на почтову розсилку';},400);
	setTimeout(function(){fc.style.opacity = '1';},500);
}