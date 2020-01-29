var flash_flag = 1;
var doc_flag = 0;

Event.observe(document, 'flash:SalvaLocal', function(ev){
	setAtividade('atividade_1',2,false);	//Comecou a fazer a atividade_1
	flash_flag = 1;
	exec_init();
});

Event.observe(window, 'load', function(){
	doc_flag = 1;
	exec_init();
});


function ggbOnInit(){
	switch (PosicaoAtual.Parte) {
		case 0://Parte1
			registerListeners();
			break;
		
		case 1://Parte2
			break;
		
		case 2://Parte3
			var applet = document.ggbApplet;
			applet.setErrorDialogsActive(false);
			tracarReta();
			break;
		
		case 3://Parte4
			registerListeners_p4();
			break;
		
		default://Parte5			
			break;
	}
}			


Event.observe(document, 'flash:SalvaLocal', function(ev)
{
	setAtividade('atividade_1',2,false);	//Comecou a fazer a atividade_1

});

function exec_init(){

	if (flash_flag && doc_flag)
	{
		setAtividade('atividade_1',2,false);	//Comecou a fazer a atividade_1
		switch (PosicaoAtual.Parte) {
			case 0:
				//Carrega valores iniciais
				$('parte1_q1_a').value = valida(getResp('atividade1_parte1_q1_a'));
				$('parte1_q1_b').value = valida(getResp('atividade1_parte1_q1_b'));
				$('parte1_q2_a_11').value = valida(getResp('atividade1_parte1_q2_a_11'));
				$('parte1_q2_a_21').value = valida(getResp('atividade1_parte1_q2_a_21'));
				$('parte1_q2_a_31').value = valida(getResp('atividade1_parte1_q2_a_31'));
				$('parte1_q2_a_41').value = valida(getResp('atividade1_parte1_q2_a_41'));
				$('parte1_q2_a_51').value = valida(getResp('atividade1_parte1_q2_a_51'));
				$('parte1_q3_a').value = valida(getResp('atividade1_parte1_q3_a'));
				$('parte1_q3_b').value = valida(getResp('atividade1_parte1_q3_b'));
				
				Event.observe('parte1_q1_a', 'change', function(evento){
					setResp('atividade1_parte1_q1_a',$('parte1_q1_a').value);
				});
				Event.observe('parte1_q1_b', 'change', function(evento){
					setResp('atividade1_parte1_q1_b',$('parte1_q1_b').value);
				});
				Event.observe('parte1_q2_a_11', 'change', function(evento){
					setResp('atividade1_parte1_q2_a_11',$('parte1_q2_a_11').value);
				});
				Event.observe('parte1_q2_a_21', 'change', function(evento){
					setResp('atividade1_parte1_q2_a_21',$('parte1_q2_a_21').value);
				});
				Event.observe('parte1_q2_a_31', 'change', function(evento){
					setResp('atividade1_parte1_q2_a_31',$('parte1_q2_a_31').value);
				});
				Event.observe('parte1_q2_a_41', 'change', function(evento){
					setResp('atividade1_parte1_q2_a_41',$('parte1_q2_a_41').value);
				});
				Event.observe('parte1_q2_a_51', 'change', function(evento){
					setResp('atividade1_parte1_q2_a_51',$('parte1_q2_a_51').value);
				});
				Event.observe('parte1_q3_a', 'change', function(evento){
					setResp('atividade1_parte1_q3_a',$('parte1_q3_a').value);
				});
				Event.observe('parte1_q3_b', 'change', function(evento){
					setResp('atividade1_parte1_q3_b',$('parte1_q3_b').value);
				});
				
				break;
			case 1:
				$('parte2_q4_a_11').value = valida(getResp('atividade1_parte2_q4_a_11'));
				$('parte2_q4_a_21').value = valida(getResp('atividade1_parte2_q4_a_21'));
				$('parte2_q5_a_23').value = valida(getResp('atividade1_parte2_q5_a_23'));
				$('parte2_q5_a_24').value = valida(getResp('atividade1_parte2_q5_a_24'));
				$('parte2_q5_a_43').value = valida(getResp('atividade1_parte2_q5_a_43'));
				$('parte2_q5_a_44').value = valida(getResp('atividade1_parte2_q5_a_44'));
				$('parte2_q5_a_53').value = valida(getResp('atividade1_parte2_q5_a_53'));
				$('parte2_q5_a_54').value = valida(getResp('atividade1_parte2_q5_a_54'));
				$('parte2_q5_a_63').value = valida(getResp('atividade1_parte2_q5_a_63'));
				$('parte2_q5_a_64').value = valida(getResp('atividade1_parte2_q5_a_64'));
				$('parte2_q5_a_73').value = valida(getResp('atividade1_parte2_q5_a_73'));
				$('parte2_q5_a_74').value = valida(getResp('atividade1_parte2_q5_a_74'));
				$('parte2_q5_a_83').value = valida(getResp('atividade1_parte2_q5_a_83'));
				$('parte2_q5_a_84').value = valida(getResp('atividade1_parte2_q5_a_84'));

				Event.observe('parte2_q4_a_11', 'change', function(evento){
					setResp('atividade1_parte2_q4_a_11',$('parte2_q4_a_11').value);
				});
				Event.observe('parte2_q4_a_21', 'change', function(evento){
					setResp('atividade1_parte2_q4_a_21',$('parte2_q4_a_21').value);
				});
				Event.observe('parte2_q5_a_23', 'change', function(evento){
					setResp('atividade1_parte2_q5_a_23',$('parte2_q5_a_23').value);
				});
				Event.observe('parte2_q5_a_24', 'change', function(evento){
					setResp('atividade1_parte2_q5_a_24',$('parte2_q5_a_24').value);
				});
				Event.observe('parte2_q5_a_43', 'change', function(evento){
					setResp('atividade1_parte2_q5_a_43',$('parte2_q5_a_43').value);
				});
				Event.observe('parte2_q5_a_44', 'change', function(evento){
					setResp('atividade1_parte2_q5_a_44',$('parte2_q5_a_44').value);
				});
				Event.observe('parte2_q5_a_53', 'change', function(evento){
					setResp('atividade1_parte2_q5_a_53',$('parte2_q5_a_53').value);
				});
				Event.observe('parte2_q5_a_54', 'change', function(evento){
					setResp('atividade1_parte2_q5_a_54',$('parte2_q5_a_54').value);
				});
				Event.observe('parte2_q5_a_63', 'change', function(evento){
					setResp('atividade1_parte2_q5_a_63',$('parte2_q5_a_63').value);
				});
				Event.observe('parte2_q5_a_64', 'change', function(evento){
					setResp('atividade1_parte2_q5_a_64',$('parte2_q5_a_64').value);
				});
				Event.observe('parte2_q5_a_73', 'change', function(evento){
					setResp('atividade1_parte2_q5_a_73',$('parte2_q5_a_73').value);
				});
				Event.observe('parte2_q5_a_74', 'change', function(evento){
					setResp('atividade1_parte2_q5_a_74',$('parte2_q5_a_74').value);
				});
				Event.observe('parte2_q5_a_83', 'change', function(evento){
					setResp('atividade1_parte2_q5_a_83',$('parte2_q5_a_83').value);
				});
				Event.observe('parte2_q5_a_84', 'change', function(evento){
					setResp('atividade1_parte2_q5_a_84',$('parte2_q5_a_84').value);
				});
				
				break;		
			case 2:
				$('parte3_q6_a').value = valida(getResp('atividade1_parte3_q6_a'));
				$('parte3_q7_a').value = valida(getResp('atividade1_parte3_q7_a'));
				$('parte3_q7_b').value = valida(getResp('atividade1_parte3_q7_b'));
				$('parte3_q8_a').value = valida(getResp('atividade1_parte3_q8_a'));

				Event.observe('parte3_q6_a', 'change', function(evento){
					setResp('atividade1_parte3_q6_a',$('parte3_q6_a').value);
				});
				Event.observe('parte3_q7_a', 'change', function(evento){
					setResp('atividade1_parte3_q7_a',$('parte3_q7_a').value);
				});
				Event.observe('parte3_q7_b', 'change', function(evento){
					setResp('atividade1_parte3_q7_b',$('parte3_q7_b').value);
				});
				Event.observe('parte3_q8_a', 'change', function(evento){
					setResp('atividade1_parte3_q8_a',$('parte3_q8_a').value);
				});

				break;		
			case 3:
				$('parte4_q9_a_11').value = valida(getResp('atividade1_parte4_q9_a_11'));
				$('parte4_q9_a_21').value = valida(getResp('atividade1_parte4_q9_a_21'));
				$('parte4_q9_a_31').value = valida(getResp('atividade1_parte4_q9_a_31'));
				$('parte4_q10_a').value = valida(getResp('atividade1_parte4_q10_a'));
				$('parte4_q10_b').value = valida(getResp('atividade1_parte4_q10_b'));
				$('parte4_q11_a').value = valida(getResp('atividade1_parte4_q11_a'));
				$('parte4_q11_b').value = valida(getResp('atividade1_parte4_q11_b'));

				Event.observe('parte4_q9_a_11', 'change', function(evento){
					setResp('atividade1_parte4_q9_a_11',$('parte4_q9_a_11').value);
				});
				Event.observe('parte4_q9_a_21', 'change', function(evento){
					setResp('atividade1_parte4_q9_a_21',$('parte4_q9_a_21').value);
				});
				Event.observe('parte4_q9_a_31', 'change', function(evento){
					setResp('atividade1_parte4_q9_a_31',$('parte4_q9_a_31').value);
				});
				Event.observe('parte4_q10_a', 'change', function(evento){
					setResp('atividade1_parte4_q10_a',$('parte4_q10_a').value);
				});
				Event.observe('parte4_q10_b', 'change', function(evento){
					setResp('atividade1_parte4_q10_b',$('parte4_q10_b').value);
				});
				Event.observe('parte4_q11_a', 'change', function(evento){
					setResp('atividade1_parte4_q11_a',$('parte4_q11_a').value);
				});
				Event.observe('parte4_q11_b', 'change', function(evento){
					setResp('atividade1_parte4_q11_b',$('parte4_q11_b').value);
				});
				
				break;
				
			case 4:
				$('parte5_q12_a').value = valida(getResp('atividade1_parte5_q12_a'));
				Event.observe('parte5_q12_a', 'change', function(evento){
					setResp('atividade1_parte5_q12_a',$('parte5_q12_a').value);
				});

				break;		
			}
	}
};

