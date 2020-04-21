var IdPadrao = [
    ['parte/parte', 'q/questao', '/itemletra', '/subitem'], '_'
];

var Partes = ['1'];
var nomeSoft = 'halos1';

var Questoes = [{
    parte1_q1: {
        enunciadoGeral: '',
        itens: [{ //A
            tipo: 'instrucao',
            corrigir: corrige_q_1_a,
            enunciado: 'Posicione a altura da água de tal modo que o raio de luz passe pelo vértice superior direito do dado.',
            msgErro: 'Movimente o ponto F e observe o raio luminoso que sai da xícara.'
        }]
    }
}]

/*
	Bloco de Notas
	
	Nesse Array ficam os dados que aparecem no Bloquinho de notas.
	Se você for na linha 35 do exemplo_correcao.js verá que está sendo criada uma instância
	de "Blocao", uma classe de bloco de notas que permite tabelas no conteúdo. Se não for
	usar tabelas no Software, altere para "Bloco". Ambas classes utilizam a variavel global
	MeuBloco para preencher o seu conteúdo.
*/

var MeuBloco = new Array();
Event.observe(window, 'load', function() {
    BlocoNotas = new Bloco();
});