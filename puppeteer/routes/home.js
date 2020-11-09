const puppeteer = require("puppeteer");
const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto("https://en.wikipedia.org/wiki/Chess");

    const results = await page.evaluate(() => {
      let headingFromWikiChess = document.querySelectorAll(".toclevel-1 > a");
      let dataFromWikiChess = document.querySelectorAll(".toclevel-1 ul");

      const resultList = [...headingFromWikiChess, ...dataFromWikiChess];

      return resultList.map((result) => result.innerText);
    });

    res.send(results);

    await browser.close();
  } catch (err) {
    console.error(err.message);
  }
});

module.exports = router;
