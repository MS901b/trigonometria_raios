/*
	Padronização do ID: 
		- [['p/parte','q/questao','/item'],'_'] vai gerar um id do tipo p1_q2_1
		- [['p/parte','q/questao','/itemletra'],'_'] vai gerar um id do tipo p1_q2_a
	Palavras-chave: questao, parte, item, itemletra, subitem
	Devem ser precedidas de uma barra '/'.
	A palavra-chave subitem será usada somente em questões com mais de um campo
*/

var IdPadrao = [
    ['parte/parte', 'q/questao', '/itemletra', '/subitem'], '_'
];

/*
	Questoes
	
	Aqui ficam concentrados todos os conteudos das questões da atividade!
	Veja que está separado por Parte/Questão/Item
	
	ATENÇÃO: Cada tipo possui um formato de entrada característico.
*/

var Partes = ['1', '2', '3', '4', '5'];
var nomeSoft = 'halos1';

var Questoes = [{ //Parte 1
        parte1_q1: //Questão 1
        {
            enunciadoGeral: 'Para entender como funciona a ferramenta ao lado, movimente o ponto azul e escolha um ângulo qualquer.',
            itens: [

                { //A
                    tipo: 'input',
                    depois: 'graus',
                    corrigir: corrige_q_1_a,
                    enunciado: 'Qual foi o ângulo que você escolheu?',
                    msgErro: 'É o ângulo que aparece acima da superfície, na ferramenta ao lado.'
                },
                { //B
                    tipo: 'input',
                    depois: 'graus',
                    corrigir: corrige_q_1_b,
                    enunciado: 'Agora, dispare o raio e responda: qual foi o ângulo de saída?',
                    msgErro: 'Aperte o botão Emitir Raio e veja o ângulo que aparece abaixo da superfície, na ferramenta ao lado.'
                }
            ]
        },
        parte1_q2: //Questão 2
        {
            enunciadoGeral: 'Agora, responda: qual é o ângulo de saída quando o ângulo de incidência é igual a:',
            itens: [{ //A
                tipo: 'multiplo_input_com_unidade',
                corrigir: corrige_q_2_a,
                enunciado: '',
                dados: [
                    [{ antes: '15&#176; :', depois: 'graus' }],
                    [{ antes: '30&#176; :', depois: 'graus' }],
                    [{ antes: '45&#176; :', depois: 'graus' }],
                    [{ antes: '60&#176; :', depois: 'graus' }],
                    [{ antes: '75&#176; :', depois: 'graus' }]
                ],
                msgErro: 'Em cada caso, ajuste o ângulo de incidência para cada um deles, aperte o botão Emitir Raio e, a seguir, observe o ângulo de saída.'
            }]
        },
        parte1_q3: //Questão 3
        {
            enunciadoGeral: 'Casos limites, mesmo quando geram interpretações físicas dúbias, são sempre muito úteis para a compreensão de fenômenos naturais.',
            itens: [{ //A
                    tipo: 'input',
                    depois: 'graus',
                    corrigir: corrige_q_3_a,
                    enunciado: 'Qual será o ângulo de saída quando o de incidência for igual a 0&#176;?',
                    msgErro: 'Nesse caso, a luz tem de passar diretamente.'
                },
                { //B
                    tipo: 'input',
                    depois: 'graus',
                    corrigir: corrige_q_3_b,
                    enunciado: 'Qual é o maior ângulo de saída possível?',
                    msgErro: 'Esse ângulo existirá enquanto existir refração.'
                }
            ]
        }
    },
    { //Parte 2
        parte2_q4: //Questão 4
        {
            enunciadoGeral: 'Utilizando uma calculadora, calcule:',
            itens: [{ //A
                tipo: 'multiplo_input',
                corrigir: corrige_q_4_a,
                enunciado: '',
                dados: [
                    [{ tipo: 'normal', label: 'sen(15&#176;)' }],
                    [{ tipo: 'normal', label: 'sen(11&#176;)' }]
                ],
                msgErro: 'Considere pelo menos duas casas decimais.'
            }]
        },
        parte2_q5: //Questão 5
        {
            enunciadoGeral: 'A tabela abaixo recupera os valores da sua resposta à questão anterior. Preencha as duas últimas colunas dessa tabela com os respectívos senos dos ângulos de incidência (&#945;) e de saída (&#946).',
            itens: [{ //A
                tipo: 'tabela',
                corrigir: corrige_q_5_a,
                tamanho: 'grande',
                enunciado: '',
                dados: [
                    [{ value: '&#945;', largura: 4 }, { value: '&#946', largura: 4 }, { value: 'Seno de &#945;', largura: 4 }, { value: 'Seno de &#946', largura: 4 }], //header
                    [{ value: '0', tipo: 'texto' }, { value: '0', tipo: 'texto' }, { tipo: 'input' }, { tipo: 'input' }],
                    [{ value: '15', tipo: 'texto' }, { value: '11', tipo: 'texto' }, { value: '<span id="sen15_dinamico"> </span>', tipo: 'texto' }, { value: '<span id="sen11_dinamico"> </span>', tipo: 'texto' }],
                    [{ value: '30', tipo: 'texto' }, { value: '22', tipo: 'texto' }, { tipo: 'input' }, { tipo: 'input' }],
                    [{ value: '45', tipo: 'texto' }, { value: '32', tipo: 'texto' }, { tipo: 'input' }, { tipo: 'input' }],
                    [{ value: '60', tipo: 'texto' }, { value: '40', tipo: 'texto' }, { tipo: 'input' }, { tipo: 'input' }],
                    [{ value: '75', tipo: 'texto' }, { value: '46', tipo: 'texto' }, { tipo: 'input' }, { tipo: 'input' }],
                    [{ value: '90', tipo: 'texto' }, { value: '49', tipo: 'texto' }, { tipo: 'input' }, { tipo: 'input' }]
                ],
                msgErro: 'Considere pelo menos duas casas decimais em cada resposta.'
            }]
        }
    },
    { //Parte 3
        parte3_q6: //Questão 6
        {
            enunciadoGeral: '',
            itens: [{ //A
                tipo: 'input',
                corrigir: corrige_q_6_a,
                enunciado: 'Escolha um dos pontos e substitua na relação acima. Use a calculadora. Qual é o valor de k?',
                msgErro: 'Observe os valores do seno dos ângulos no gráfico ao lado, onde os valores dos eixos x e y são respectivamente sen(α) e sen(β).  Por fim, divida um pelo outro. Se precisar, use a calculadora',
                msgAjuda: 'Considere 2 casas decimais.'
            }]
        },
        parte3_q7: //Questão 7
        {
            enunciadoGeral: '',
            itens: [{ //A
                    tipo: 'input',
                    corrigir: corrige_q_7_a,
                    enunciado: 'Qual é o valor do seno de &#946 quando &#945; é igual a 50&#176;?',
                    msgErro: 'Utilize a mesma equação apresentada acima. Não se esqueça que você já obteve o valor de k na questão anterior.',
                    msgAjuda: 'Considere pelo menos duas casas decimais.'
                },
                { //B
                    tipo: 'input',
                    depois: 'graus',
                    corrigir: corrige_q_7_b,
                    enunciado: 'Utilizando o botão arcsen ou sin<sup>-1</sup> da sua calculadora, calcule o valor de &#946 a partir da resposta do item anterior.',
                    msgErro: 'Se você sabe o valor do seno de um ângulo, você pode usar a função inversa para descobrir seu ângulo correspondente.',
                    msgAjuda: 'Arredonde para um número inteiro, em graus.'
                }
            ]
        },
        parte3_q8: //Questão 8
        {
            enunciadoGeral: '',
            itens: [{ //A
                tipo: 'input',
                depois: 'graus',
                corrigir: corrige_q_8_a,
                enunciado: 'Agora, calcule o ângulo de saída para um ângulo de incidência igual 40&#176;?',
                msgErro: 'Faça os mesmos passos das questões acima, mas, agora, utilize outro ângulo: 40&#176;',
                msgAjuda: 'Arredonde para um número inteiro, em graus.'
            }]
        }
    },
    { //Parte 4
        parte4_q9: //Questão 9
        {
            enunciadoGeral: 'Mova o <a id="ponto_azul">ponto azul</a> para a parte de baixo do sistema e responda: qual é o ângulo de saída quando o ângulo de incidência é igual a:',
            itens: [{ //A
                tipo: 'multiplo_input_com_unidade',
                corrigir: corrige_q_9_a,
                enunciado: '',
                dados: [
                    [{ antes: '15&#176; :', depois: 'graus' }],
                    [{ antes: '30&#176; :', depois: 'graus' }],
                    [{ antes: '45&#176; :', depois: 'graus' }]
                ],
                msgErro: 'Não esqueça de emitir o raio. Só então escreva o valor do novo ângulo de saída',
                msgAjuda: 'Dê sua resposta sem nenhuma casa decimal.'
            }]
        },
        parte4_q10: //Questão 10
        {
            enunciadoGeral: '',
            itens: [{ //A
                    tipo: 'input',
                    depois: 'graus',
                    corrigir: corrige_q_10_a,
                    enunciado: 'Emita um raio a partir do ar com um ângulo de 20&#176;. Qual é o ângulo de saída?',
                    msgErro: 'Na ferramenta ao lado, a parte de baixo representa a água. Já a parte de cima, o ar. Passe o ponto para a parte de cima até que o ângulo com a normal seja igual a 20&#176;. Feito isso, aperte o botão Emitir Raio e observe o ângulo de saída.',
                    msgAjuda: 'Arredonde para um número inteiro, em graus.'
                },
                { //B
                    tipo: 'input',
                    depois: 'graus',
                    corrigir: corrige_q_10_b,
                    enunciado: 'Agora, emita um raio a partir da água com um ângulo de incidência igual ao da resposta do item anterior (<span id="angulo_A1_Q10"></span>). Qual é o ângulo de saída?',
                    msgErro: 'Na ferramenta ao lado, a parte de baixo representa a água. Já a parte de cima, o ar. Passe o ponto para a parte de baixo até que o ângulo com a normal seja igual ao ângulo obtido na questão anterior. Feito isso, aperte o botão Emitir Raio e observe o ângulo de saída.',
                    msgAjuda: 'Arredonde para um número inteiro, em graus.'
                }
            ]
        },
        parte4_q11: //Questão 11
        {
            enunciadoGeral: '',
            itens: [{ //A
                    tipo: 'input',
                    depois: 'graus',
                    corrigir: corrige_q_11_a,
                    enunciado: 'Emita um raio a partir do ar com um ângulo de 40&#176;. Qual é o ângulo de saída?',
                    msgErro: 'Na ferramenta ao lado, a parte de baixo representa a água. Já a parte de cima, o ar. Passe o ponto para a parte de cima até que o ângulo com a normal seja igual a 40&#176;. Feito isso, aperte o botão Emitir Raio e observe o ângulo de saída.',
                    msgAjuda: 'Arredonde para um número inteiro, em graus.'
                },
                { //B
                    tipo: 'input',
                    depois: 'graus',
                    corrigir: corrige_q_11_b,
                    enunciado: 'Agora, emita um raio a partir da água com um ângulo de incidência igual ao da resposta do item anterior (<span id="angulo_A1_Q11"></span>). Qual é o ângulo de saída?',
                    msgErro: 'Na ferramenta ao lado, a parte de baixo representa a água. Já a parte de cima, o ar. Passe o ponto para a parte de baixo até que o ângulo com a normal seja igual ao ângulo obtido na questão anterior. Feito isso, aperte o botão Emitir Raio e observe o ângulo de saída.',
                    msgAjuda: 'Arredonde para um número inteiro, em graus.'
                }
            ]
        }
    },
    { //Parte 5
        parte5_q12: {
            enunciadoGeral: '',
            itens: [{ //A
                tipo: 'input',
                depois: 'graus',
                corrigir: corrige_q_12_a,
                enunciado: 'Movimente o ponto azul e responda: qual é o maior ângulo de incidência para o qual ainda ocorre refração?',
                msgErro: 'Observe que o ângulo de saída para o ar torna-se indefinido para alguns ângulos de incidência',
                msgAjuda: 'Movimente o ponto até que não haja mais refração, mas apenas reflexão.'
            }]
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

Event.observe(window, 'load', function() {
    BlocoNotas = new Bloco();
});
