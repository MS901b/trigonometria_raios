/***********************
 * Funcoes de Animacao *
 ***********************/
//Anima raio1 - A1_P1
function animaRaio() {
	var applet = document.ggbApplet;
	if (!applet.isAnimationRunning()) {
		applet.setVisible('γ', false);		//esconde angulo de saida
		applet.setVisible('u', true);		//raio incidente(vetor) fica visivel
		applet.setVisible('v', false);		//esconde raio de saida(vetor)
		applet.stopAnimation();
		applet.setValue('Raio1',0);			//volta raio1 para inicio
		applet.setValue('Raio2',0);			//volta raio2 para inicio
		applet.setAnimating('Raio2',false);
		applet.setAnimating('Raio1',true);
		applet.setAnimationSpeed('Raio1', 7.0);
		applet.startAnimation();
	}
}

//Anima raio2 - A1_P1
function func2() {
	var applet = document.ggbApplet;
	if (applet.isAnimationRunning()) {
		applet.stopAnimation();
		applet.setValue('Raio1',1);			//coloca Raio1 no final
		applet.setValue('Raio2',0);			//coloca Raio2 no inicio
		applet.setAnimating('Raio1',false);
		applet.setVisible('e', true);
		applet.setVisible('u', false);		//esconde raio de incidencia
		applet.setAnimating('Raio2',true);
		applet.setVisible('v', true);		//raio de saida(vetor) fica visivel
		applet.setAnimationSpeed('Raio2', 7.0);
		applet.startAnimation();
	}
}

//Parar a animacao do raio2 - A1_P1
function func3() {
	var applet = document.ggbApplet;
	applet.stopAnimation();
	applet.setAnimating('Raio1',false);
	applet.setAnimating('Raio2',false);
	applet.setValue('Raio1',1);				//coloca Raio1 no final
	applet.setVisible('v', false);			//esconde raio de saida
	applet.setVisible('γ', true);			//mostra angulo de saida
}

//Registra listeners dos raios 1, 2 e angulo alpha. 
function registerListeners() {
	var applet = document.ggbApplet;
	applet.registerObjectUpdateListener('Raio1','updateListenerRaio1');
	applet.registerObjectUpdateListener("Raio2","updateListenerRaio2");
	applet.registerObjectUpdateListener("α","updateListenerAlfa");
}

function updateListenerRaio1(objName) {
	var applet = document.ggbApplet;
	if ( applet.getValue('Raio1') == 1 ) {
		//alert('entrei');
		func2();
	}
}

function updateListenerRaio2(objName) {
	var applet = document.ggbApplet;
	if ( (objName=='Raio2') && (applet.getValue('Raio2') == 1) )  {
		func3();
	}
}

function updateListenerAlfa(objName) {
	var applet = document.ggbApplet;

	applet.unregisterObjectUpdateListener('α');

	applet.setVisible('γ', false);			//esconde angulo de saida
	applet.setVisible('e', false);			//esconde tracejado do Raio2
	
	var alpha = applet.getValueString('α'); //pega o valor do angulo escolhido pelo usuario. "α = 49.69°"
	alpha = alpha.substring(4, 9);
	alpha = alpha.replace('°', '');		//troca o ° (grau) pro espaco vazio.
	//alert(alpha);
	alpha = Math.round(alpha);
	alpha = grausParaRadianos(alpha);
	
	//alert(alpha);
	//applet.setValue('α',alpha);
	
	var px = 90 - 30 * Math.sin(alpha);
	var py = 140 + 30 * Math.cos(alpha);
	
	applet.setCoords('B', px, py);
	applet.registerObjectUpdateListener('α','updateListenerAlfa');

}

/******************************
 * Animacao Atividade1 Parte4 *
 ******************************/
// Registra listener da Atividade 1 parte 4.
function registerListeners_p4() {
	var applet = document.ggbApplet;
	applet.registerObjectUpdateListener('Raio1','updateListenerR1_p4');
	applet.registerObjectUpdateListener('Raio2','updateListenerR2_p4');
	applet.registerObjectUpdateListener('Raio3','updateListenerR3_p4');
	applet.registerObjectUpdateListener('α','updateListenerAlfa_p4');
}

function updateListenerR1_p4(objName) {
	var applet = document.ggbApplet;
	
	var alpha = applet.getValueString('α'); //pega o valor do angulo escolhido pelo usuario. "α = 146°"
	alpha = alpha.substring(4, 7);
	alpha = alpha.replace('°', '') //troca o ° (grau) pro espaco vazio.

	if ( (objName=='Raio1') && (alpha <= 90) && (applet.getValue('Raio1') == 1) ){	//anima raio2
		animaRaio2_p4();
	}
	
	if ( (objName=='Raio1') && (alpha > 90) && (applet.getValue('Raio1') == 1) ){	//anima raio3
		animaRaio3_p4();
	}
}

function updateListenerR2_p4(objName) {
	var applet = document.ggbApplet;
	if ((objName == 'Raio2') && (applet.getValue('Raio2') == 1)) {
		pararAnimacao_p4(2);
	}
}

