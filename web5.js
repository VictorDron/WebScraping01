const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch({
        headless: false
    });
    const page = await browser.newPage();
    await page.goto('https://www.youtube.com/');

    await page.focus('.style-scope yt-img-shadow');

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
                    const container = document.querySelector('.style-scope ytd-app');
                    page.focus('.style-scope ytd-app');
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
