const puppeteer = require('puppeteer');

(async () => {
  const url = 'http://127.0.0.1:5500/page/index.html';
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(url, {
    waitUntil: 'networkidle2',
  });
  await page.pdf({ path: 'curriculum.pdf', format: 'a4' });

  await browser.close();
})();
