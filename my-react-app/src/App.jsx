import Header from './Header.jsx'
import Footer from './Footer.jsx'
import Food from './Food.jsx'
import Card from './card.jsx'
import Button from './Button.jsx'
import Student from './Student.jsx'
import UserGreeting from './userGreeting.jsx'

function App() {

    return (
        <>
        {/* <Header/>
        <Food/>
        <Footer/> 
        <Card/>
        <Button/>
        <Student name="Max" age={25} isStudent={true}/>
        <Student name = "Sita" />
        <Student name="Raju" age={15} isStudent={false}/>
        <Student name="Vishnu" age={50} isStudent={true}/>
        <Student name="Jayan" age={7} isStudent={false}/>
        <Student/>*/
        }
        <UserGreeting isLoggedIn={true} />
        </>
    );
}

export default App
