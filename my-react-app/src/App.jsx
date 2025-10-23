import Header from './Header.jsx';
import Footer from './Footer.jsx';
import Food from './Food.jsx';
import Card from './Card.jsx';
import Student from './Student.jsx';
import UserGreeting from './UserGreeting.jsx';



// The App component serves as the root component of the React application.
function App() {
  
  return (
    // The fragment syntax <> </> is used to group multiple 
    // elements without adding extra nodes to the DOM (Document Object Model).
    <>
      <Header/>

      <UserGreeting isLoggedIn={true} username="JohnDoe"/>




      <Student name="John Doe" age={20} isStudent={true}/>
      <Student name="Jane Smith" age={22} isStudent={false}/>
      <Student name="Alice Johnson" age={19} isStudent={true}/>
      <Student name="Bob Brown" age={23} isStudent={false}/>
      <Student />

      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Footer/>
    </>
  )
}

// Export the App component as the default export of this module.
export default App
