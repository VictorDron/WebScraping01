const puppeteer = require('puppeteer');



(async () => {
    
    const browser = await puppeteer.launch({headless: false});
    const page = await browser.newPage();
  
    await page.goto('https://www.google.com.br/maps/place/Campo+Grande,+Rio+de+Janeiro+-+RJ/@-22.8877585,-43.5487871,12z/data=!3m1!4b1!4m5!3m4!1s0x9be17999363715:0x46c3f27867ad9332!8m2!3d-22.9076515!4d-43.5659121?hl=pt-BR&authuser=0');
  
    await page.click('[data-value="Próximo"]');

    await page.type('[class="searchboxinput xiQnY"]', 'Escolas particulares');

    await page.click('[class="mL3xi"]');

      const leads = await page.evaluate (()=>{

              const NodeList = document.querySelectorAll('[class="m6QErb tLjsW"]');

              const ListArray = [...NodeList];

              //const list = ListArray.map( ({text}) => ({
                  
              //}));

            console.log(ListArray);
          return leads;
      });

    
    //await browser.close();
  })();

