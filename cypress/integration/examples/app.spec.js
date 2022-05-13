describe('React TodoMVC', () => {
    const TODO_ITEM_ONE = 'Buy Milk'
    const TODO_ITEM_TWO = 'Pay Rent'
    const TODO_ITEM_THREE = 'Pickup Dry Cleaning'

    //-----------2.Setting up Data Before Each Test-----------
    beforeEach(() => {
        cy.visit("http://localhost:8888")
    });

    it('adds a single todo', () => { 

        //-----------1.Installing Cypress and writing our first test-----------
        //cy.visit("http://localhost:8888")

        // cy.get(".new-todo").type("Buy Milk{enter}")
        cy.get(".new-todo").type(`${TODO_ITEM_ONE}{enter}`)

        //cy.get(".new-todo").type("Buy Milk{enter}").type("Pay Rent{enter}")
        //cy.get(".new-todo").type("Pay Rent{enter}")

        cy.get(".todo-list li").should("have.length", 1) //count list
        cy.get(".todo-list li").eq(0).find("label").should("contain",TODO_ITEM_ONE) //check text
    })

    it('adds three todos', () => {

        // cy.get(".new-todo").type("Buy Milk{enter}")
        // cy.get(".new-todo").type("Pay Rent{enter}")
        // cy.get(".new-todo").type("Pickup Dry Cleaning{enter}")

        // cy.get(".new-todo").type(`${TODO_ITEM_ONE}{enter}`)
        // cy.get(".new-todo").type(`${TODO_ITEM_TWO}{enter}`)
        // cy.get(".new-todo").type(`${TODO_ITEM_THREE}{enter}`)

        cy.createDefaultTodos()

        cy.get(".todo-list li").should("have.length", 3) //count list

        //check text
        cy.get(".todo-list li").eq(0).find("label").should("contain", TODO_ITEM_ONE)
        cy.get(".todo-list li").eq(1).find("label").should("contain", TODO_ITEM_TWO)
        cy.get(".todo-list li").eq(2).find("label").should("contain",TODO_ITEM_THREE)
    });

    it('should append new items to the bottom of the list', () => {

        //Testing the order in which todos are added

        cy.createDefaultTodos()

        //Todo 1
        cy.get('.todo-list li').eq(0).find('label').should('contain', TODO_ITEM_ONE)
        
        //Todo 2
        cy.get('.todo-list li').eq(1).find('label').should('contain', TODO_ITEM_TWO)
        
        //Todo 3
        cy.get('.todo-list li').eq(2).find('label').should('contain', TODO_ITEM_THREE)
        
        //count 
        //cy.get(".todo-list li").should("have.length", 3)

        cy.get(".todo-count").contains("3 items left")
    });
});