function tudoCerto() {
	if(PosicaoAtual.Parte == 4) {	//Ultima parte da Atividade 1
		setAtividade('atividade_1',3,true);	//atividade_1 estah feita
		setAtividade('atividade_2',1,false);	//atividade_2 estah liberada
	}
}


function corrige_q_1_a(valor) {
	var applet = document.ggbApplet;
	var anguloIncidencia = applet.getValueString('α');	//pega o valor do angulo escolhido pelo usuario. "α = 27°"

	anguloIncidencia = anguloIncidencia.substring(4, 6);
	anguloIncidencia = anguloIncidencia.replace('°','')	//troca o ° (grau) pro espaco vazio.
	
	setResp('anguloA1_Q1',anguloIncidencia);//guarda o valor do angulo para plotar apos a correcao da questao 1b.
	
	return [valor[0] == anguloIncidencia];
}

function corrige_q_1_b(valor) {
	var applet = document.ggbApplet;
	var anguloSaida = applet.getValueString('γ');	//pega o valor do angulo escolhido pelo usuario. "γ = 27°"

	anguloSaida = anguloSaida.substring(4, 6);
	anguloSaida = anguloSaida.replace('°','')	//troca o ° (grau) pro espaco vazio.
	
	var anguloIncidencia = getResp('anguloA1_Q1');
	
	if(valor[0] == anguloSaida) {
		applet.deleteObject('P7');
		applet.evalCommand('P7 = (' + anguloIncidencia + ',' + anguloSaida + ')');
		applet.setFixed('P7', true);
		applet.setColor('P7',204,0,0);
	}
	
	return [valor[0] == anguloSaida];
}

