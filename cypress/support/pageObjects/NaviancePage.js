/// <reference types="Cypress" />
/**
 * Naviance Page having methods related to navigating 
 * to tool tip & verify the map that is displayed in the page
 */
class NaviancePage {
  navigateToolTip(stateName) {
    cy.viewport(1920, 1080);
    cy.get(`[data-state="${stateName}"]`).click();
    cy.get(`[data-state="${stateName}"]`).parent().then(($ele) => {
      const title =  $ele.attr('data-popup-content');
      cy.get('.block-stats-map__popup-content').invoke("text").should("eq", title);
    })
  }

  verifyMap() {
    cy.get('.block-stats-map__map').toMatchImageSnapshot();
  }
}

export default NaviancePage