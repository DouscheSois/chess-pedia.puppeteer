const puppeteer = require("puppeteer");
const express = require("express");
const app = express();
const port = 4000;

app.get("/", async (req, res) => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto("https://en.wikipedia.org/wiki/Chess");

  const results = await page.evaluate(() => {
    let headingFromWikiChess = document.querySelectorAll(".mw-headline");
    const headingList = [...headingFromWikiChess];
    return headingList.map((heading) => heading.innerText);
  });

  res.send(results);

  await browser.close();
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
