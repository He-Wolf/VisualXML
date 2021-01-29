# VisualXML
## Table of Content
1. [Introduction](#introduction)
2. [Used versions](#used-versions)
3. [Used tools](#used-tools)
4. [Used packages](#used-packages)
5. [How to run the APP](#how-to-run-the-app)\
	5.1. [GitHub pages](#github-pages)\
	5.2. [PC](#pc)
6. [Limitations](#limitations)\
    6.1. [Exception/error handling](#exception-error-handling)
7. [Some further development possibilities](#some-further-development-possibilities)
8. [Resources](#resources)

## 1. Introduction <a name="introduction"></a>
Visualize your xml file in browser!
This web tool visualizes your xml file. You do not need to install any software. The code is executed safely in your browser.
- Browse the xml file from your PC and open it
- Select the xml element in the tree viewer to see the attributes, text content, parent and children elements
- Generate and copy the xpath of the element
- Get information whether your xml file is well-formed (Works in Chrome and Firefox as well)
- Save the xml file to another location if you wish

The APP uses:
- Angular
- node.js
- Bootstrap
- Angular Material

If any question, please do not hesitate to contact me.
## 2. Used versions <a name="used-versions"></a>
**1. Frameworks**
- Angular: 10.2.0

**2. Runtime:**
- node.js runtime: 12.18.4

**3. UI:**
- Bootstrap: 4.5.3
- Angular Material: 10.2.7
## 3. Used tools <a name="used-tools"></a>
- Git Extensions as git gui
- VSC as text editor
- Google Chrome and Firefox
- Windows 10 as OS
## 4. Used packages <a name="used-packages"></a>
- @ng-bootstrap/ng-bootstrap: 8.0.0,
- angular-split: 5.0.0,
- bs-custom-file-input: 1.3.4,
- clipboard: 2.0.6,
- file-saver: 2.0.5,
- jquery: 3.5.1,
- uuid: 8.3.2,
## 5. How to run the APP <a name="how-to-run-the-app"></a>
### 5.1. GitHub pages <a name="github-pages"></a>
- visit: https://he-wolf.github.io/VisualXML
- you can find test xml files in testdata folder in the repository
### 5.2. PC <a name="pc"></a>
- download the latest release from Github (VisualXML.zip asset): https://github.com/He-Wolf/VisualXML/releases
- unzip the html and js files to your PC and open index.html
- you can find test xml files in testdata folder in the repository
## 6. Limitations <a name="limitations"></a>
### 6.1. Exception/error handling <a name="exception-error-handling"></a>
This application needs to be extended with exception handling. There are some already known issues which may cause error when it is not used correctly. I only tested the app with correct input values.
## 7. Some further development possibilities <a name="some-further-development-possibilities"></a>
- search function
## 8. Resources <a name="resources"></a>
There are several online source which I used to create this web app.\
Including but not limited to:
- Angular:
	- https://angular.io/docs
- XML:
	- https://developer.mozilla.org/en-US/docs/Web/API/DOMParser
    - https://developer.mozilla.org/en-US/docs/Web/API/XMLSerializer
- split-window:
	- https://angular-split.github.io
- Angular Material:
	- https://material.angular.io/components/categories
- bootstrap:
	- https://getbootstrap.com/docs/4.6/getting-started/introduction/
- ng-bootstrap:
	- https://ng-bootstrap.github.io/#/components

Thank to every hero on Stackoverflow and Github who helped me with their comments! (Not all heroes wear capes.)
