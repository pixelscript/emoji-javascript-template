# Emoji Javascript Template

![Emoji in action](http://i.imgur.com/6n0NgK0.png)


This is a very simple (and slightly hacky) grunt based automation template to allow you to use Emoji in your javascript and for it to still produce valid code. Great for kids or those that are young at heart (like me).

## How it works

It very escapes any and all Emoji characters in .js files in your src directory with sensible strings (e.g. ❄ will become ːsnowflakeː).

## Instructions

Install packages with:

    npm install

From here you should just be able to launch your site with:

    grunt

##### Emoji to name map taken from the [Wordpress Open Source Emoji Plugin](http://wordpress.org/plugins/open-source-emoji/) by [Tim Whitlock](http://timwhitlock.info/)
