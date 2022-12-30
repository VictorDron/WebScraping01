const pup = require("puppeteer");

const url = ("https://www.google.com.br/maps");

const searchfor = "Tanque rj";

const searchBusiness = "Escolas";

const time = new Date();

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

await page.waitForSelector('[data-value="Próximo"]');

await page.click('[data-value="Próximo"]');

await page.type("#searchboxinput",searchBusiness);

await page.waitForNavigation(".mL3xi");

await page.click(".mL3xi");

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

    
    
    const Nome = await page.$eval('.DUwDvf', element => element.innerText);
    const End = await page.$eval('.rogA2c', element => element.innerText);
    
    
    const obj = {Nome,End,time}

    console.log(obj);

   c++
}


})();

