import {Builder, By, Key, until} from 'selenium-webdriver';


const testGoogle = async ()=>{
    let driver = await new Builder().forBrowser('chrome').build();
    try{
     await driver.get('http://ags-stage.demo.co.zm');
     await driver.findElement(By.name('q')).sendKeys('webdriver',Key.RETURN);
     await driver.wait(until.titleIs('webdriver - Google Search'), 10000);
    }catch(error){
      console.log("Error:", error.stack);
   }finally{
       await driver.quit();
   }
}

const testFirefox = async ()=>{
    let driver = await new Builder().forBrowser('firefox').build();
    try{
     await driver.get('http://ags-stage.demo.co.zm');
     await driver.findElement(By.name('email')).sendKeys('employee@ags.com',Key.RETURN);
     await driver.findElement(By.name('password')).sendKeys('test1234!',Key.RETURN);
     await driver.wait(until.titleIs('AGS IMARS'), 10000);
    }catch(error){
      console.log("Error:", error.stack);
   }finally{
       await driver.quit();
   }
}


//testGoogle();
testFirefox();