const pup = require("puppeteer");

const url = ("https://www.mercadolivre.com.br/");

const searchfor = "barco";

let c = 1;

(async () => {
const browser = await pup.launch({headless: false});

const page = await browser.newPage();
console.log("Iniciei!");

await page.goto(url);
console.log("Ful para a url!");

await page.waitForSelector("#cb1-edit");

await page.type("#cb1-edit",searchfor);

await page.setViewport({
    width:1300,
    height: 900
 });

await Promise.all([

    page.waitForNavigation(),
    page.click('.nav-search-btn')
]);


const links = await page.$$eval('.ui-search-result__image > a', el => el.map(link => link.href));
console.log(links);

for (const link of links) {

    console.log('Página',c);

    //await page.waitForSelector('.ui-pdp-title');

    await page.goto(link);
    
    const title = await page.$eval('.ui-pdp-title', element => element.innerText);
    const price = await page.$eval('.andes-money-amount__fraction', element => element.innerText);

    const obj = {title,price}

    console.log(obj);

   c++
}

console.log(links);



})();