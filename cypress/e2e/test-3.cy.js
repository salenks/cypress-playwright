/// <reference types="cypress" />


describe('Test-3', () => {

    beforeEach(() => {
        cy.login('standard_user', 'secret_sauce')
    })

    it('test-1', () => {
        cy.get('[data-test="inventory-item-price"]').then(priceList => { // each(( priceList, index) => {)
            expect(priceList).to.have.length(6)
            expect(priceList[0]).to.have.text('$29.99')
            expect(priceList[1]).to.have.text('$9.99')
            expect(priceList[2]).to.have.text('$15.99')
            expect(priceList[3]).to.have.text('$49.99')
            expect(priceList[4]).to.have.text('$7.99')
            expect(priceList[5]).to.have.text('$15.99')
        })
    })

    // it('test-2', () => {
    //     cy.get('[data-test="inventory-item-name"]').then(priceList => {
    //         expect(priceList).to.have.length(6)
    //         expect(priceList[0]).to.have.text('Sauce Labs Backpack')
    //         expect(priceList[1]).to.have.text('Sauce Labs Bike Light')
    //         expect(priceList[2]).to.have.text('Sauce Labs Bolt T-Shirt')
    //         expect(priceList[3]).to.have.text('Sauce Labs Fleece Jacket')
    //         expect(priceList[4]).to.have.text('Sauce Labs Onesie')
    //         expect(priceList[5]).to.have.text('Test.allTheThings() T-Shirt (Red)')
    //     })
    // })


    it('test-3', () => {
        cy.get('[data-test="inventory-item-price"]').each((priceList, index) => {
            const list = ['$29.99', '$9.99', '$15.99', '$49.99', '$7.99', '$15.99']
            cy.wrap(priceList).should('contain', list[index])
        })
    })

    it.only('test-4', () => {
        cy.get('[data-test="inventory-item"]').find('button').each((buttonList) => {
            cy.wrap(buttonList).click()
        })
    })
})