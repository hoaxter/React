import Ramen from './semy.jsx'
function App() {
  return (
    <>
    <h1>React with vite</h1>
    <Ramen/> 
    </>
  );//we can even import from another component and use it another component.
}
export default App
// While creating Components , the file dosent need to have a first letter capital but the function inside it need to have a first letter capital 
  //  -> eg. Filename: nitin.jsx , function name: function Nitin(){return(<h2>hi</h2>)}