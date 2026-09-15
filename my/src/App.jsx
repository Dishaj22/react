import ProfileCard from "./ProfileCard.jsx";
// import Header from "./components/Header";
// import Sidebar from "./components/Sidebar";
// import Main from "./components/Main";
// import Footer from "./components/Footer";
// import Dashboard from "./Dashboard.jsx";
import JobBoard from "./JobBorad.jsx";
import JobCard from "./JobCard.jsx";

// // function App() {
// //   const user1 = {
// //     name: "Disha Jaiswal",
// //     age: 22,
// //     role: "Software Developer"
// //   };

// //   const user2 = {
// //     name: "Alice",
// //     age: 28,
// //     role: "Frontend Developer"
// //   };

// //   return (
// //     <>
// //       <h1>Hello World!</h1>

// //       <ProfileCard {...user1} />
// //       <ProfileCard {...user2} />

// //       <Header />
// //       <Sidebar />
// //       <Main />
// //       <Footer />
// //     </>
// //   );
// // }

// function App() {
//   return (
//     <Dashboard
//       isLoggedIn={true}
//       isAdmin={true}
//       hasError={false}
//     />
//   );
// }
const jobs = [{id: 1,title: "Frontend Dev",company:"TechCrop",location:"Remote",isNew:true},

  {id: 2,title: "Digital",company:"Balaji",location: "office",isNew: true},

]

  


function App() {
  return (
    <div>
      <JobBoard jobs={jobs} />
    </div>
  );
}

export default App