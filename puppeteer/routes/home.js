const puppeteer = require("puppeteer");
const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
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
  } catch (err) {
    console.error(err.message);
  }
});

module.exports = router;
