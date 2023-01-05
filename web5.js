const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch({
        headless: false
    });
    const page = await browser.newPage();
    await page.goto('https://www.google.com.br/maps/search/Restaurantes/@-22.9054608,-43.5686931,16z/data=!4m8!2m7!3m6!1sRestaurantes!2sCampo+Grande,+Rio+de+Janeiro+-+RJ!3s0x9be17999363715:0x46c3f27867ad9332!4m2!1d-43.5659121!2d-22.9076515?hl=pt-BR&authuser=0');

    
    await page.setViewport({
        width: 1900,
        height: 1300
    });
    
    //await page.waitForSelector('.m6QErb DxyBCb kA9KIf dS8AEf ecceSd QjC7t');
    await page.focus('.m6QErb DxyBCb kA9KIf dS8AEf ecceSd QjC7t');

    await autoScroll(page);

    await page.screenshot({
        path: 'yoursite.png',
        fullPage: true
    });

    //await browser.close();
})();

async function autoScroll(page){
    
    while (true) {

        await page.evaluate(async () => {
             page.focus('.m6QErb DxyBCb kA9KIf dS8AEf ecceSd QjC7t');
            await new Promise((resolve, reject) => {
                var totalHeight = 0;
                var distance = 100;
                var timer = setInterval(() => {
                    //const container = document.querySelector('.m6QErb DxyBCb kA9KIf dS8AEf ecceSd');
                    var scrollHeight = document.body.scrollHeight;
                    window.scrollBy(0, distance);
                    totalHeight += distance;

                    if(totalHeight >= scrollHeight){
                        clearInterval(timer);
                        resolve();
                    }
                }, 100);
            });
        });

    }
        
}
