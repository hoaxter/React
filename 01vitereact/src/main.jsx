import React from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import App from './nitin.jsx' 
// we can directly import the component to the main.jsx and even import it with different name like here we have imported it with App name that is different from its original name "Nitin" of the function

import App from './App.jsx'
import Nitin from './nitin.jsx'

function myApp(){
  const username = "its a variable"
  return(
    <div>
      <h1>it was called through a function in the main using normal function call</h1>
      <h2>{username}</h2> 
    </div>
  )// we can use the evaluated expression or variable in html using {}
}

// we cant give directly object to save parsing cause this is custom parsing not in the format of react parsing format. 
// const reactElement = { // second we will create a element information as in react we need a info of a element that we are rendering
//     // we define a object and give info in it.
//     type: 'a', // we define the type of element eg. p, a, div ... 
//     props: {  // we are definig the properties of the element.
//         href: "https://google.com", // attributes of element
//         target: '_blank'            // attributes of element
//     },
//     Children: "Click me to visit  google " // the innercontent of the element
// }
// so we call it in render only by giving its name reactElement but we wont get the <a> element with its attribute cause render have different parsing values rather ones that we have customely defined

// we can render an element by directly giving the element like this, as react parser will parse it according to its format
const anotehrElement = (
    <a href="https://google.com" target='_blank'>Visit</a>
)

// making a element based on react syntax of parser
const reactElement = React.createElement(
  'a',
  {href:'https://www.facebook.com'},
  'facebook.com'
)

createRoot(document.getElementById('root')).render( 
  // myApp() // we can even call it like this as it is a function after all and also we dont need to make the function first letter capital
  // but we dont use this as it is not visually good and its not a good practice
  // reactElement // This render is having react parser not like the object in which we have defined our own parsing format.
  <>   
    <App />
    <Nitin/>
    {myApp()}
    {reactElement} 
  </>
) // we are using <></> as they are called fragment we can only give one tag to render so we use them instead of <div></div> we can use div but use them.
 // we can even call the function like this using {}
 // we can even call the object like this in {}
