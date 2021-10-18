const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('http://127.0.0.1:5500/page/index.html', {
    waitUntil: 'networkidle2',
  });
  await page.pdf({ path: 'elber-nava-2021.pdf', format: 'a4' });

  await browser.close();
})();
