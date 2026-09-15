import ProfileCard from "./ProfileCard.jsx";
// import Header from "./components/Header";
// import Sidebar from "./components/Sidebar";
// import Main from "./components/Main";
// import Footer from "./components/Footer";
import Dashboard from "./Dashboard.jsx";

// function App() {
//   const user1 = {
//     name: "Disha Jaiswal",
//     age: 22,
//     role: "Software Developer"
//   };

//   const user2 = {
//     name: "Alice",
//     age: 28,
//     role: "Frontend Developer"
//   };

//   return (
//     <>
//       <h1>Hello World!</h1>

//       <ProfileCard {...user1} />
//       <ProfileCard {...user2} />

//       <Header />
//       <Sidebar />
//       <Main />
//       <Footer />
//     </>
//   );
// }

function App() {
  return (
    <Dashboard
      isLoggedIn={true}
      isAdmin={true}
      hasError={false}
    />
  );
}

export default App;
