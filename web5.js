const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch({
        headless: false
    });
    const page = await browser.newPage();
    await page.goto('https://www.google.com.br/maps/search/restaurantes/@-22.8603167,-43.5191969,14z/data=!3m1!4b1?hl=pt-BR&authuser=0');
    await page.setViewport({
        width: 1200,
        height: 800
    });

    await autoScroll(page);

    await page.screenshot({
        path: 'yoursite.png',
        fullPage: true
    });

    await browser.close();
})();

async function autoScroll(page){
    await page.evaluate(async () => {

        await new Promise((resolve) => {

          
            var totalHeight = 0;
            var distance = 300;
            var timer = setInterval(() => {
              const element = document.querySelectorAll('[class="m6QErb DxyBCb kA9KIf dS8AEf ecceSd QjC7t"]');
                var scrollHeight = document.body.scrollHeight;
                window.scrollBy(0, distance);
                totalHeight += distance;

                if(totalHeight >= scrollHeight - window.innerHeight){
                    clearInterval(timer);
                    resolve();
                }
            }, 100);
        });
    });
}