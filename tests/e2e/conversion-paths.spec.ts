import { expect, test } from "@playwright/test";

test("assessment form submits without losing source context", async ({ page }) => {
  await page.goto("/contact?utm_source=e2e&utm_medium=test&utm_campaign=conversion_path");

  await page.getByLabel("Name").fill("Test Lead");
  await page.getByLabel("Work email").fill("test@example.com");
  await page.getByLabel("Company").fill("Example Co");
  await page.getByLabel("Website").fill("https://example.com");
  await page.getByLabel("Industry").fill("Manufacturing");
  await page.getByLabel("Biggest workflow pain").fill("Customers wait too long for quote and parts availability responses.");
  await page.getByLabel("Tools currently used").fill("HubSpot, Gmail, spreadsheets");
  await page.getByLabel("Timeline").selectOption("ASAP");

  await page.getByRole("button", { name: "Request My Assessment" }).click();

  await expect(page.getByRole("heading", { name: "Assessment request received." })).toBeVisible();
  await expect(page.getByText("What happens next:")).toBeVisible();
});

test("ai voice page exposes demo and assessment conversion paths", async ({ page }) => {
  await page.goto("/core-services/ai-voice");

  await expect(page.getByRole("button", { name: "Try Now" }).first()).toBeVisible();

  await page.getByRole("button", { name: "Get Free Assessment" }).first().click();
  await expect(page.getByRole("heading", { name: "Request Your AI Voice Assessment" })).toBeVisible();

  await page.getByLabel("Work email *").fill("voice-test@example.com");
  await page.getByLabel("Company *").fill("Voice Example Co");
  await page.getByLabel("What does success look like?").fill("Recover missed calls and route booking updates to the right team.");
  await page.getByRole("button", { name: "Request My Assessment" }).click();

  await expect(page.getByText("We'll review your workflow within 1 business day.")).toBeVisible();
});
