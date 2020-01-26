/*
	Padronização do ID: 
		- [['p/parte','q/questao','/item'],'_'] vai gerar um id do tipo p1_q2_1
		- [['p/parte','q/questao','/itemletra'],'_'] vai gerar um id do tipo p1_q2_a
	Palavras-chave: questao, parte, item, itemletra, subitem
	Devem ser precedidas de uma barra '/'.
	A palavra-chave subitem será usada somente em questões com mais de um campo
*/
 
var IdPadrao = [['parte/parte','q/questao','/itemletra','/subitem'],'_'];

/*
	Questoes
	
	Aqui ficam concentrados todos os conteudos das questões da atividade!
	Veja que está separado por Parte/Questão/Item
	
	ATENÇÃO: Cada tipo possui um formato de entrada característico.
*/

var Partes = ['1', '2'];
var nomeSoft = 'halos1';

var Questoes = 
[
	{//Parte 1
		parte1_q1: //Questão 1
		{
			enunciadoGeral: 'Movimente o ponto C e observe a distância total percorrida pelo raio em cada trajetória.',
			itens:
			[
				{//A
					tipo: 'input',
					corrigir: corrige_q_1_a,
					depois: 'cm',
					enunciado: 'Qual é, aproximadamente, a menor distância possível de ser percorrida?',
					msgErro: 'Basta movimentar o ponto C e ver como a distância total se comporta.'
				},
				{//B
					tipo: 'multipla_escolha',
					corrigir: corrige_q_1_b,
					dados:	[
						{value: '1', label: 'O ângulo de incidência é igual ao dobro do ângulo de reflexão'},
						{value: '2', label: 'O ângulo de reflexão é igual ao dobro do ângulo de incidência'},
						{value: '3', label: 'Os ângulos possuem aproximadamente a mesma medida'},
						{value: '4', label: 'Os ângulos são complementares'},
						{value: '5', label: 'Os ângulos são suplementares'}
					],
					enunciado: 'Clique na opção "Mostrar Ângulos" para ver os ângulos de incidência e de reflexão do raio. O que você pode observar em relação a eles quando a distância total é a menor possível?',
					msgErro: 'Lembre-se de posicionar C de tal modo que a distância total seja a menor possível. Então compare os valores dos ângulos &#945; e &#946;.'
				}
			]
		}
	},
	{//Parte 2
		parte2_q2: //Questão 2
		{
			enunciadoGeral: 'Movimente o ponto C e observe o tempo total necessário para completar cada trajetória.',
			itens:
			[
				{//A
					tipo: 'input',
					corrigir: corrige_q_2_a,
					depois: 'microssegundos',
					enunciado: 'Qual o menor tempo possível para fazer o trajeto?',
					msgErro: 'Basta movimentar o ponto C e obervar a variação do tempo total.'
				},
				{//B
					tipo: 'multiplo_input_com_unidade',
					corrigir: corrige_q_2_b,
					enunciado: 'Quais são os ângulos de incidência (alfa) e de refração (beta)?',
					dados:	[
							 [{antes: '&#945; = ', depois:'&#176;'}],
							 [{antes: '&#946; = ', depois:'&#176;'}]
							],
					msgErro: 'Mantenha o ponto C no local que minimiza o tempo da trajetória. Então marque a opção "Ver ângulos".',
					msgAjuda: 'Marque a opção "Ver ângulos", para visualizar os ângulos mencionados na questão.'
				}
			]
		}
	}
]

/*
	Bloco de Notas
	
	Nesse Array ficam os dados que aparecem no Bloquinho de notas.
	Se você for na linha 35 do exemplo_correcao.js verá que está sendo criada uma instância
	de "Blocao", uma classe de bloco de notas que permite tabelas no conteúdo. Se não for
	usar tabelas no Software, altere para "Bloco". Ambas classes utilizam a variavel global
	MeuBloco para preencher o seu conteúdo.
*/

var MeuBloco = new Array();

Event.observe(window, 'load', function(){
	BlocoNotas = new Blocao();
});