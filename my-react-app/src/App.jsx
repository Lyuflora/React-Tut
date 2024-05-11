import Header from './Header';
import Footer from './Footer';
import Card from './Card';
import Student from './Student'; // props
import UserGreeting from './UserGreeting'; // Conditional rendering

function App() {
  return (
    <>
      <Header />
      <Card />
      <Card />
      <Student name="Kii" age={55} isStudent={true}></Student>
      <Student></Student>
      <UserGreeting isLoggedIn={false} username="BroCode"></UserGreeting>
      <UserGreeting isLoggedIn={true} username="BroCode"></UserGreeting>
      <UserGreeting isLoggedIn={true}></UserGreeting>
      <Footer />
    </>
  );
}

export default App;
