<div> 
  <h1 align="center">Calculadora - Projeto JS👨‍💻</h1> 
</div>

<div>
  <h3 align="center">Aplicação de uma calculadora funcional</h3>
</div>

<div align='center'>
	<img src= "https://user-images.githubusercontent.com/112639055/234562771-72c59152-fdf1-48ff-ab93-5f50705dd252.png" width='850px'>
</div>


## Ferramentas utilizadas🛠️

<div>
	<p>Para a elaboração do projeto, foram usadas as tecnologias: </p>
</div>

<ul>
 	<li>
  		<img align="center" width="30" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-plain.svg"> JavaScript
 	</li>
	<br>
	<li> 
		<img align="center" width="30" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg"> HTML
 	</li>
	<br>
 	<li> 
  		<img align="center" width="30" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg"> CSS 
 	</li>

</ul>

<div>
	<h2>Sobre o projeto📃</h2>
</div>
	
<div>
	<p>Projeto feito com intuito de ser uma calculadora simples, mas funcional. Para treinar e aprimorar conhecimentos em JavaScript como funções e métodos, conceitos com if e else, e apresentação de resultados e valores.</p>
	<p>A aplicação consiste em uma calculadora onde o usuário passa os valores clicando nos botões e, em seguida, clicando no botão de igual(=) mostra o resultado da operação. Também com botões de apagar caracters e limpar o prompt.</p>
</div>

### Acessar projeto: ✈

◻<a href="https://willianol.github.io/Calculadora-JS/assets/index.html">Calculadora JavaScript</a>


## <img align="center" width="30" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-plain.svg"> JavaScript

### Elementos de construção
<div>
	<p>Logo ao inicio do código, foram criadas 2 constantes para selecionar os elementos importamtes para a construção da aplicação. Que são:</p>
	<ul>
		<li><strong>result</strong> - Seleciona a div onde serão colocados os digitos e os resultados;</li>
		<li><strong>calculatorBtns</strong> - Seleciona todos os botões da calculadora;</li>
	</ul>
</div>
	
<div align="center">
	<img align="center" src="https://user-images.githubusercontent.com/112639055/235151569-7bdae58a-0584-4e18-b78b-63d25d10ec40.png" width="700px">
</div>


&nbsp;
&nbsp;

### Exibindo caracteres clicados
	
<div>
	<p>Cada botão da calculadora tem a classe <strong>"btn"</strong>, através disso foram armazenados na constante <strong>calculatorBtns.</strong> Com o método forEach, foi adicionada a função <strong>"addCaractersInResult"</strong> com evento de click a cada botão, assim a função será disparada a cada vez que qualquer botão for clicado.</p>
</div>
<div align="center">
	<img align="center" src="https://user-images.githubusercontent.com/112639055/234861465-03eb5025-8168-4000-89b3-b57ae110b7b3.png" width="700px">
</div>

&nbsp;

<div>
	<p>Na função, foi passado o parâmetro <strong>"button"</strong>. Logo após, foi criado a vareável <strong>"caracter"</strong> do tipo let que está armazenando o parâmetro button com o  <strong>".target"</strong>, para <strong>armazenar exatamente qual botão está sendo clicado</strong>, retornando a tag button com suas classes. E para pegar o caracter de cada botão, foi usado o <strong>".innerHTML".</strong></p>
</div>
	
<div align="center">
	<img align="center" src="https://user-images.githubusercontent.com/112639055/234867806-47491e14-f3dc-406c-9f49-59e66e7cddb8.png" width="700px">
	<img align="center" src="https://user-images.githubusercontent.com/112639055/234868939-0b78ffa3-c4f1-4e3c-844e-c0b7c8a95afb.png" width="700px">
</div>

&nbsp;

<div>
	<p>Logo após, foi criada uma estrutura condicional "if" para fazer algumas alterações. Tais alterações são: <strong>Trocar "X" por "*" e a virgúla(,) por ponto(.).</strong> Isso porque com "X" e "," não é possivel realizar as operações, sendo nescessário <strong>alterar seus valores para fazelas.</strong></p>
	<p>Sendo assim, na estrutura foi usada a seguinte lógica: Se o botão clicado(armazenado na vareável "caracter") for X, a vareável recebe "*". Se for "," armazene ".";<p>	
