# volto-widget-dataprovenance

[![Releases](https://img.shields.io/github/v/release/eea/volto-widget-dataprovenance)](https://github.com/eea/volto-widget-dataprovenance/releases)

[![Pipeline](https://ci.eionet.europa.eu/buildStatus/icon?job=volto-addons%2Fvolto-widget-dataprovenance%2Fmaster&subject=master)](https://ci.eionet.europa.eu/view/Github/job/volto-addons/job/volto-widget-dataprovenance/job/master/display/redirect)
[![Lines of Code](https://sonarqube.eea.europa.eu/api/project_badges/measure?project=volto-widget-dataprovenance-master&metric=ncloc)](https://sonarqube.eea.europa.eu/dashboard?id=volto-widget-dataprovenance-master)
[![Coverage](https://sonarqube.eea.europa.eu/api/project_badges/measure?project=volto-widget-dataprovenance-master&metric=coverage)](https://sonarqube.eea.europa.eu/dashboard?id=volto-widget-dataprovenance-master)
[![Bugs](https://sonarqube.eea.europa.eu/api/project_badges/measure?project=volto-widget-dataprovenance-master&metric=bugs)](https://sonarqube.eea.europa.eu/dashboard?id=volto-widget-dataprovenance-master)
[![Duplicated Lines (%)](https://sonarqube.eea.europa.eu/api/project_badges/measure?project=volto-widget-dataprovenance-master&metric=duplicated_lines_density)](https://sonarqube.eea.europa.eu/dashboard?id=volto-widget-dataprovenance-master)

[![Pipeline](https://ci.eionet.europa.eu/buildStatus/icon?job=volto-addons%2Fvolto-widget-dataprovenance%2Fdevelop&subject=develop)](https://ci.eionet.europa.eu/view/Github/job/volto-addons/job/volto-widget-dataprovenance/job/develop/display/redirect)
[![Lines of Code](https://sonarqube.eea.europa.eu/api/project_badges/measure?project=volto-widget-dataprovenance-develop&metric=ncloc)](https://sonarqube.eea.europa.eu/dashboard?id=volto-widget-dataprovenance-develop)
[![Coverage](https://sonarqube.eea.europa.eu/api/project_badges/measure?project=volto-widget-dataprovenance-develop&metric=coverage)](https://sonarqube.eea.europa.eu/dashboard?id=volto-widget-dataprovenance-develop)
[![Bugs](https://sonarqube.eea.europa.eu/api/project_badges/measure?project=volto-widget-dataprovenance-develop&metric=bugs)](https://sonarqube.eea.europa.eu/dashboard?id=volto-widget-dataprovenance-develop)
[![Duplicated Lines (%)](https://sonarqube.eea.europa.eu/api/project_badges/measure?project=volto-widget-dataprovenance-develop&metric=duplicated_lines_density)](https://sonarqube.eea.europa.eu/dashboard?id=volto-widget-dataprovenance-develop)

[Volto](https://github.com/plone/volto) add-on

## Features

![Dataprovenance](https://github.com/eea/volto-widget-dataprovenance/raw/master/docs/volto-widget-dataprovenance.gif)

## Getting started

### Try volto-widget-dataprovenance with Docker

      git clone https://github.com/eea/volto-widget-dataprovenance.git
      cd volto-widget-dataprovenance
      make
      make start

Go to http://localhost:3000

### Add volto-widget-dataprovenance to your Volto project

1. Make sure you have a [Plone backend](https://plone.org/download) up-and-running at http://localhost:8080/Plone

   ```Bash
   docker compose up backend
   ```

1. Start Volto frontend

* If you already have a volto project, just update `package.json`:

   ```JSON
   "addons": [
       "@eeacms/volto-widget-dataprovenance"
   ],

   "dependencies": {
       "@eeacms/volto-widget-dataprovenance": "*"
   }
   ```

* If not, create one:

   ```
   npm install -g yo @plone/generator-volto
   yo @plone/volto my-volto-project --canary --addon @eeacms/volto-widget-dataprovenance
   cd my-volto-project
   ```

1. Install new add-ons and restart Volto:

   ```
   yarn
   yarn start
   ```

1. Go to http://localhost:3000

1. Happy editing!

## Release

See [RELEASE.md](https://github.com/eea/volto-widget-dataprovenance/blob/master/RELEASE.md).

## How to contribute

See [DEVELOP.md](https://github.com/eea/volto-widget-dataprovenance/blob/master/DEVELOP.md).

## Copyright and license

The Initial Owner of the Original Code is European Environment Agency (EEA).
All Rights Reserved.

See [LICENSE.md](https://github.com/eea/volto-widget-dataprovenance/blob/master/LICENSE.md) for details.

## Funding

[European Environment Agency (EU)](http://eea.europa.eu)