function corrige_q_2_a(valor) {
//var resp = calculaAnguloSaida(15);
//alert(resp);

	if(valor[0] == 11) {
		mostrarPonto('P1', true);
	} else {
		mostrarPonto('P1', false);
	}

	if(valor[1] == 22) {
		mostrarPonto('P2', true);
	} else {
		mostrarPonto('P2', false);
	}

	if(valor[2] == 32) {
		mostrarPonto('P3', true);
	} else {
		mostrarPonto('P3', false);
	}
	
	if(valor[3] == 41) {
		mostrarPonto('P4', true);
	} else {
		mostrarPonto('P4', false);
	}
	
	if(valor[4] == 46) {
		mostrarPonto('P5', true);
	} else {
		mostrarPonto('P5', false);
	}
	

	return [(valor[0] == 11), (valor[1] == 22), (valor[2] == 32), (valor[3] == 41), (valor[4] == 46)];
}

function corrige_q_3_a(valor) {
	if(valor[0] == '0') {
		mostrarPonto('P6', true);
	} else {
		mostrarPonto('P6', false);
	}

	return [valor[0] == '0'];
	
}

function corrige_q_3_b(valor) {
	valor[0] = valor[0].replace(',','.');
	
	return [valor[0] == 49];
}

function corrige_q_4_a(valor) {
	valor[0] = valor[0].replace(',','.');
	valor[1] = valor[1].replace(',','.');

	var angulo = grausParaRadianos(15);		//converte o angulo(no caso 15°) para radianos
	var seno15 = Math.sin(angulo);
	
	angulo = grausParaRadianos(11);			//converte o angulo 11° para radianos
	var seno11 = Math.sin(angulo);


	if((Math.abs(valor[0] - seno15) < 1/100) && (Math.abs(valor[1] - seno11) < 1/100 )) {
		plotarPonto('B', valor[0],valor[1],true);
		//valor[0] = valor[0].replace('.',',');	//Troca o ponto por virgula para mostrar para o usuario
		//valor[1] = valor[1].replace('.',',');	//Troca o ponto por virgula para mostrar para o usuario
		$('sen15_dinamico').update(valor[0]);
		$('sen11_dinamico').update(valor[1]);
	} else {
		plotarPonto('B', valor[0],valor[1],false);
		$('sen15_dinamico').update(' ');
		$('sen11_dinamico').update(' ');
	}
	
	return [(Math.abs(valor[0] - seno15) < 1/100), (Math.abs(valor[1] - seno11) < 1/100 )];
}

