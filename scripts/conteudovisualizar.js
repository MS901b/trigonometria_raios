	var codigo_do_software = "halos1";
	var nome_do_software = "Trigonometria e Raios Luminosos";
	var tipo = "software v2.0";
	
	
	var Impressao = $H({
		software: {
			titulo: 'O software',
			id: 'software',
			arquivo: 'index.html',
			conteudo: 'Essa é o material para ser utilizado diretamente pelos alunos.'
		},
		guia_professor_tela: {
			titulo: 'Guia do Professor - Visualização em Tela',
			id: 'guia1',
			arquivo: 'guia/tela.pdf',
			conteudo: 'Essa é a versão do Guia do Professor para visualiação em tela (formato PDF).'
		},
		guia_professor_caseiro: {
			titulo: 'Guia do Professor - Impressão Caseira',
			id: 'guia2',
			arquivo: 'guia/impressao.pdf',
			conteudo: 'Essa é a versão do Guia do Professor adequada para impressão caseira (formato PDF).'
		}
	});
	var Visualizacao = $H({
	});
	var FichaTecnica = $H({
	
		tema: {
			titulo: 'Tema',
			conteudo: 'Geometria / Som, Imagem e Informação'
		},
		sinopse: {
			titulo: 'Sinopse',
			conteudo: 'O software simula a emissão e refração de raios luminosos, permitindo ao aluno obter e compreender a Lei de Snell matematica e fisicamente.'
		},
		conteudos: {
			titulo: 'Conteúdo',
			conteudo: 'Trigonometria; software educacional; seno; lei de snell; refração; raios luminosos; princípio de fermat'
		},
		objetivos: {
			titulo: 'Objetivos',
			conteudo: 'Investigar o comportamento de raio luminosos em meios refratários através de relações trigonométricas.'
		},
		duracao: {
			titulo: 'Duração',
			conteudo: 'Uma aula dupla.'
		},
		requisitos: {
			titulo: 'Requisitos de software',
			conteudo: 'Navegador moderno (Chrome 75+ ou Firefox 66.0+). O suporte não é garantido para dispositivos mobiles.'
		},
		acessibilidade: {
			titulo: 'Restrições de acessibilidade',
			conteudo: 'Não há suporte para navegação exclusiva via teclado e recurso nativo de alto contraste.'
		}
/*,
		recursos: {
			titulo: 'Recursos relacionados',
			conteudo: 'Vídeo: O Crime da Rua do Gasômetro;<br />Áudio: Fraude 171;<br/>Software: Probabilidade com Urnas'
		}*/
	});
	
	var como_usar = 'Aqui você encontra três arquivos: O Software, O Guia do Professor para visualização em Tela e o Guia do Professor para impressão caseira. O Software é o material que deve ser utilizado diretamente pelos seus alunos, enquanto que o Guia do Professor traz alguns aprofundamentos teóricos e recomendações metodológicas para o uso deste material.';
	var sobre_projeto = 'M3 &ndash; Matemática MultiMídia é uma coleção de materiais didáticos disponíveis em mídias digitais para o uso do professor de matemática do ensino médio no Brasil e facilitar o ensino-aprendizagem. Composta por áudios, experimentos, softwares e vídeos, a coleção foi desenvolvida, entre 2008 e 2010, por uma grande equipe de professores e estudantes da Unicamp e vários colaboradores, tendo contado com recursos do FNDE, do MEC e do MCT. Para maiores detalhes sobre a utilização da coleção M3&nbsp;&ndash;&nbsp;Matemática Multimídia, consulte o Guia do Professor. A versão 2.0 foi lançada em 2020, como uma medida para garantir que o software tivesse suporte aos novos sistemas.';
	var sobre_licensas = 'O Guia do Professor está licenciado sob uma licença Creative Commons, e o Software está licenciado sob uma licença GPL v. 2.';
	var link_fnde    = 'http://www.fnde.gov.br/';
	var link_seed    = 'http://portal.mec.gov.br/seed';
	var link_mct     = 'http://www.mct.gov.br/';
	var link_mec     = 'http://www.mec.gov.br/';
	var link_governo = 'http://www.brasil.gov.br/';
	var site_projeto = 'http://m3.ime.unicamp.br/portal/';
	