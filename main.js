const pup = require("puppeteer");

const url = ("https://www.mercadolivre.com.br/");

const searchfor = "macbook";

const c = 1;

(async () => {
const browser = await pup.launch({headless: false});

const page = await browser.newPage();
console.log("Iniciei!");

await page.goto(url);
console.log("Ful para a url!");

await page.waitForSelector("#cb1-edit");

await page.type("#cb1-edit",searchfor);

await Promise.all([

    page.waitForNavigation(),
    page.click('.nav-search-btn')
]);


const links = await page.$$eval('.ui-search-result__image > a', el => el.map(link => link.href));

for (const link of links) {
    //console.log('Página');

    await page.waitForSelector('.ui-pdp-title');

    await page.goto(link);
    
    const title = await page.$eval('.ui-pdp-title', element => element.innerText);

    const obj = {title}

    console.log(obj);

   
}

console.log(links);



})();