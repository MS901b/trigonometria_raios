var flash_flag = 1;
var doc_flag = 0;


Event.observe(window, 'load', function(){
	doc_flag = 1;
	exec_init();
});

function exec_init(){
	if (flash_flag && doc_flag)
	{
		setAtividade('atividade_2',2,false);	//Comecou a fazer a atividade_2
	};
}

function ggbOnInit(){
	//Event.observe('checkBoxA2_P1','input:change', mostrarPontos);
}


function tudoCerto() {
	setAtividade('atividade_2',3,true);	//atividade_2 estah feita
	setAtividade('atividade_3',1,false);	//atividade_3 estah liberada
}
			

function corrige_q_1_a(valor) {
	var applet = document.ggbApplet;
	var coordY = applet.getYcoord('F');

	if(coordY >= 4.55 && coordY <= 4.8) {
		return [true];
	}
	return [false];
}

