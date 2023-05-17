/// <reference types="cypress" />

import { emulate } from "#/commands/emulation"

const BASE = "RequestAccess:EmailForm"

// const asserts = {
//   formExists: () => cy.getByData(`${BASE}:form`).should('exist'),
//   emailInputExists: () => cy.getByData(`${BASE}:input:email`).should('exist'),
//   emailInputExists: () => cy.getByData(`${BASE}:input:email`).should('exist'),
// }

describe("<Home /> (Request Access)", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000", {
      onBeforeLoad(win) {
        emulate("reduced-animation")
      },
    })
    cy.waitForPageLoad("HomePage")
    cy.getByData("invite-modal:button").should("be.visible").click()
  })

  context("display", () => {
    it("renders form", () => {
      cy.getByData(`${BASE}:form`).should("exist")
    })

    it("renders email field", () => {
      cy.getByData(`${BASE}:input:email`).should("exist")
    })

    it("renders submit button disabled by default", () => {
      cy.getByData(`${BASE}:submit:button`)
        .should("exist")
        .should("be.disabled")
    })

    it("renders without captcha by default", () => {
      cy.get("recaptcha-accessible-status").should("not.exist")
    })
  })

  context("submission", () => {
    it("accepts a valid email", () => {
      cy.getByData(`${BASE}:input:email`).type("user@company.com")

      // Solve captcha
      cy.solveCaptcha()

      // Validations
      cy.getByData(`${BASE}:validations:email`).should("not.exist")

      // Submit
      cy.getByData(`${BASE}:submit:button`)
        .should("exist")
        .should("not.be.disabled")
        .click()

      // Validations
      cy.getByData(`${BASE}:validations:email`).should("not.exist")

      // Success
      cy.getByData(`${BASE}:message:success`).should("exist")
    })

    it("rejects an invalid email", () => {
      cy.getByData(`${BASE}:input:email`).type("invalid")

      // Validations
      cy.getByData(`${BASE}:validations:email`).should("not.exist")

      // Submit
      cy.getByData(`${BASE}:submit:button`)
        .should("exist")
        .should("be.disabled")

      // Success
      cy.getByData(`${BASE}:message:success`).should("not.exist")
    })
  })
})
