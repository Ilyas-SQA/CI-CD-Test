const SignIn = '//a[text() = "Sign in"]'
const CreateOne = '//b[text() = "Create one"]'

class Medium {



    MediumCICD() {


        cy.xpath(SignIn).click()
        cy.wait(1000)
        cy.xpath(CreateOne).click()
        cy.wait(2000)

    }
}
export default new Medium