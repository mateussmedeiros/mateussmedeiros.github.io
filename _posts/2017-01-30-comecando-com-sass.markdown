---
layout: post
title: "Começando com Sass"
date: 2017-01-30 20:19:00 -0300
author: Mateus Medeiros
description: Sass é um íncrivel pré-processador CSS, aprenda a usá-lo em seus projetos.
tags: 
- frontend
- gulp
- pre-processadores
categories:
- Pré-processadores
permalink: /comecando-com-sass/
---

Você já deve ter ouvido falar sobre pré-processadores CSS e como eles aumentam sua produtividade. O **Sass** foi o primeiro pré-processador que conheci e desde então tenho usado ele em todos os meus projetos. 

![Logo - Sass](/assets/img/logo-sass.png){: .center }

> Sass is the most mature, stable, and powerful professional grade CSS extension language in the world.

Nesse post, ensinarei como instalá-lo em sua máquina e algumas features desse íncrivel pré-processador. Então chega de delongas e vamos lá!

## Instalação

Para instalar o Sass, você precisa ter instalado em sua máquina o [Ruby](https://www.ruby-lang.org/pt/){:target="_blank"}. No site do Sass, [tem dois métodos de instalação](http://sass-lang.com/install){:target="_blank"}. 

Para esse tutorial, escolhi instalar usando o terminal. Então abra seu terminal e digite o comando:

{% highlight sh %}
gem install sass
{% endhighlight %}

Se você receber uma mensagem de erro, provavelmente terá que usar o comando `sudo`. Então ficará assim:

{% highlight sh %}
sudo gem install sass
{% endhighlight %}

Para conferir se o Sass foi instalado com sucesso, digite:

{% highlight sh %}
sass -v
{% endhighlight %}

Se ele retornar a versão do Sass, parabéns! O Sass foi instalado com sucesso.

## Usando o Sass

Com a Sass instalado, vamos testá-lo. Para isso, crie uma pasta para executarmos o nosso teste.

Dentro da pasta, crie um arquivo chamado **style.scss**. Nele digite:

{% highlight scss %}
$cor-principal: #00abd7;

h1 {
   color: $cor-principal;
}
{% endhighlight %}

Primeiro, criamos uma variável chamada `$cor-principal` e passamos para ela o hexadecimal da cor azul `#00abd7`. E depois passamos ela como valor da cor do elemento `h1`.

Agora, precisamos compilar o Sass. Para isso, acesse o diretório do nosso arquivo **.scss** e digite o comando:

{% highlight sh %}
sass --watch style.scss:style.css
{% endhighlight %}

Pronto! Nosso arquivo foi compilado e foi gerado na nossa pasta, o arquivo **style.css**. Ele deve estar assim:

{% highlight css %}
h1 {
  color: #00abd7; }
{% endhighlight %}

Esse foi um exemplo básico do que o **Sass** é capaz de fazer. Vamos aprender agora algumas features!

## Variáveis

Como vimos no exemplo anterior, o Sass permite o uso de **variáveis** para guardar informações como **cores**, **fontes** ou **qualquer valor CSS** que você queira reutilizar em seu código. Para declarar uma variável, use o símbolo `$` antes do nome da variável. 

**Exemplo:**

{% highlight scss %}
$fonte-legal: Arial, Verdana, sans-serif;
$cor-1: #000000;

h1 {
   font-family: $fonte-legal;
   color: $cor-1;
}
{% endhighlight %}

**CSS compilado:**

{% highlight css %}
h1 {
  font-family: Arial, Verdana, sans-serif;
  color: #000000; }
{% endhighlight %}

## Operadores Matemáticos

Também é possível fazer matemática em seu CSS. O Sass tem operadores matemáticos padrão, como: `+`,`-`,`*`,`/` e `%`. 

**Exemplo:**

{% highlight scss %}
.container {
   width: 100%;
}

.main {
   float: right;
   width: 600px / 960px * 100%;
}

.sidebar {
   float: left;
   width: 300px / 960px * 100%;
}
{% endhighlight %}

**CSS compilado:**

{% highlight css %}
.container {
  width: 100%; }

.main {
  float: right;
  width: 62.5%; }

.sidebar {
  float: left;
  width: 31.25%; }

{% endhighlight %}

## Mixins

Quem nunca precisou reutilizar aquele trecho de código diversas vezes em um projeto? Para alterar uma declaração, teria que alterar em vários lugares. No Sass, é possível reutilizar esse trecho em vários lugares com o `@mixin`, facilitando a manutenção do código.

Para criar um **mixin**, você usa a diretiva `@mixin` seguido do nome à sua escolha. Depois de criado, bastar usar a diretiva `@include` para importar o **mixin**.

**Exemplo:**

{% highlight scss %}
@mixin sombra {
   -webkit-filter: drop-shadow(20px 20px 20px black);
   filter: drop-shadow(20px 20px 20px black);
}

img {
   @include sombra;
   max-width: 100%;
}
{% endhighlight %}

**CSS compilado:**

{% highlight css %}
img {
  -webkit-filter: drop-shadow(20px 20px 20px black);
  filter: drop-shadow(20px 20px 20px black);
  max-width: 100%; }

{% endhighlight %}

## Só existem essas features?

Não! O **Sass** conta com várias outras features, para aprender a usá-las, acesse a [documentação do Sass](http://sass-lang.com/guide){:target="_blank"}.

## Conclusão

Realmente usar um pré-processador como o Sass, ajuda bastante e aumenta sua produtividade. Mas cuidado, use-os com sabedoria, pois assim como eles ajudam bastante, podem te atrapalhar bastante também. Estude bem as documentações para evitar cometer erros, e para aprender a usá-los bem. Assim você evita que seu projeto vire um pesadelo.