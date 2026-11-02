import {chromium} from "playwright";{
    const browser = await chromium.launch()
    const page = await browser.newPage();
    await page.goto("https://www.youtube.com/");
}

