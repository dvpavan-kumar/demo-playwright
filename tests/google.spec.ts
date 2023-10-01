import { test, expect } from "@playwright/test";

test("Page demo", async ({ page }) => {
    //arrage
  await page.goto("https://google.com");
  //act
  const input = page.locator("[title=Search]");
  await input.type("playwright");
  await input.press("Enter");
  //assert
  await expect(page).toHaveTitle("playwright - Google Search");
});
