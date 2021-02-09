import HomePage from "../support/pageObjects/HomePage";
import 'cypress-plugin-snapshots/commands';
import NaviancePage from "../support/pageObjects/NaviancePage";

beforeEach(() => {
  cy.visit(Cypress.env('url'));
})


describe('Title & Map Tests', () => {
  const homePage = new HomePage();
  const naviancePage = new NaviancePage();
  it('Verify Home Page Title', () => {
    const title = homePage.getPageTitle();
    title.should('eq', 'Education Advances | Hobsons');
  });

  it('Verify Map of United states', () => {
    homePage.clickApplicationCard('NAVIANCE');
    naviancePage.verifyMap();
  });
});