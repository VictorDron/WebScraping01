const puppeteer = require('puppeteer');

const CampoGrande = "Campo+Grande";
const Escolas = "escolas+particulares";
const Mapa = "https://www.google.com.br/maps/search/Escolas/@-22.9042277,-43.5996659,13z/data=!4m7!2m6!3m5!2sCampoGrande,+Rio+de+Janeiro+-+RJ!3s0x9be17999363715:0x46c3f27867ad9332!4m2!1d-43.5659121!2d-22.9076515?hl=pt-BR&authuser=0";


 const autoScroll = async(page) =>{
     
  while (true){

    previousHeight = await page.evaluate('document.body.scrollHeight');
    await page.evaluate('window.scrollTo(0,document.body.scrollHeight)');
    await page.waitForFunction('document.body.scrollHeight > ${previousHeight}');
    await new Promisse ((resolve)=>setTimeout(resolve,1000));

  }

}

async function parsePlaces (page) {

  let places = [];

  const elements = await page.$$('[class="y7PRA"]');

     if (elements && elements.length) {

        for (const el of elements) {

          const name =  el.evaluate(span => span.textContent);
          places.push ({name});

        }
     }

    return places;  
}


(async () => {

  const browser = await puppeteer.launch({ headless: false});
  const page = await browser.newPage();
  await page.goto(Mapa);

  const places = await parsePlaces(page);

  await autoScroll(page);

  console.log(places);

  await page.setViewport({
     width:1300,
     height: 900
  });
  
})();