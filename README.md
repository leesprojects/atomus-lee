# Atomus Lee

### Notes about the project

  - Built with Nx
  - Built using Angular and Node.js
  - Also using: Angular Material, and Nest.js for Node setup


### How to run the app
  - cd atomus-lee/apps
  - npx serve booking-app
  - npx serve api
  - or use Nx console

### e2e testing
  - 


### Feedback on project

This was my first time using Nx, and it was so easy to use. It can be used for Angular & React, and offers great features like creating libraries and schematics
It was a nice and easy project as I had already done a MEAN full-stack course before, and this only inlcude Angular and Node. 


### Issues face
  - I did try to install node without next.js via nrwl but had a little trouble setting it up so I used Nest.js as Nx docs recommend

### Dependencies & Packages
Install Angular Materials
  - npx nx g @angular/material:ng-add --project=booking-app


### Key nx commands to remember
Create data structure libraries
  - npx nx g @nrwl/workspace:lib data

Create Angular component libraries
  - npx nx g @nrwl/angular:lib ui

