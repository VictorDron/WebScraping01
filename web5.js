const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({headless: false});
  const page = await browser.newPage();
  await page.goto('https://www.google.com/maps');

  // Digite a pesquisa
  await page.type('#searchboxinput', 'restaurants near me');
  
  // clique no botão de pesquisa
  await page.click('#searchbox-searchbutton');

  // Aguarde até que os resultados da pesquisa estejam carregados
  await page.waitForSelector('.m6QErb DxyBCb kA9KIf dS8AEf ecceSd QjC7t');

  // Extraia as informações dos resultados da pesquisa
  const searchResults = await page.evaluate(() => {
    const results = Array.from(document.querySelectorAll('.m6QErb DxyBCb kA9KIf dS8AEf ecceSd QjC7t'));
    return results.map(result => {
      const title = result.querySelector('.section-result-title span').textContent;
      const address = result.querySelector('.section-result-location span').textContent;
      const rating = result.querySelector('.section-result-rating span').textContent;
      return { title, address, rating };
    });
  });

  console.log(searchResults);

  await browser.close();
})();
