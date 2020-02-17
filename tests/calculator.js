let homepage = require('../pages/homepage');
let fs = require('fs');  //para hacer capturas en un paso concreto

describe('Demo calculator tests', function(){
    
    it('addition test', function(){
        //browser.get('http://juliemr.github.io/protractor-demo/');
        homepage.get('http://juliemr.github.io/protractor-demo/');
     
        //element(by.xpath("//*[@ng-model='first']")).sendKeys('2');
        //element(by.model('first')).sendKeys('2');
        homepage.enterFirstNumber('4');
         
        //element(by.model('second')).sendKeys('3');
        homepage.enterSecondNumber('3');

        //se hace una captura en un sitio concreto, aquí se haría después de introducir el numero 3
        browser.takeScreenshot().then(function(fullPage){
            var stream = fs.createWriteStream ('./target/fullpage.png');
            stream.write(new  Buffer(fullPage,'base64' ));
            stream.end();
        });        

        //element(by.css('[ng-click="doAddition()"]')).click();
        homepage.clickGo();

        //let result= element(by.cssContainingText('.ng-binding','5'));
        //expect(result.getText()).toEqual('5');
        homepage.verifyResult('7');
        
        browser.sleep(3000);
    
    });
  
});