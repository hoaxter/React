function customRender(reactElement, root){  // here we defined the function
// Rendering function like React try-1
//     const domElement = document.createElement(reactElement.type); // here we are saving the type of element in Variable
//     domElement.innerHTML=reactElement.Children; // assinging the innerhtml of above defined variable to reactElement children.
//     domElement.setAttribute('href', reactElement.props.href); // setting the attributes and their value
//     domElement.setAttribute('target', reactElement.props.target); // setting the attributes and their value.
//     root.appendChild(domElement); // appending the child in the root to make it render.

// Rendering function like React try-2
    const domElement = document.createElement(reactElement.type); // now in the above function it is not generalised its spcific to only to one element
    domElement.innerHTML = reactElement.Children; // this and its above line remained same from the previous function.
    for (const prop in reactElement.props) { // now we are using for in to take the reactElemet inner object props and we are traversing it values generally the attributes
        if(prop === 'Children') continue; // now sometimes or in the old react code children were also considered in the props for just that.
        domElement.setAttribute(prop, reactElement.props[prop]); // now we are setting the attributes that we traveresed.
    }   
    root.appendChild(domElement); // appending the element to the root.
}

const reactElement = { // second we will create a element information as in react we need a info of a element that we are rendering
    // we define a object and give info in it.
    type: 'a', // we define the type of element eg. p, a, div ... 
    props: {  // we are definig the properties of the element. 
        href: "https://google.com", // attributes of element
        target: '_blank'            // attributes of element
    },
    Children: "Click me to visit  google " // the innercontent of the element
}


const root = document.querySelector('#root');// first we will select the root div where the element will be insert or rendered

customRender(reactElement, root);  // third here we are calling a function that we will make.

