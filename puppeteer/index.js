const puppeteer = require("puppeteer");

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto("https://en.wikipedia.org/wiki/Chess");

  const results = await page.evaluate(() => {
    let headingFromWikiChess = document.querySelectorAll(".mw-headline");
    const headingList = [...headingFromWikiChess];
    return headingList.map((heading) => heading.innerText);
  });

  console.log("Results:", results);

  await browser.close();
})();