function updateListenerR3_p4(objName) {
	var applet = document.ggbApplet;
	if ((objName == 'Raio3') && (applet.getValue('Raio3') == 1)) {
		pararAnimacao_p4(3);
	}
}

function updateListenerAlfa_p4(objName) {
	var applet = document.ggbApplet;
	applet.unregisterObjectUpdateListener('α');
	applet.setVisible('γ', false);			//esconde angulo de saida do raio2
	applet.setVisible('ε', false);			//esconde angulo de saida do raio3
	applet.setVisible('e', false);			//esconde tracejado do Raio2
	applet.setVisible('h', false);			//esconde tracejado do Raio3

	var alpha = applet.getValueString('α'); //pega o valor do angulo escolhido pelo usuario. "α = 49.69°"
	alpha = alpha.substring(4, 9);
	alpha = alpha.replace('°', '');		//troca o ° (grau) pro espaco vazio.
	//alert(alpha);
	alpha = Math.round(alpha);
	alpha = grausParaRadianos(alpha);
	
	//alert(alpha);
	//applet.setValue('α',alpha);
	
	var px = 90 - 30 * Math.sin(alpha);
	var py = 140 + 30 * Math.cos(alpha);
	
	applet.setCoords('B', px, py);
	applet.registerObjectUpdateListener('α','updateListenerAlfa_p4');
}

/**
 * Comeco da animacao da parte 4. Primeira funcao a ser chamda.
 */
function animaRaio_p4(){
	var applet = document.ggbApplet;
	if (!applet.isAnimationRunning()) {
		applet.setVisible('γ', false);	//esconde angulo de saida do raio2
		applet.setVisible('ε', false);	//esconde angulo de saida do raio3
		applet.setVisible('u', true);	//mostra vetor (raio1)
		applet.setVisible('v', false);	//esconde vetor (raio2)
		applet.setVisible('w', false);	//esconde vetor (raio3)
		applet.stopAnimation();
		applet.setValue('Raio1', 0); //volta raio1 para inicio
		applet.setValue('Raio2', 0); //volta raio2 para inicio
		applet.setValue('Raio3', 0); //volta raio3 para inicio
		applet.setAnimating('Raio1', true);
		applet.setAnimating('Raio2', false);
		applet.setAnimating('Raio3', false);
		applet.setAnimationSpeed('Raio1', 7.0);
		applet.startAnimation();
	}
}

/**
 * Animacao do Raio2.
 */	
function animaRaio2_p4() {
	var applet = document.ggbApplet;

	if (applet.isAnimationRunning()) {
		applet.stopAnimation();
		applet.setValue('Raio1', 1); //coloca Raio1 no final
		applet.setValue('Raio2', 0); //coloca Raio2 no inicio
		applet.setValue('Raio3', 0); //coloca Raio2 no inicio
		applet.setAnimating('Raio1', false);
		applet.setAnimating('Raio3', false);
		applet.setVisible('e', true);	//tracejado do raio2 fica visivel
		applet.setVisible('u', false);	//esconde vetor(raio1) de incidencia
		applet.setAnimating('Raio2', true);
		applet.setVisible('v', true); //raio2 (vetor) fica visivel
		applet.setAnimationSpeed('Raio2', 7.0);
		applet.startAnimation();
	}
}

/**
 * Animacao do Raio3.
 */
function animaRaio3_p4() {
	var applet = document.ggbApplet;

	if (applet.isAnimationRunning()) {
		applet.stopAnimation();
		applet.setValue('Raio1', 1); //coloca Raio1 no final
		applet.setValue('Raio2', 0); //coloca Raio2 no inicio
		applet.setValue('Raio3', 0); //coloca Raio2 no inicio
		applet.setAnimating('Raio1', false);
		applet.setAnimating('Raio2', false);
		applet.setVisible('h', true);	//mostra tracejado do raio3
		applet.setVisible('u', false);	//esconde vetor(raio1)
		applet.setVisible('v', false);	//esconde vetor(raio2)
		applet.setAnimating('Raio3', true);
		applet.setVisible('w', true);	//mostra vetor(raio3)
		applet.setAnimationSpeed('Raio3', 7.0);
		applet.startAnimation();
	}
}

/**
 * Funcao que irah parar a animacao.
 * @param {Object} raio		qual raio deverah ser parado
 */
function pararAnimacao_p4(raio) {
	var applet = document.ggbApplet;
	
	applet.stopAnimation();
	applet.setAnimating('Raio1',false);
	applet.setAnimating('Raio2',false);
	applet.setAnimating('Raio3',false);
	applet.setValue('Raio1',1);				//coloca Raio1 no final

	if(raio == 2) {
		applet.setVisible('u', false);			//esconde vetor (raio2)
		var angulo = applet.getValueString('γ'); //pega o valor do angulo. "γ = 49.69°"
		angulo = angulo.substring(4, 9);
		angulo = angulo.replace('°', '');		//troca o ° (grau) pro espaco vazio.
		//alert(alpha);
		angulo = Math.round(angulo);		
		applet.setVisible('γ', true);			//mostra angulo de saida do raio2
	}
	
	if(raio == 3) {
		applet.setVisible('w', false);			//esconde vetor (raio3)
		applet.setVisible('ε', true);			//mostra angulo de saida do raio3
		var angulo = applet.getValueString('ε'); //pega o valor do angulo. "γ = 49.69°"
		angulo = angulo.substring(4, 9);
		angulo = angulo.replace('°', '');		//troca o ° (grau) pro espaco vazio.
		//alert(alpha);
		angulo = Math.round(angulo);		
	}
}

