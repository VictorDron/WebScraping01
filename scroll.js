const puppeteer = require('puppeteer');

const CampoGrande = "Campo+Grande";
const Escolas = "escolas+particulares";
const Mapa = "https://www.youtube.com/";


async function autoScroll(page){

  while(true){

  
      await page.evaluate(async ()=>{
        await new Promise((resolve,reject)=>{
          var totalHeight = 0;
          var distance = 100;
          var timer = setInterval(()=>{
              const element = document.querySelector('.m6QErb DxyBCb kA9KIf dS8AEf ecceSd');
              var scrollHeight = document.body.scrollHeight;
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
  await autoScroll(page);
  const places = await parsePlaces(page);

  await autoScroll(page);

  console.log(places);

  await page.setViewport({
     width:1300,
     height: 900
  });
  
})();