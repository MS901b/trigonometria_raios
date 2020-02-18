var flash_flag = 1;
var doc_flag = 0;

Event.observe(window, 'load', function(){
	doc_flag = 1;
	exec_init();
});



function ggbOnInit(){
	//Event.observe('checkBoxA3_P1','input:change', mostrarAnguloDesvio);

	switch (PosicaoAtual.Parte) {
		case 0://Parte1
			break;
		
		default://Parte2
			break;
	}
}			


function exec_init(){

	if (flash_flag && doc_flag)
	{
		setAtividade('atividade_3',2,false);	//Comecou a fazer a atividade_3
		switch (PosicaoAtual.Parte) {
			case 0:
				//Carrega valores iniciais
				$('parte1_q1_a').value = valida(getResp('atividade3_parte1_q1_a'));
				
				$('parte1_q1_b_1').checked=(getResp('atividade3_parte1_q1_b_1')=='1');
				$('parte1_q1_b_2').checked=(getResp('atividade3_parte1_q1_b_2')=='2');
				$('parte1_q1_b_3').checked=(getResp('atividade3_parte1_q1_b_3')=='3');
				$('parte1_q1_b_4').checked=(getResp('atividade3_parte1_q1_b_4')=='4');
				$('parte1_q1_b_5').checked=(getResp('atividade3_parte1_q1_b_5')=='5');
				
				Event.observe('parte1_q1_a', 'change', function(evento){
					setResp('atividade3_parte1_q1_a',$('parte1_q1_a').value);
				});
				Event.observe('parte1_q1_b_1', 'change', function(evento){
					setResp('atividade3_parte1_q1_b_1',$('parte1_q1_b_1').value);
				});
				Event.observe('parte1_q1_b_2', 'change', function(evento){
					setResp('atividade3_parte1_q1_b_2',$('parte1_q1_b_2').value);
				});
				Event.observe('parte1_q1_b_3', 'change', function(evento){
					setResp('atividade3_parte1_q1_b_3',$('parte1_q1_b_3').value);
				});
				Event.observe('parte1_q1_b_4', 'change', function(evento){
					setResp('atividade3_parte1_q1_b_4',$('parte1_q1_b_4').value);
				});
				Event.observe('parte1_q1_b_5', 'change', function(evento){
					setResp('atividade3_parte1_q1_b_5',$('parte1_q1_b_5').value);
				});
				
				break;
			case 1:
				$('parte2_q2_a').value = valida(getResp('atividade1_parte2_q2_a'));
				$('parte2_q2_b_11').value = valida(getResp('atividade1_parte2_q2_b_11'));
				$('parte2_q2_b_21').value = valida(getResp('atividade1_parte2_q2_b_21'));

				Event.observe('parte2_q2_a', 'change', function(evento){
					setResp('atividade1_parte2_q2_a',$('parte2_q2_a').value);
				});
				Event.observe('parte2_q2_b_11', 'change', function(evento){
					setResp('atividade1_parte2_q2_b_11',$('parte2_q2_b_11').value);
				});
				Event.observe('parte2_q2_b_21', 'change', function(evento){
					setResp('atividade1_parte2_q2_b_21',$('parte2_q2_b_21').value);
				});
				
				break;		
			}
	}
};

function tudoCerto() {
	if(PosicaoAtual.Parte == 1) {	//Ultima parte da Atividade 1
		setResp('atividade_3',3,true);	//atividade_3 estah feita
	}
}

function corrige_q_1_a(valor) {
	valor[0] = valor[0].replace(',','.');

	if(valor[0]>=824 && valor[0] <= 826) {
		return [true];
	} else {
		return [false];
	}
}

function corrige_q_1_b(valor) {
	return [valor[0]?false:null, valor[1]?false:null, valor[2]?true:null, valor[3]?false:null, valor[4]?false:null,];
}

function corrige_q_2_a(valor) {
	valor[0] = valor[0].replace(',','.');
	
	if(valor[0] >=32.25 && valor[0] <= 32.45) {
		return [true];
	} else {
		return [false];
	}
}

function corrige_q_2_b(valor) {
	var resp1 = false;
	var resp2 = false;
	
	valor[0] = valor[0].replace(',','.');
	valor[1] = valor[1].replace(',','.');
	
	if(valor[0] >= 61.67 && valor[0] <= 65.96) {
		resp1 = true;
	}
	
	if(valor[1] <= 51.87 && valor[1] >= 31.26) {
		resp2 = true;
	}

	
	/*
	angulo = grausParaRadianos(angulo);
	
	var resp = Math.asin(0.75 * (Math.sin(angulo)));
	var resp = radianosParaGraus(resp);
	console.log(resp);
	*/
		
	return [resp1, resp2];
	//return [(true), (Math.abs(valor[1] - resp) < 1/10)];
}

