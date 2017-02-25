symfony 3.2 && angular2 project
===============================



This project use angular2 typescript and symfony 3 for backend.
The purpose of this repository is to provide an example of configuration for integrate angular2 into symfony project

### Technology used

#### PHP
- [Fos assetic bundle]("https://github.com/symfony/assetic-bundle")
- [Fos rest bundle]("https://github.com/FriendsOfSymfony/FOSRestBundle")
- [yuiCompressor]("https://github.com/yui/yuicompressor")
- [composer]("https://github.com/composer/composer")

#### Javascript
- [gulp]("https://github.com/gulpjs/gulp")
- [less]("https://github.com/less/less.js")
- [systemJs]("https://github.com/systemjs/systemjs")
- [bower]("https://github.com/bower/bower")
- [npm]("https://github.com/npm/npm")
- [jqeury]("https://github.com/jquery/jquery")

### CSS
- [bootstrap]("http://getbootstrap.com/css")

An example of less files compiled with 


# How to use

For begining clone the repo ( obviously :p )

## Dependency instalation

Next go into cloned folder and type :

```
    composer install
    cd web/
    npm install
    bower install
```

## Build process

Stay into web folder and tip :

```
    gulp build
    php ../bin/console assetic:dump
```

or more concise form :

```
    npm run build
```

Indeed a script directvie is define into package.json for build typescrip and run php asset.
This last command stay in watch mode until you press ctrl+c key.





