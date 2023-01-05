'use strict';

const puppeteer = require('puppeteer');

(async function main() {
  try {
    const browser = await puppeteer.launch({ headless: false});
    const [page] = await browser.pages();

    await page.goto('https://www.google.com.br/maps/search/Restaurantes/@-22.9054608,-43.5686931,16z/data=!4m8!2m7!3m6!1sRestaurantes!2sCampo+Grande,+Rio+de+Janeiro+-+RJ!3s0x9be17999363715:0x46c3f27867ad9332!4m2!1d-43.5659121!2d-22.9076515?hl=pt-BR&authuser=0');
    //await page.waitForSelector('');

    // await page.waitForNavigation();
    const scrollable_section = '.m6QErb DxyBCb kA9KIf dS8AEf ecceSd QjC7t';

    await page.waitForSelector('.m6QErb DxyBCb kA9KIf dS8AEf ecceSd QjC7t');
    
    await page.evaluate(selector => {
      const scrollableSection = document.querySelector(selector);
    
      scrollableSection.scrollDown = scrollableSection.offsetHeight;
    }, scrollable_section);
    

    await page.setViewport({
        width: 1900,
        height: 1300
    });

    // await browser.close();
  } catch (err) {
    console.error(err);
  }
})();