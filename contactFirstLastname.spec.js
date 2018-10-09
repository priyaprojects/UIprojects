const AppContainerView = require('./views/AppContainerView');
const ContactView = require('./views/ContactView');
const GettingStartedView = require('./views/GettingStartedView');

const { expect } = require('chai');

describe('Contact Section', () => {
let appContainer;
let contact;
let gettingStarted;

function checkErrors(name, msg,errors) {
// let errors = [];
try {
if (name){
throw Error (msg)
}
}
catch (e) {
errors.push(msg);
}
finally{
return errors;
}
}
// ======
// Hooks
// ======
beforeEach(() => {
appContainer = new AppContainerView();
appContainer.waitForJavaScriptToFinish();
gettingStarted = new GettingStartedView();
appContainer.renderAppWithNoListingsHyperwallet();
gettingStarted.waitForStartContainer().isVisible();
gettingStarted.selectCountry('GB');
gettingStarted.navigateNext();
contact = new ContactView();
contact.waitForContactContainer().isVisible();

expect(contact.waitForContactContainer().isVisible()).to.equal(true);
})

// ===========
// Test Case
// ===========

it('should not render first name and last name fields', () => {
console.log('ERROR :: '+(!contact.firstName.isExisting()));
console.log('ERROR :: '+(!contact.lastName.isExisting()));
//const checkErrors = () => {

let errors = [];
errors = checkErrors(() => {
expect(!contact.firstName.isExisting());
}, 'First name is not rendered', errors);

errors = checkErrors(() => {
expect(!contact.lastName.isExisting());
}, 'Last name is not rendered', errors);


if (errors.length > 0) {
for(let i=0;i<errors.length;i++){
throw new Error(errors[i]);
}
}

});


});
