const pup = require("puppeteer");

const url = ("https://www.mercadolivre.com.br/");

const searchfor = "macbook";

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

console.log(links);



})();