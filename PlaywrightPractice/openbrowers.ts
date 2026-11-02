import {chromium} from "playwright";{
    const browser = await chromium.launch({
        headless: false,
        args: ["--start-maximized"]
    });
    const page = await browser.newPage();
    await page.goto("https://www.youtube.com/");
    const searchbox = await page.locator("input[name='search_query']");
    await searchbox.fill("hindi songs");
    await searchbox.press("Enter");
    await page.waitForTimeout(5000)
    await browser.close();
}

