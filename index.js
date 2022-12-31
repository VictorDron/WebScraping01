const pup = require("puppeteer");

const url = ("https://www.google.com.br/maps");

const searchfor = "Freguesia rj";

const searchBusiness = "Bares";

let c = 1;

(async () => {
const browser = await pup.launch({headless: false});

const page = await browser.newPage();
console.log("Iniciei!");

await page.goto(url);
console.log("Fui para a url!");

await page.waitForSelector("#searchboxinput");

await page.type("#searchboxinput",searchfor);

await page.click('#searchbox-searchbutton');

await page.waitForNavigation(".g88MCb S9kvJb");

await page.click('[data-value="Próximo"]');

await page.type("#searchboxinput",searchBusiness);

await page.waitForNavigation(".mL3xi");

await page.click(".mL3xi");

await autoScroll(page);

await page.setViewport({
    width:1920,
    height: 1300
 });

await page.waitForSelector('[class="hfpxzc"]');
const links = await page.$$eval('[class="hfpxzc"] ', el => el.map(link => link.href));

//console.log(links);

for (const link of links) {

    console.log('Página',c);

    //await page.waitForSelector('.ui-pdp-title');

    await page.goto(link);
    
    // const title = await page.$eval('.ui-pdp-title', element => element.innerText);
    // const price = await page.$eval('.andes-money-amount__fraction', element => element.innerText);

    // const obj = {title,price}

   c++
}

async function autoScroll(page){
    
    while (true) {

        await page.evaluate(async () => {
            await new Promise((resolve, reject) => {
                var totalHeight = 0;
                var distance = 100;
                var timer = setInterval(() => {
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

})();