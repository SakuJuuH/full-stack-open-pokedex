const { test, describe, expect, beforeEach } = require("@playwright/test");

describe("Pokedex", () => {
	test("front page can be opened", async ({ page }) => {
		await page.goto("http://localhost:8081");
		await expect(page.getByText("ivysaur")).toBeVisible();
		await expect(
			page.getByText(
				"Pokémon and Pokémon character names are trademarks of Nintendo."
			)
		).toBeVisible();
	});

	test("navigation to particular pokemon works", async ({ page }) => {
		await page.goto("http://localhost:8081");
		await page.getByRole("link", { name: "ivysaur" }).click();
		await expect(page.getByText("ivysaur")).toBeVisible();
		await expect(page.getByText("chlorophyll")).toBeVisible();
	});
});
