describe('Login page', () => {
  before(() => {
    cy.log(`Visiting https://company.tld`);
    cy.visit('localhost:3000');
    cy.get('.login').click();
  });

  it('Login with Github', () => {
    const username = Cypress.env('GITHUB_USER');
    const password = Cypress.env('GITHUB_PW');
    const loginUrl = Cypress.env('SITE_NAME');
    const cookieName = Cypress.env('COOKIE_NAME');
    const socialLoginOptions = {
      username,
      password,
      loginUrl,
      headless: true,
      logs: true,
      isPopup: true,
      // loginSelector: '.login',
      // postLoginSelector: '.unread-count',
    };

    return cy
      .task('GitHubSocialLogin', socialLoginOptions)
      .then(({ cookies }) => {
        cy.clearCookies();

        const filteredCookies = cookies.filter((cookie) =>
          cookiesName.includes(cookie.name)
        );
        filteredCookies.forEach((cookie) => {
          cy.setCookie(cookie.name, cookie.value, {
            domain: cookie.domain,
            expiry: cookie.expires,
            httpOnly: cookie.httpOnly,
            path: cookie.path,
            secure: cookie.secure,
          });
        });

        Cypress.Cookies.defaults({
          preserve: cookiesName,
        });

        cy.visit('');
        // return cy
        //   .task('GithubSocialLogin', socialLoginOptions)
        //   .then(({ cookies }) => {
        //     cy.clearCookies();
        //     cy.log('cookies', cookies);

        //     const cookie = cookies
        //       .filter((cookie) => cookie.name === cookieName)
        //       .pop();
        //     if (cookie) {
        //       cy.setCookie(cookie.name, cookie.value, {
        //         domain: cookie.domain,
        //         expiry: cookie.expires,
        //         httpOnly: cookie.httpOnly,
        //         path: cookie.path,
        //         secure: cookie.secure,
        //       });

        //       Cypress.Cookies.defaults({
        //         preserve: cookieName,
        //       });

        //       // remove the two lines below if you need to stay logged in
        //       // for your remaining tests
        //       cy.visit('/api/auth/signout');
        //       cy.get('form').submit();
        // }
      });
  });
});