/**********************
 * Funcoes de Auxilio *
 **********************/
/**
 * Funcao que calcula o angulo de saida
 * @param {Object} anguloEntrada	angulo de incidencia . Virah em graus.
 * @return	anguloSaida	retorna o angulo de saida em graus
 */
function calculaAnguloSaida(anguloEntrada) {
	
	var anguloEntrada = grausParaRadianos(anguloEntrada);	//converte o angulo de incidencia de graus para radianos
	var anguloSaida = Math.asin(0.75 * Math.sin(anguloEntrada));

	anguloSaida = radianosParaGraus(anguloSaida);		//converte para graus

	return anguloSaida;
}

/**
 * Seta visivel os pontos que foram respondidos corretamente. Se estiverem errados, volta a ficar invisivel.
 * @param {Object} nome			nome do ponto que serah mostrado
 * @param {Object} x			coord x ponto que serah mostrado
 * @param {Object} y			coord y ponto que serah mostrado
 * @param {Object} condicao		condicao para mostrar o ponto, true ou false
 */
function plotarPonto(nome, x, y, condicao) {
	var applet = document.ggbApplet;
	applet.deleteObject(nome);
	if(condicao) {
		setResp(nome+'x',x);
		setResp(nome+'y',y);
		applet.evalCommand(nome+'=('+x+','+y+')')
		applet.setColor(nome,255,0,0);
		applet.setFixed(nome,true);
		applet.setLabelStyle(nome,2);
		applet.setLabelVisible(nome, true);
		applet.setVisible(nome, true);
	} else {
		applet.setVisible(nome, false);
	}
}

/**
 * Traca a reta dos pontos preenchidos na Atividade 1 Parte 2.
 */
function tracarReta() {
	var applet = document.ggbApplet;
	plotarPonto('A', getResp('Ax'), getResp('Ay'), true);
	plotarPonto('B', getResp('Bx'), getResp('By'), true);
	plotarPonto('C', getResp('Cx'), getResp('Cy'), true);
	plotarPonto('D', getResp('Dx'), getResp('Dy'), true);
	plotarPonto('E', getResp('Ex'), getResp('Ey'), true);
	plotarPonto('F', getResp('Fx'), getResp('Fy'), true);
	plotarPonto('G', getResp('Gx'), getResp('Gy'), true);
	applet.evalCommand('a = Ray[A, G]');
}

/**
 * Converte um valor de radianos para graus
 * @param {Object} valor	valor em radianos a ser convertido
 */
function radianosParaGraus(valor) {
	var angulo = valor * (180 / Math.PI);
	
	return angulo;
}

/**
 * Converte um valor de graus pra radianos
 * @param {Object} valor	valor em graus a ser convertido
 */
function grausParaRadianos(valor) {
	var angulo = valor * (Math.PI / 180);

	return angulo;	
}

/**
 * Mostra os pontos de auxílio para a A2_P1.
 */
function mostrarPontos() {
	var applet = document.ggbApplet;
	if (document.getElementById('checkBoxA2_P1').checked) {
		applet.setVisible('A', true);
		applet.setVisible('D', true);
		applet.setVisible('H', true);
		applet.setVisible('J', true);
		applet.setVisible('M', true);
		applet.setVisible('P', true);
	} else {
		applet.setVisible('A', false);
		applet.setVisible('D', false);
		applet.setVisible('H', false);
		applet.setVisible('J', false);
		applet.setVisible('M', false);
		applet.setVisible('P', false);
	}
}

/**
 * Os pontos do applet da a1_p1 estao invisiveis. Essa funcao dixa visivel.
 */
function mostrarPonto(ponto,visivel) {
	var applet = document.ggbApplet;
	if(visivel) {
		applet.setVisible(ponto, true);
	} else {
		applet.setVisible(ponto, false);
	}
	 
}

function mostrarAnguloDesvio() {
	var applet = document.ggbApplet;
	if (document.getElementById('checkBoxA3_P1').checked) {
		applet.setValue('mostra', 1);
	} else {
		applet.setValue('mostra', 0);
	}
}

/**
 * Codigo pego do jogo do maximo.
 */
function setAtividade(nome,estado,forcar) {
	if (forcar == undefined) {
		forcar=false;
	}
	
	if (!forcar) {
		if ((getResp(nome)<estado) || getResp(nome)=='') {
			setResp(nome,estado);
		}
	} else {
		setResp(nome,estado);
	}
}

function valida(valor) {
	valor = valor.replace('.',',');
	if ((valor==null) || (valor=='undefined')) {
		return '';
	}
	return valor;
}

function validaRadio(string) {
	if(string == 'true') {
		return true;
	}
	return false;
	
}

