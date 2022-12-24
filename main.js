const puppeteer = require('puppeteer');

const CampoGrande = "Campo+Grande";
const Escolas = "escolas+particulares";
const Mapa = "https://www.google.com.br/maps/search/Escolas/@-22.9042277,-43.5996659,13z/data=!4m7!2m6!3m5!2sCampoGrande,+Rio+de+Janeiro+-+RJ!3s0x9be17999363715:0x46c3f27867ad9332!4m2!1d-43.5659121!2d-22.9076515?hl=pt-BR&authuser=0";

(async () => {

  const browser = await puppeteer. launch({ headless: false});
  const page = await browser.newPage();
  await page.goto(Mapa);
  // await page.click('[data-value="Próximo"]');

  // await page.type('[class="searchboxinput xiQnY"]', 'escolas particulares');

  // await page.click('[class="mL3xi"]');

  
  
  // const imgArray = await page.evaluate ( () => {
  
  // const nodeList = document.querySelectorAll('[class="Nv2PK tH5CWc THOPZb"]');
  
  // const imgArray = [...nodeList]
  // // transformar os nodes (elementos html) em objetos JS
  // const imgList = imgArray.map( ({src}) => ({
  
  // }));

  // console.log(imgArray.length);
  // // colocar para fora da função
  // return imgArray
  // });

  // console.log(imgArray.length);
})();