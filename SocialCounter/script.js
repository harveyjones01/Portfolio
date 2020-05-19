



function getFollowers(){
  console.log('epic');
  const puppeteer = require('puppeteer');
  async function scrapeProduct(url){
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url);

    const [el] = await page.$x('//*[@id="react-root"]/section/main/div/header/section/ul/li[2]/a/span');
    const src = await el.getProperties('src');
    const srcTxt = await src.jsonValue();

    console.log('epic2');
    alert({srcTxt});
  }

  scrapeProduct('https://www.instagram.com/harvey_jones2001/');
  
}


function lol(){
  const uniqid = require('uniqid');
  document.querySelector('#result').innerHTML = uniqid();
}


