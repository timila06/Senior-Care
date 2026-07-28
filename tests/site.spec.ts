import { expect, test } from "@playwright/test";

for (const [path, heading] of [
  ["/", "Care that feels like home."],
  ["/about", "Designed for comfort. Created for life."],
  ["/services", "Support that grows with each person."],
  ["/contact", "Find your home at Willow Grove."],
] as const) {
  test(`${path} renders`, async ({ page }) => {
    await page.goto(path);
    await expect(page.getByRole("heading", { level: 1, name: heading })).toBeVisible();
  });
}

test("desktop navigation reaches services", async ({ page, isMobile }) => {
  test.skip(isMobile, "Desktop navigation check");
  await page.goto("/");
  await page.getByRole("navigation", { name: "Primary navigation" }).getByRole("link", { name: "Services" }).click();
  await expect(page).toHaveURL(/\/services$/);
});

test("mobile navigation reaches services", async ({ page, isMobile }) => {
  test.skip(!isMobile, "Mobile navigation check");
  await page.goto("/");
  await page.locator('summary[aria-label="Open navigation"]').click();
  await page.getByRole("navigation", { name: "Mobile navigation" }).getByRole("link", { name: "Services" }).click();
  await expect(page).toHaveURL(/\/services$/);
});

test("inquiry validates and remains local", async ({ page }) => {
  const submissions: string[] = [];
  page.on("request", (request) => {
    if (request.method() !== "GET") submissions.push(request.url());
  });
  await page.goto("/contact");
  await page.getByRole("button", { name: "Submit Inquiry" }).click();
  await expect(page.getByText("Please enter your name.")).toBeVisible();
  await page.getByLabel("Full Name").fill("Ananda");
  await page.getByLabel("Email Address").fill("family@example.com");
  await page.getByLabel("Your Message").fill("We would like to arrange a visit.");
  await page.getByRole("button", { name: "Submit Inquiry" }).click();
  await expect(page.getByRole("status")).toContainText("does not send inquiries yet");
  await expect(page).toHaveURL(/\/contact$/);
  expect(submissions).toEqual([]);
});