function corrige_q_5_a(valor) {
	valor[0] = valor[0].replace(',','.');
	valor[1] = valor[1].replace(',','.');
	valor[2] = valor[2].replace(',','.');
	valor[3] = valor[3].replace(',','.');
	valor[4] = valor[4].replace(',','.');
	valor[5] = valor[5].replace(',','.');
	valor[6] = valor[6].replace(',','.');
	valor[7] = valor[7].replace(',','.');
	valor[8] = valor[8].replace(',','.');
	valor[9] = valor[9].replace(',','.');
	valor[10] = valor[10].replace(',','.');
	valor[11] = valor[11].replace(',','.');

	var seno30 = Math.sin(grausParaRadianos(30));
	var seno22 = Math.sin(grausParaRadianos(22));
	var seno45 = Math.sin(grausParaRadianos(45));
	var seno32 = Math.sin(grausParaRadianos(32));
	var seno60 = Math.sin(grausParaRadianos(60));
	var seno40 = Math.sin(grausParaRadianos(40));
	var seno75 = Math.sin(grausParaRadianos(75));
	var seno46 = Math.sin(grausParaRadianos(46));
	var seno90 = Math.sin(grausParaRadianos(90));
	var seno49 = Math.sin(grausParaRadianos(49));


	if(valor[0] == '0' && valor[1] == '0') {
		plotarPonto('A', 0, 0, true);
	} else {
		plotarPonto('A', 0, 0, false);
	}

	
	if(validaResp(valor[2]) && validaResp(valor[3]) && (Math.abs(valor[2] - seno30) < 1/100) && (Math.abs(valor[3] - seno22) < 1/100 )) {
		plotarPonto('C', valor[2], valor[3], true);
	} else {
		plotarPonto('C', valor[2], valor[3], false);
	}

	if(validaResp(valor[4]) && validaResp(valor[5]) && (Math.abs(valor[4] - seno45) < 1/100) && (Math.abs(valor[5] - seno32) < 1/100 )) {
		plotarPonto('D', valor[4], valor[5], true);
	} else {
		plotarPonto('D', valor[4], valor[5], false);
	}

	if(validaResp(valor[6]) && validaResp(valor[7]) && (Math.abs(valor[6] - seno60) < 1/100) && (Math.abs(valor[7] - seno40) < 1/100 )) {
		plotarPonto('E', valor[6], valor[7], true);
	} else {
		plotarPonto('E', valor[6], valor[7], false);
	}

	if(validaResp(valor[8]) && validaResp(valor[9]) && (Math.abs(valor[8] - seno75) < 1/100) && (Math.abs(valor[9] - seno46) < 1/100 )) {
		plotarPonto('F', valor[8], valor[9], true);
	} else {
		plotarPonto('F', valor[8], valor[9], false);
	}

	if(validaResp(valor[10]) && validaResp(valor[11]) && (Math.abs(valor[10] - seno90) < 1/100) && (Math.abs(valor[11] - seno49) < 1/100 )) {
		plotarPonto('G', valor[10], valor[11], true);
	} else {
		plotarPonto('G', valor[10], valor[11], false);
	}

	return[valor[0] == '0', valor[1] == '0', (Math.abs(valor[2] - seno30) < 1/100), (Math.abs(valor[3] - seno22) < 1/100), (Math.abs(valor[4] - seno45) < 1/100), (Math.abs(valor[5] - seno32) < 1/100), (Math.abs(valor[6] - seno60) < 1/100), (Math.abs(valor[7] - seno40) < 1/100), (Math.abs(valor[8] - seno75) < 1/100), (Math.abs(valor[9] - seno46) < 1/100), (Math.abs(valor[10] - seno90) < 1/100), (Math.abs(valor[11] - seno49) < 1/100)];
}

