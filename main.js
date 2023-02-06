const path = require("path");
const puppeteer = require("puppeteer");
const express = require("express");
const app = express();
const config = require("./config");
const port = 3000;

app.get("/download-pdf", async (req, res) => {
  const pdfName = "Elber-Nava-2023.pdf";
  const url = `${config.frontUrl}/index.html?download=true`;
  console.log(url);
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(url, {
    waitUntil: "networkidle2",
  });
  await page.pdf({ path: pdfName, format: "a4" });

  await browser.close();

  res.contentType("application/pdf");
  res.set("Content-Disposition", `attachment; filename="${pdfName}"`);
  res.sendFile(path.join(process.cwd(), pdfName));
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
