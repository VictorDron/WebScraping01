const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch({
        headless: false
    });
    const page = await browser.newPage();
    await page.goto('https://www.youtube.com/watch?v=fx7JqqCw1qg');

    
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

            const element =  document.querySelector('.m6QErb DxyBCb kA9KIf dS8AEf ecceSd');
            window.scrollBy(0,100);
        });

    }
        
}
