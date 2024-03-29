import React from 'react';
import ReactDOM from 'react-dom/client'; // This I think indicates that this app is a client-side-rendered (csr) app



const root = ReactDOM.createRoot(document.getElementById('app'));

const user = {
    firstName: 'Peter',
    lastName: 'Parker'
};


// A "component" is just a function that returns jsx syntax.
function myComponent(user) {
    let name = user.firstName + ' ' + user.lastName


    return (
        <h1>
            Hello {name}!
        </h1>
    )
    // note the round brackets here, these round brackets makes it possible to write jsx syntax over multiple lines for readability.
    // I think this is a react specific syntax.
}

// Notice how we called the component like, in the same way as a typical function
root.render(myComponent(user));
