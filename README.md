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

#

### <img align="center" width="30" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-plain.svg"> JavaScript

#### Elementos de construção
<div>
	<p>Logo ao inicio do código, foram criadas 3 constantes para selecionar os elementos importamtes para a construção da aplicação. Que são:</p>
	<ul>
		<li><strong>result</strong> - Seleciona a div onde serão colocados os digitos e os resultados;</li>
		<li><strong>calculatorBtns</strong> - Seleciona todos os botões da calculadora;</li>
		<li><strong>operationBtn</strong> - Seleciona especificamente o botão para realizar as operações(=);</li>
	</ul>
</div>
	
<div align="center">
	<img align="center" src="https://user-images.githubusercontent.com/112639055/234850084-825f711f-db35-43a5-a80e-479d7879f5d6.png" width="700px">
</div>

&nbsp;
&nbsp;

#### Exibindo caracteres clicados
	
<div>
	<p>Cada botão da calculadora tem a classe <strong>"btn"</strong>, através disso foram armazenados na constante <strong>calculatorBtns.</strong> Com o método forEach, foi adicionada a função <strong>"addCaractersInResult"</strong> com evento de click a cada botão, assim a função será disparada a cada vez que qualquer botão for clicado.</p>
</div>
<div align="center">
	<img align="center" src="https://user-images.githubusercontent.com/112639055/234861465-03eb5025-8168-4000-89b3-b57ae110b7b3.png" width="700px">
</div>

&nbsp;

<div>
	<p>Na função, foi passado o parâmetro "button". Logo após, foi criado a vareável "caracter" do tipo let que está armazenando o parâmetro button com o  ".target", para armazenar exatamente qual botão está sendo clicado, retornando a tag button com suas classes. E para pegar o caracter de cada botão, foi usado o ".innerHTML".</p>
</div>
	
<div align="center">
	<img align="center" src="https://user-images.githubusercontent.com/112639055/234867806-47491e14-f3dc-406c-9f49-59e66e7cddb8.png" width="700px">
	<img align="center" src="https://user-images.githubusercontent.com/112639055/234868939-0b78ffa3-c4f1-4e3c-844e-c0b7c8a95afb.png" width="700px">
</div>

&nbsp;

<div>
	<p>Logo após, foi criada uma estrutura condicional "if" para fazer algumas alterações. Tais alterações são: Trocar "X" por "*" e a virgúla(,) por ponto(.). Isso porque com "X" e "," não é possivel realizar as operações, sendo nescessário alterar seus valores para fazelas.</p>
	<p>Sendo assim, na estrutura foi usada a seguinte lógica: Se o botão clicado(armazenado na vareável "caracter") for X, a vareável recebe "*". Se for "," armazene ".".<p>	
</div>

<div align="center">
	<img align="center" src="https://user-images.githubusercontent.com/112639055/235013039-e2e42d4d-0096-4673-a36c-e53d4f11b12b.png" width="700px">
</div>















	
	
	
	
	
	