</div>

<div align="center">
	<img align="center" src="https://user-images.githubusercontent.com/112639055/235013039-e2e42d4d-0096-4673-a36c-e53d4f11b12b.png" width="700px">
</div>

&nbsp;

<div>
	<p>Ainda na função, antes de colocar os caracteres na tela da calculadora. É feita algumas verificações com a estrutura condicional para a execução de algumas funções expecíficas da calculadora, que são: <strong>Apagar todos os caracteres</strong>, <strong>apagar o último caracter digitado</strong> e <strong>executar as operações.</strong></p>
	<p>Foi feita da seguinte maneira: Se o caracter for <strong>AC, vai executar a função "clearAllCaracters()"</strong>. Se o caracter for <strong>C, vai executar a função "deletCaracter()"</strong> e se for o sinal de <strong>"=" vai executar a função "doOperation()"</strong>; Todas elas tem o return para não colocar os caracteres na tela da calculadora, encerrando a função de colocar os digitos e executando a função do caracter.<p>
	<p>Se o botão clicado não estiver relacionado com as condições acima, vai exibilo na tela da calculadora.</p>
</div>

<div align="center">
	<img align="center" src="https://user-images.githubusercontent.com/112639055/235022172-e41018b8-dfb5-4038-b06f-09573315a734.png" width="700px">
	<img align="center" src="https://user-images.githubusercontent.com/112639055/235016410-2ce12cb6-1275-4f35-82ea-13830d051ea1.png" width="700px">
</div>

&nbsp;
&nbsp;

### Funções da calculadora
#### Apagar todos os caracteres

<div>
	<p>Para fazer a função onde se apaga todo o conteúdo digitado na calculadora, é bem simples. Ao clicar no botão <strong>"AC" é disparada a função "clearAllCaracters()"</strong>, que nela atribui-se um valor a vareável result(tela onde fica os digitos) <strong>com o .innerHTML como "vazio"</strong>. Limpando assim os digitos da calculadora.</p>
</div>

<div align="center">
	<img align="center" src="https://user-images.githubusercontent.com/112639055/235141566-1ead7784-dad8-4da6-9171-9136f1c190b5.png" width="700px">
</div>

&nbsp;

#### Apagar último caracter clicado

<div>
	<p>Para apagar o ultimo caracter foi criada a função <strong>"deletCaracter()", que será disparada ao clicar no botão C</strong>. Na função, foi deifnida a constante <strong>"allCaracters" que armazena todos os caracteres</strong>. Depois, com o "result.innerHTML" foi definido o que apareceria na tela, onde recebe o <strong>total de caracteres(allCaracters) com o método "subString"</strong>. O método consistem em pegar parte de uma string baseada em seu indicie inicial e final, usando a seguinte lógica: Apartir do index 0, e até o total de letras do allCaracter(.length) com -1, fazendo com que se exclua o ultimo caracter.</p>
</div>

<div align="center">
	<img align="center" src="https://user-images.githubusercontent.com/112639055/235147051-f712e8ef-4fdc-4e8d-bdb8-6ffdbd82f8d4.png" width="700px">
</div>

&nbsp;

#### Realizar as operações

<div>
	<p>Ao clicar no botão de <strong>igual(=) é disparada a função "doOperation()"</strong>, que será responsável por realizar as operações. Na função, foi usada uma estrutura condicional if para <strong>verificar se há algo digitado na calculadora</strong>, se não tiver algo digitado, não executa a função. Apartir dai é simples, usando o método <strong>"eval()"</strong> vai executar a operação apartir de uma string, que no caso são os números digitados.</p>
</div>

<div align="center">
	<img align="center" src="https://user-images.githubusercontent.com/112639055/235153981-22698e9c-2401-4a2b-a695-1da40ffb5a43.png" width="700px">
	<img align="center" src="https://user-images.githubusercontent.com/112639055/235154439-60e71118-aa73-410c-a358-6e53c9de2cae.jpeg" width="700px">
</div>














