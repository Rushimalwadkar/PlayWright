import {chromium, webkit} from "playwright";

const browser = await chromium.launch({
    headless: false,
    args: ["--start-maximized"]
});
const page = await browser.newPage();
await page.goto("https://www.flipkart.com");
await page.click("//span[contains(@class,'b3wTlE')]");
const search = page.locator("//input[@name='q']").first();
await search.fill("Nike shoes");
await search.press("Enter");
