const puppeteer = require('puppeteer');


(async () => {

  const browser = await puppeteer. launch({ headless: false});
  const page = await browser.newPage();
  await page.goto('https://www.google.com.br/maps/place/Campo+Grande,+Rio+de+Janeiro+-+RJ/@-22.8877585,-43.5487871,12z/data=!3m1!4b1!4m5!3m4!1s0x9be17999363715:0x46c3f27867ad9332!8m2!3d-22.9076515!4d-43.5659121?hl=pt-BR&authuser=0');
   
  await page.click('[data-value="Próximo"]');

  await page.type('[class="searchboxinput xiQnY"]', 'escolas particulares');

  await page.click('[class="mL3xi"]');

  
  
  const imgArray = await page.evaluate ( () => {
  
  const nodeList = document.querySelectorAll('[class="Nv2PK tH5CWc THOPZb"]');
  
  const imgArray = [...nodeList]
  // transformar os nodes (elementos html) em objetos JS
  const imgList = imgArray.map( ({src}) => ({
  
  }));

  console.log(imgArray.length);
  // colocar para fora da função
  return imgArray
  });

  console.log(imgArray.length);
})();