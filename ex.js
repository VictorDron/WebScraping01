const pup = require("puppeteer");

const url = ("https://www.google.com.br/maps");

const searchfor = "Campo Grande rj";

const searchBusiness = "Escolas";

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

await page.waitForSelector(".mL3xi");

await page.click(".mL3xi");

await page.setViewport({
    width:1300,
    height: 900
 });


// await Promise.all([

//     page.waitForNavigation(),
//     page.click('.g88MCb S9kvJb')

//  ]);


 const links = await document.querySelectorAll('[jstcache="1033"] > .a', el => el.map(link => link.href));
//const links = await page.$$eval

//const links = await page.$$eval('.muMOJe', el => el.map(span => span.innerText));

console.log(links);

//   //await page.goto(link);

//  }

//     //await page.waitForSelector('.ui-pdp-title');

//     await page.goto(link);
    
//     const title = await page.$eval('.ui-pdp-title', element => element.innerText);
//     const price = await page.$eval('.andes-money-amount__fraction', element => element.innerText);

//     const obj = {title,price}

//     console.log(obj);

//    c++
// }

// console.log(links);



})();