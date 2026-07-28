import { expect, test } from "@playwright/test";

for (const [path, heading] of [
  ["/", "Care that feels like home."],
  ["/about", "A more personal way to feel supported."],
  ["/services", "Focused care, thoughtfully connected."],
  ["/contact", "Start with a conversation."],
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

test("inquiry validates and remains local", async ({ page }) => {
  await page.goto("/contact");
  await page.getByRole("button", { name: "Send Inquiry" }).click();
  await expect(page.getByText("Please enter your name.")).toBeVisible();
  await page.getByLabel("Name").fill("Ananda");
  await page.getByLabel("Email").fill("family@example.com");
  await page.getByLabel("How can we help?").fill("We would like to arrange a visit.");
  await page.getByRole("button", { name: "Send Inquiry" }).click();
  await expect(page.getByRole("status")).toContainText("does not send inquiries yet");
  await expect(page).toHaveURL(/\/contact$/);
});
