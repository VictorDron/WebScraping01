const puppeteer = require('puppeteer');

const CampoGrande = "Campo+Grande";
const Escolas = "escolas+particulares";
const Mapa = "https://www.google.com.br/maps/search/Escolas/@-22.9042277,-43.5996659,13z/data=!4m7!2m6!3m5!2sCampoGrande,+Rio+de+Janeiro+-+RJ!3s0x9be17999363715:0x46c3f27867ad9332!4m2!1d-43.5659121!2d-22.9076515?hl=pt-BR&authuser=0";


(async () => {
    
const browser = await puppeteer.launch({headless: true});
   
const page = await browser.newPage();
    
await page.goto(Mapa);

const links = await page.$$eval('[class="hfpxzc"] ', el => el.map(link => link.href));
//const links = await page.$$eval('[class="lI9IFe"] ', el => el.map(link => link.href));

//const links = await page.$$eval('[class="Lui3Od T7Wufd"]', el => el.map(link => link.innerText));
let qtd = links.length
console.log(links);















})();
  
  