function corrige_q_6_a(valor) {
	valor[0] = valor[0].replace(',','.');
	
	return [(Math.abs(valor[0] - 1.33) < 0.025)];
}

function corrige_q_7_a(valor) {
	valor[0] = valor[0].replace(',','.');
	var angulo = grausParaRadianos(50);
	var resp = 0.75 * Math.sin(angulo);
	setResp('seno_q7_a', resp);		//guarda a resposta sem arredondar
	
	//alert(resp);	0.57
	setResp('resp_q7', valor[0]);
	return [(Math.abs(valor[0] - resp) < 1/10)];	//Diminuida a margem de erro
}

function corrige_q_7_b(valor) {
	valor[0] = valor[0].replace(',','.');
	var seno50 = Math.sin(grausParaRadianos(50));
	var seno = getResp('seno_q7_a');	//pega a resposta sem arredondamento
	//alert(seno);
	var angulo = Math.asin(seno);
	angulo = radianosParaGraus(angulo);	//transforma o angulo para graus
	//alert(angulo);	35
	angulo = Math.round(angulo);		//arredonda o angulo
	
	if(valor[0] == angulo) {
		plotarPonto('H', seno50, getResp('resp_q7'), true);
	} else {
		plotarPonto('H', seno50, getResp('resp_q7'), false);
	}
		
	return [(Math.abs(valor[0] - angulo) < 1/100)];
}

function corrige_q_8_a(valor){
	var angulo = calculaAnguloSaida(40);
	angulo = Math.round(angulo);	//29

	return [valor[0] == angulo];
}

function corrige_q_9_a(valor) {
	var anguloEntrada = grausParaRadianos(15);	//converte o angulo de incidencia de graus para radianos
	var anguloSaida = Math.asin(1.33 * Math.sin(anguloEntrada));

	anguloSaida = radianosParaGraus(anguloSaida);		//converte para graus
	anguloSaida = Math.round(anguloSaida);
	//alert(anguloSaida);//20 calculado por javascript
	
	
	return [valor[0] == 20, valor[1] == 42, valor[2] == 70];
}

function corrige_q_10_a(valor) {
	$('angulo_A1_Q10').update(valor[0]+'&#176;');

	return [valor[0] == 15];
}

function corrige_q_10_b(valor) {
	//20
	return [valor[0] == 20];
}

function corrige_q_11_a(valor) {
	$('angulo_A1_Q11').update(valor[0]+'&#176;');
	
	return [valor[0] == 29];
}

function corrige_q_11_b(valor) {
	//40
	return [valor[0] == 40];
}

function corrige_q_12_a(valor) {
	
	return [(valor[0] == 48 || valor[0] == 49)];
}



