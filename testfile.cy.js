import example from "../e2e/../fixtures/example.json"


describe('Login page Form Submission', () => {
  it('should Login page form successfully', () => {
   
    cy.visit('https://platform.futurenation.gov.bd/');
    cy.url().should('eq', 'https://platform.futurenation.gov.bd/')
    cy.visit('https://idp.futurenation.gov.bd/auth/realms/future-nation-web/protocol/openid-connect/auth?client_id=future-nation&redirect_uri=https%3A%2F%2Fplatform.futurenation.gov.bd&response_type=code&scope=openid+profile+email&state=e053f42323634e69ac76f6baff2a9794&code_challenge=TivLFlG-4QHq4ZQoKanLsdN8gkFSVbyLPSWLKq_ObUY&code_challenge_method=S256&response_mode=query')

    cy.url().should('eq', 'https://idp.futurenation.gov.bd/auth/realms/future-nation-web/protocol/openid-connect/auth?client_id=future-nation&redirect_uri=https%3A%2F%2Fplatform.futurenation.gov.bd&response_type=code&scope=openid+profile+email&state=e053f42323634e69ac76f6baff2a9794&code_challenge=TivLFlG-4QHq4ZQoKanLsdN8gkFSVbyLPSWLKq_ObUY&code_challenge_method=S256&response_mode=query')

 // Enter email and password
    cy.get('#username').type(example.loginWithValidData.email);
    cy.get('#password').type(example.loginWithValidData.password);

    // Submit the form
    cy.get('.kc-login-common-style').click();
    cy.get('.MuiButtonBase-root').click();
    cy.get('h1:nth-child(1)').should('contain', 'Welcome,');

  });


   it('should Login page form unsuccessfully', () => {
    cy.visit('https://platform.futurenation.gov.bd/');
    cy.url().should('eq', 'https://platform.futurenation.gov.bd/')
    cy.visit('https://idp.futurenation.gov.bd/auth/realms/future-nation-web/protocol/openid-connect/auth?client_id=future-nation&redirect_uri=https%3A%2F%2Fplatform.futurenation.gov.bd&response_type=code&scope=openid+profile+email&state=e053f42323634e69ac76f6baff2a9794&code_challenge=TivLFlG-4QHq4ZQoKanLsdN8gkFSVbyLPSWLKq_ObUY&code_challenge_method=S256&response_mode=query')

    cy.url().should('eq', 'https://idp.futurenation.gov.bd/auth/realms/future-nation-web/protocol/openid-connect/auth?client_id=future-nation&redirect_uri=https%3A%2F%2Fplatform.futurenation.gov.bd&response_type=code&scope=openid+profile+email&state=e053f42323634e69ac76f6baff2a9794&code_challenge=TivLFlG-4QHq4ZQoKanLsdN8gkFSVbyLPSWLKq_ObUY&code_challenge_method=S256&response_mode=query')

 // Enter email and password
    cy.get('#username').type(example.loginWithinValidData.email);
    cy.get('#password').type(example.loginWithinValidData.password);

    // Submit the form
    cy.get('.kc-login-common-style').click();
    cy.get('#input-error').should('contain', 'Invalid username or password.');
  });
  
});

describe('Should be update user Profile', () => {
    it('verify the profile update', () => {
 
   cy.visit('https://platform.futurenation.gov.bd/');
    cy.url().should('eq', 'https://platform.futurenation.gov.bd/')
    cy.visit('https://idp.futurenation.gov.bd/auth/realms/future-nation-web/protocol/openid-connect/auth?client_id=future-nation&redirect_uri=https%3A%2F%2Fplatform.futurenation.gov.bd&response_type=code&scope=openid+profile+email&state=e053f42323634e69ac76f6baff2a9794&code_challenge=TivLFlG-4QHq4ZQoKanLsdN8gkFSVbyLPSWLKq_ObUY&code_challenge_method=S256&response_mode=query')

    cy.url().should('eq', 'https://idp.futurenation.gov.bd/auth/realms/future-nation-web/protocol/openid-connect/auth?client_id=future-nation&redirect_uri=https%3A%2F%2Fplatform.futurenation.gov.bd&response_type=code&scope=openid+profile+email&state=e053f42323634e69ac76f6baff2a9794&code_challenge=TivLFlG-4QHq4ZQoKanLsdN8gkFSVbyLPSWLKq_ObUY&code_challenge_method=S256&response_mode=query')

 // Enter email and password
    cy.get('#username').type(example.loginWithValidData.email);
    cy.get('#password').type(example.loginWithValidData.password);

    // Submit the form
    cy.get('.kc-login-common-style').click();
    cy.get('.MuiButtonBase-root').click();
    cy.get('h1:nth-child(1)').should('contain', 'Welcome,');
    cy.get('.AppHeader-headerMainFlex > .css-1vd84sn > .AppHeader-menuItem > a').click();
    cy.get('.basic-info-name-box > .MuiButtonBase-root > .MuiTypography-root').click();
    cy.get(':nth-child(3) > .css-tzsjye > .MuiFormControl-root > .MuiInputBase-root').type('ggg');
    cy.get('.MuiDialogActions-root > .MuiButton-contained').click();

    })

   });



describe('Find broken links on the page', () => {
    it('verify navigation across the pages', () => {
        cy.visit('https://platform.futurenation.gov.bd/')
        let brokenLinks = 0
        let activeLinks = 0
        cy.get('a').each(($link, index) => {
            const href = $link.attr('href')
            if (href) {
                cy.request({ url: href, failOnStatusCode: false }).then((response) => {
                    if (response.status >= 400) {

                        cy.log(`**** link  ${index + 1} is Broken Link *** ${href} `)
                        brokenLinks++
                    }
                    else {  
                        cy.log(`*** link  ${index + 1} is Active Link ***`)
                        activeLinks++
                    }
                })
            }

        }).then(($links) => {
            const totalLinks = $links.length
            cy.log(`**** total links **** ${totalLinks}`)
            cy.log(`**** broken links **** ${brokenLinks}`)
            cy.log(`**** active links **** ${activeLinks}`)

        })
    })

   });


