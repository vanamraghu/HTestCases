/// <reference types="Cypress" />
/**
 * Home page class having methods related to 
 * Getting page title 
 * Clicking Application card based on the card name like Naviance/Intersect/Starfish
 * 
 */
class HomePage {
  
  getPageTitle() {
    return cy.title();
  }

  clickApplicationCard(cardName) {
    let link;
    switch(cardName) {
      case "NAVIANCE":
        link = '[href="https://www.hobsons.com/solution/naviance/"] > .card-home-banner__lower > .card-home-banner__button';
        cy.get(link).click();
        break;
      case "INTERSECT":
        link = '[href="https://www.hobsons.com/solution/intersect/"] > .card-home-banner__lower > .card-home-banner__button';
        cy.get(link).click();
        break;
      case "STARFISH":
        link = '[href="https://www.hobsons.com/solution/starfish/"] > .card-home-banner__lower > .card-home-banner__button';
        cy.get(link).click();
        break;
      default:
        cy.visit("https://www.hobsons.com");
        break;
    }
  }
}
export default HomePage;