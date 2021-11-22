
<h1 align="center">Automação com Webpack</h1>
<br>
<p align="center">
  <a href="#-tecnologias">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-projeto">Projeto</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-ambiente">Ambiente</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-autor">Autor</a>&nbsp;&nbsp;&nbsp;
</p>
<br>
<hr>

## 🚀 Tecnologias

Esse projeto foi desenvolvido com as seguintes tecnologias:

- HTML
- SASS
- JS

## 💻 Projeto

O projeto foi desenvolvido no intuito de ter um ambiente de desenvolvimento automatizado, com poucos comandos poder gerar um servidor com hot reload e a compilação/pré processamento de outras linguagens.
Vamos ver a configuração e o que os plugins do webpack fazem:

- **Babel**: O babel faz o papel de transcompilar o JS moderno para um JS mais antigo, por exemplo, temos o uso de const e imports, mas browsers mais antigos não tem suporte, o babel automáticamente faz a transcompilação desse código novo, para código antigo.
- **CSS-Loader/mini-css-extract-plugin/sass-loader**: Todos esses basicamente fazem com que eu possa usar `import` sass. E isso é carregado pelo JS.
- **html-webpack-plugin**: Este plugin gera um novo html a partir de outro, ele serve para tanto fazer o uglify para modo de produção, mas também faz o auto `import` de arquivos que vão mudar, como o `bundle` do js.
- **file-loader**: Este é bem simples, quando importamos uma imagem (jpg, gif, svg, etc) ele emite um arquivo para o diretório de saída para seu carregamento.
- **postcss**: Vemos os `loaders` das folhas de estilos, agora o postcss faz o trabalho de pré ou pós processar o SASS ou outro framework que podemos utilizar. Além de transformar uma folha de estilo escrita em algum framework (Less, SASS, Stylus, etc) em CSS, ele também faz o autoprefix e também fallbacks para versões antigas de browsers.
- **clean-webpack-plugin**: Este plugin é bem simples, serve para limpar o diretório de `output` do nosso webpack.
- **webpack**: O webpack tem o processo de juntar todos esses tipos de configurações e montar um diretório de saída com todos os arquivos transformados. Ele faz o `bundle` do JS, que é o processo de juntar todos os arquivos JS em apenas 1.

<br>

- Outras dependencias para desenvolvimento:
  + **eslint**: Ele analisa o código em desenvolvimento para encontrar problemas e também manter convenções no seu código. Não esqueça de usar a extensão ESlint no VSCode.
  + **prettier**: Faz o conjunto com o ESlint para seu código ficar ainda mais bonito, o prettier faz a formatação automáticamente ao salvar. 

## 🛠️ Ambiente

As configurações de todos os plugins e dependencias estão especificadas no `webpack.config.js` e também configurações adjacentes na raiz do projeto. Para iniciar o ambiente de desenvolvimento precisa devemos:

```bash
# clone este repositório
$ git clone https://github.com/MrEzequiel/webpack-automacao.git

# entre no diretório
$ cd webpack-automacao

# instale todas as dependências
$ yarn install
```

Temos 2 tipos de scripts, você pode entrar no modo de desenvolvimento, onde os erros ficaram visiveis no console. Para entrar em modo de desenvolvimento você precisa:

```bash
# rode esses 2 scripts simultâneos
$ yarn start
$ yarn watch
```

Para o mode de produção você precisa:

```bash
# rode esse script
$ yarn build
```

## 👨‍💻 Autor

- Github: <a href="https://github.com/">MrEzequiel
  </a>
- Instagram: <a href="https://www.instagram.com/ezequield3v/">@ezequield3v</a>
- Linkedin: <a href="https://www.linkedin.com/in/ezequiel-soares-da-silva-b64a64207">Ezequiel Soares</a>

<hr>
<br>
<h2 align="center">Feito com ♥ por Ezequiel</h2>
