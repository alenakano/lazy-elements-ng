# Proof of concept - Elements and remote lazy load

Esse projeto busca explorar a viabilidade técnica de se consumir um projeto Angular de forma remota por um outro projeto angular. O projeto que consumirá o outro é aqui chamado de `fed-core`. O projeto que será consumido será chamado de `foo`.

## Projeto foo
O projeto `foo` é constituído de um projeto angular que possui como dependência o elemento **mat-card** da biblioteca *Angular Material*, ou seja, em seu módulo há um import do módulo do angular material para que se possa utilizar o elemento html customizado mat-card. Além disso, esse projeto possui em seu módulo *app-module.ts* toda a configuração para que se transforme em um **web component**, ou seja, elemento nativo HTML que pode ser interpretado pelo browser/outro framework de desenvolvimento - React, VueJS, etc. [Saiba mais dos elements na documentação oficial](https://angular.io/api/elements) e [nessa página contendo um hands on](https://blog.bitsrc.io/using-angular-elements-why-and-how-part-1-35f7fd4f0457). O seu build gera um web component e com um único arquivo (*main-es5.js*) que ao ser importado em outro projeto, pode ser utilizado por meio de seu selector HTML configurado no app.module.ts (nesse caso, o **app-card**).

## Projeto fed-core
O `fed-core` se comportará como a aplicação principal que consumirá o projeto foo já transformado em web component. Além disso, ele pode passar um valor por meio do campo *name* e receberá o evento do campo *likeEvent* presentes na tag html do elemento *app-card* presente no arquivo app.component.html. Além disso esse projeto utiliza a biblioteca **@angular-extensions/elements** para realizar todo o processo de lazy load da tag no projeto do angular por meio da syntatic sugar (axLazyElement) que recebe o endereço do *main-es5.js* fornecido remotamente.
Mais informações do projeto pela [documentação oficia](https://angular-extensions.github.io/elements/#/home) e [por artigo de seu criador](https://medium.com/@tomastrajan/the-best-way-to-lazy-load-angular-elements-97a51a5c2007).

## Instalação e uso
Entrar nas pastas **fed-core** e **foo** pela linha de comando e realizar a instalação das dependências por meio do comando **npm install** nos dois projetos. Após a instalação das dependências, iniciar o servidor do projeto `foo` e do projeto `fed-core` com o comando **npm start** em duas command lines diferentes. Acessar o resultado no endereço **http://localhost:4200**.