/// <reference types="cypress" />

import { emulate } from '@/cypress/commands/emulation'

const BASE = 'RequestAccess:EmailForm'

// const asserts = {
//   formExists: () => cy.getByData(`${BASE}:form`).should('exist'),
//   emailInputExists: () => cy.getByData(`${BASE}:input:email`).should('exist'),
//   emailInputExists: () => cy.getByData(`${BASE}:input:email`).should('exist'),
// }

context('<Index /> (Request Access)', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000', {
      onBeforeLoad(win) {
        emulate('reduced-animation')
      },
    })
    cy.waitUntil(() => cy.get('body').should('not.have.class', 'loading'))
    cy.getByData('invite-modal:button').click()
  })

  it('renders form', () => {
    cy.getByData(`${BASE}:form`).should('exist')
  })

  it('renders email field', () => {
    cy.getByData(`${BASE}:input:email`).should('exist')
  })

  it('renders submit button disabled by default', () => {
    cy.getByData(`${BASE}:submit:button`).should('exist').should('be.disabled')
  })

  it('renders without captcha by default', () => {
    cy.get('recaptcha-accessible-status').should('not.exist')
  })

  it.only('accepts a valid email', () => {
    cy.getByData(`${BASE}:input:email`).type('user@company.com')

    // check captcha
    // cy.get('iframe[title="reCAPTCHA"]').should('exist')

    // cy.get('iframe[.recaptcha-accessible-status').contains(
    //   'Recaptcha requires verification. '
    // )
    // cy.get('.recaptcha-checkbox').click()

    cy.get('iframe[title=reCAPTCHA]').its('0.contentDocument').should('exist')
    // .should((d) => d.getElementById('recaptcha-anchor').click())
    // .should((d) => d.getElementById('recaptcha-token').click())

    // cy.get('iframe[title=reCAPTCHA]')
    // .then((d) => d.getElementById('recaptcha-anchor').click())
    // .its('0.contentDocument').get('#recaptcha-anchor').click()

    // cy.clickCaptcha()
    // // cy.get('recaptcha-accessible-status').contains('You are verified')

    // // submit
    // cy.getByData(`${BASE}:submit:button`)
    //   .should('exist')
    //   .should('not.be.disabled')
    // cy.getByData(`${BASE}:submit:button`).click()

    // cy.getByData(`${BASE}:validations:email`).should('not.exist')
    // cy.getByData(`${BASE}:message:success`).should('exist')
  })

  it('rejects an invalid email', () => {
    cy.getByData(`${BASE}:input:email`).type('invalid')

    cy.getByData(`${BASE}:submit:button`).should('exist').should('be.disabled')
    cy.getByData(`${BASE}:submit:button`).click()

    // check captcha
    cy.getByData(`${BASE}:validations:email`).should('exist')
    cy.getByData(`${BASE}:message:success`).should('not.exist')
  })
})
