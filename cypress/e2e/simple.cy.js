import { NORMA_API } from "../../src/utils/url";
const modal = '[data-testid="modal"]';
const ingredient = '[data-testid="ingredient"]';
const email = "vera_kashina_00@mail.ru";
const password = "12345qwerty";

describe("service is available", function () {
  beforeEach(function () {
    cy.visit("/");
    cy.window().then((win) => {
      win.localStorage.setItem(
        "accessToken",

        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2YzIzMjUwMTE5ZDQ1MDAxYjUwMDgxMyIsImlhdCI6MTcyODIzNjM5NywiZXhwIjoxNzI4MjM3NTk3fQ.aRl8soUd2_f6Sxu4_6OmJGfQJbp1M3TL4077tZkzwHM"

        //"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2YzIzMjUwMTE5ZDQ1MDAxYjUwMDgxMyIsImlhdCI6MTcyODIzNjM5NywiZXhwIjoxNzI4MjM3NTk3fQ.aRl8soUd2_f6Sxu4_6OmJGfQJbp1M3TL4077tZkzwHM"
      );
    });
  });

  it("Авторизация", () => {
    cy.intercept("POST", `${NORMA_API}/auth/login`).as("postRequest");

    cy.visit("/login");
    cy.get('[name="email"]').type(email);
    cy.get('[name="password"]').type(password);

    cy.contains("button", "Войти").should("exist").click();
  });
  it("Открытие модалки и закрытие через Esc", function () {
    cy.get(ingredient).find("a").first().should("exist").as("ingredientModal");

    cy.get("@ingredientModal").click();

    cy.get(modal).should("exist").and("be.visible");
    cy.contains("Детали ингредиента").should("be.visible");
    cy.get("body").type("{esc}");
    cy.get(modal).should("not.exist");
  });

  it("Открытие модалки и закрытие через крестик", function () {
    cy.get(ingredient).find("a").first().should("exist").as("ingredientModal");

    cy.get("@ingredientModal").click();

    cy.get(modal).should("exist").and("be.visible");

    cy.get('[data-testid="closeIcon"]').as("closeIson");
    cy.get("@closeIson").click();
    cy.get(modal).should("not.exist");
  });

  it("Открытие модалки и закрытие по нажатию вне модалки", function () {
    cy.get(ingredient).find("a").first().should("exist").as("ingredientModal");

    cy.get("@ingredientModal").click();

    cy.get(modal).should("exist").and("be.visible");

    cy.get('[data-testid="modalOverlay"]').as("modalOverlay");
    cy.get("@modalOverlay").click({ force: true });
    cy.get(modal).should("not.exist");
  });

  it("Перетаскивание элемента и авторизация", function () {
    let bunText;
    let ingredientText;

    // Находим первый элемент a и извлекаем текст из h3
    cy.get(ingredient)
      .find("a")
      .first()
      .find("h3")
      .last()
      .should("exist")
      .invoke("text")
      .then((text) => {
        bunText = text;

        cy.get('[data-testid="containerBunTop"]')
          .should("exist")
          .as("containerBunTop");

        cy.get(ingredient).find("a").first().trigger("dragstart");

        cy.get("@containerBunTop").trigger("drop").trigger("dragend");

        // Проверяем добавление булки
        cy.get("@containerBunTop").should("contain.text", bunText);
        cy.get('[data-testid="containerBunBottom"]').should(
          "contain.text",
          bunText
        );
      });

    // Находим последний элемент a и извлекаем текст из h3
    cy.get(ingredient)
      .find("a")
      .last()
      .find("h3")
      .last()
      .should("exist")
      .invoke("text")
      .then((text) => {
        ingredientText = text;

        cy.get('[data-testid="containerIngredients"]')
          .should("exist")
          .as("containerIngredients");

        cy.get(ingredient).find("a").last().trigger("dragstart");

        cy.get("@containerIngredients").trigger("drop").trigger("dragend");

        cy.get("@containerIngredients").should("contain.text", ingredientText);
      });
    cy.contains("button", "Оформить заказ").should("exist").click();
    cy.get(modal).should("exist");
    cy.contains("идентификатор заказа").should("be.visible");
    cy.get("body").type("{esc}");
    cy.get(modal).should("not.exist");
  });
});
