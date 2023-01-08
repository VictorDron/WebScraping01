const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch({
        headless: false
    });
    const page = await browser.newPage();
    await page.goto('https://www.google.com.br/maps/search/Restaurantes/@-22.9055752,-43.5648952,16z/data=!4m9!2m8!3m6!1sRestaurantes!2sCampo+Grande,+Rio+de+Janeiro+-+RJ!3s0x9be17999363715:0x46c3f27867ad9332!4m2!1d-43.5659121!2d-22.9076515!6e5?hl=pt-BR&authuser=0');

    
    await page.setViewport({
        width: 1900,
        height: 1300
    });
    


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
            await new Promise((resolve, reject) => {
                var totalHeight = 0;
                var distance = 100;
                var timer = setInterval(() => {
                    const element = document.querySelector('[class="m6QErb DxyBCb kA9KIf dS8AEf ecceSd"]')[1];
                    var scrollHeight = element.scrollHeight;
                    element.scroll(0, distance);
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
