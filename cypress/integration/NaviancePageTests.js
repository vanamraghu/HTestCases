import HomePage from "../support/pageObjects/HomePage";
import NaviancePage from "../support/pageObjects/NaviancePage";

beforeEach(() => {
  const homePage = new HomePage();
  cy.visit(Cypress.env('url'));
  homePage.clickApplicationCard('NAVIANCE');
})

describe("Naviance Tests", () => {
  const naviancePage = new NaviancePage();
  it("Verify Tool tip text", () => {
    naviancePage.navigateToolTip("MN");
  })
})