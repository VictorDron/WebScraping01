const puppeteer = require('puppeteer');

const CampoGrande = "Campo+Grande";
const Escolas = "escolas+particulares";
const Mapa = "https://www.google.com.br/maps/search/Escolas/@-22.9042277,-43.5996659,13z/data=!4m7!2m6!3m5!2sCampoGrande,+Rio+de+Janeiro+-+RJ!3s0x9be17999363715:0x46c3f27867ad9332!4m2!1d-43.5659121!2d-22.9076515?hl=pt-BR&authuser=0";


async function autoScroll(page){

  await page.evaluate(async ()=>{

     await new Promise((resolve,reject)=>{
        
      var totalHeight = 0;
      var distance = 300;
      var timer = setInterval(()=>{
           const element = document.querySelectorAll('[class="e07Vkf kA9KIf"]');
           var scrollHeight = element.scrollHeight;
           element.scrollBy(0,distance);
           totalHeight += distance;
           if(totalHeight >= scrollHeight){
               clearInterval(timer);
               resolve();
           }
           
      },100);

     });
  });
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