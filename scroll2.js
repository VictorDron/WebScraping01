'use strict';

const puppeteer = require('puppeteer');

(async function main() {
  try {
    const browser = await puppeteer.launch({ headless: false});
    const [page] = await browser.pages();

    await page.goto('https://www.youtube.com/');
    await page.waitForSelector('.style-scope ytd-app');

    const data = await page.evaluate(() => {
      const container = document.querySelector('.style-scope ytd-app');
      container.scrollBy(0, container.clientHeight);
    });

    await page.setViewport({
        width: 1900,
        height: 1300
    });

    // await browser.close();
  } catch (err) {
    console.error(err);
  }
})();