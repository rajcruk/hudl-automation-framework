# Test Automation for Hudl login page
This repository provides test automation for https://www.hudl.com/login page. 
The solution is provided using playwright and typescript using Page Object Model approach


### Pre-requisite

* This assumes you have node js and npm is installed on your machine. If not please install using 
  https://nodejs.dev/learn/how-to-install-nodejs 

### Make  
* Download this repo on your local drive Ex. `<your_drive>/pw-ts-assignment` 
    * go to directory `<your_drive>/pw-ts-assignment`
    * To download all the necessary packages run the command
    ```bash
       npm install 
    ```
    * To install supported browser for playwright use the command
    ```bash
     npx playwright install
    ``` 
    * Add valid values for userName, password & displayName in `<your_drive>/pw-ts-assignment/fixtures/staticData.json`

### Execute
* To run the tests use following commands from folder `<your_drive>/pw-ts-assignment`
    * To run tests in chrome browser in headed mode
    ```bash
       npm test  
    ```
    * To run tests in all browsers [chrome, firefox & webkit] in headless mode
    ```bash
       npm run test:all  
    ```
    * To run tests in all browsers [chrome, firefox & webkit] in headed mode  
    ```bash
       npm run test:all:headed  
    ```

### Tests
* There are total 9 test scenarios separated in two files.
    * happyPathScenarios.spec.ts
        * user can login with correct credentials
        * Reset your password functionality with invalid user name
        * Reset your password functionality with valid user name
        * remember me functionality
        * verify signup link is working as expected
        * verify Log In with an Organisation link is working as expected
        * verify browser back button will not allow user to login after signing out of portal - security
    * negativePathScenarios.spec.ts
        * user gets correct error message for invalid credentials
        * user gets correct error message for empty credentials  
