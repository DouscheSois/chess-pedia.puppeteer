const puppeteer = require("puppeteer");
const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto("https://en.wikipedia.org/wiki/Chess");

    const results = await page.evaluate(() => {
      let resultsFromWikiChess = document.querySelectorAll(".mw-headline");

      const resultList = [...resultsFromWikiChess];

      return resultList.map((result) => result.innerText);
    });

    res.send(results);

    await browser.close();
  } catch (err) {
    console.error(err.message);
  }
});

module.exports = router;
