# Angular 2 Cli with Webpack and Docker

Hello! :wave:

This is a dockerized project generated with [angular-cli](https://github.com/angular/angular-cli) version **1.0.0-beta.20-4**. Along with great built in angular 2 and webpack features (e.g. hot module reloading), this starter also has [scss](https://github.com/sass/sass), [bootstrap 4](https://github.com/twbs/bootstrap/tree/v4.0.0-alpha.5), [ng-bootstrap](https://github.com/ng-bootstrap/ng-bootstrap) and [animate.css](https://github.com/daneden/animate.css) pre-installed and allows you to continue to use the cli to generate components. :ok_hand:

## Please Note

This is very much an experimental project and is intended to be more of an educational tool than a starter pack. Feel free to fork and set up your own project name, styling and responsive dependencies if you're looking for something different (e.g. [angular material](https://github.com/angular/material2))!

Well that's great but, *Doesn't this kind of defeat the purpose of command line scaffolding for a new project* :question: ... Yes! but I wanted a resuable dockerized starter for this amazing tech stack and until the cli can deliver this is my stopgap.

Also **I am not an expert** in all of these technologies; I'm just doing my best with what I know (which is admittedly very little). Please remember that many of these technologies are releasing new versions all the time so don't be surprised if things change or break! That said, I will do my best to keep this project as robust and up to date as possible.

Feel free to ask me any questions you have and any help or feedback is always appreciated! :raised_hands:

## Table of Contents

* [Getting Started](#getting-started)
  * [Install angular-cli](#install-angular-cli)
  * [Build and serve](#build-and-serve)
* [See it in action](#see-it-in-action)
* [Installing dependencies](#installing-dependencies)
* [Angular Cli](#angular-cli)

## Getting Started

#### You should have
* Docker
* Docker Compose
* Node v4 or greater
* NPM v3 or greater

Not only will having these make development a lot easier, but also *the instructions will assume you have these installed*.

#### If not, then at least have
* Docker

If this is all you have on your system you can still build the image using the Dockerfile. Then you can run a container, shell into it and use the angular-cli in the container.

### Install angular-cli

```bash
sudo npm uninstall -g angular-cli # if you already have another version
sudo npm install -g angular-cli
```

### Build and serve

```bash
git clone git@github.com:amrtgaber/angular2-cli-webpack-docker.git
cd angular2-cli-webpack-docker
docker-compose up
# wait a little while
```

Nice and easy! :tada: :sparkles: :sparkles:

## See it in action

Navigate to `localhost:4200` in your browser.

**NOTE**: For windows you must replace 'localhost' with the machine ip. You can get the machine ip with the following command.

```bash
docker-machine ip angular2-cli-webpack-docker
```

## Installing dependencies

```bash
npm install --save <dependency>
docker-compose down
docker-compose up --build
```

## Angular Cli

This project was generated with [angular-cli](https://github.com/angular/angular-cli) version 1.0.0-beta.17.

## Development server
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Deploying to Github Pages

Run `ng github-pages:deploy` to deploy to Github Pages.

## Further help

To get more help on the `angular-cli` use `ng --help` or go check out the [Angular-CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
