import puppeteer from 'puppeteer';

(async () => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  
  // Replace with your website URL
  await page.goto('https://randomquoteandcolorgenerator.netlify.app/');
  
  // Replace with the correct selectors for the quote and author
  const quoteSelector = '#text h1';
  const authorSelector = '#author h2 span';
  
  const quote = await page.$eval(quoteSelector, el => el.textContent);
  const author = await page.$eval(authorSelector, el => el.textContent);
  
  console.log(`Quote: ${quote}`);
  console.log(`Author: ${author}`);
  
  // Click the Twitter button
  const twitterButtonSelector = 'YOUR_TWITTER_BUTTON_SELECTOR';
  await page.click(twitterButtonSelector);

  // Login to X (Twitter) if required
  // Add logic here to handle the login if necessary

  // Paste the quote and author in the tweet box and post
  const tweetBoxSelector = 'YOUR_TWEET_BOX_SELECTOR';
  const postButtonSelector = 'YOUR_POST_BUTTON_SELECTOR';
  await page.waitForSelector(tweetBoxSelector);
  await page.type(tweetBoxSelector, `${quote} - ${author}`);
  await page.click(postButtonSelector);

  await browser.close();
})();
