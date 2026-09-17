// // import ProfileCard from "./ProfileCard.jsx";
// // // import Header from "./components/Header";
// // // import Sidebar from "./components/Sidebar";
// // // import Main from "./components/Main";
// // // import Footer from "./components/Footer";
// // // import Dashboard from "./Dashboard.jsx";
// // import JobBoard from "./JobBorad.jsx";
// // import JobCard from "./JobCard.jsx";
// import ProfileCard from "./ProfileCard.jsx";

// // // // function App() {
// // // //   const user1 = {
// // // //     name: "Disha Jaiswal",
// // // //     age: 22,
// // // //     role: "Software Developer"
// // // //   };

// // // //   const user2 = {
// // // //     name: "Alice",
// // // //     age: 28,
// // // //     role: "Frontend Developer"
// // // //   };

// // // //   return (
// // // //     <>
// // // //       <h1>Hello World!</h1>

// // // //       <ProfileCard {...user1} />
// // // //       <ProfileCard {...user2} />

// // // //       <Header />
// // // //       <Sidebar />
// // // //       <Main />
// // // //       <Footer />
// // // //     </>
// // // //   );
// // // // }

// // // function App() {
// // //   return (
// // //     <Dashboard
// // //       isLoggedIn={true}
// // //       isAdmin={true}
// // //       hasError={false}
// // //     />
// // //   );
// // // }
// // // const jobs = [{id: 1,title: "Frontend Dev",company:"TechCrop",location:"Remote",isNew:true},

// // //   {id: 2,title: "Digital",company:"Balaji",location: "office",isNew: true},

// // // ]
// import ProductList from "./ProductList";

// function App() {

//   const products = [
//     {
//       id: 101,
//       name: "Wireless Mouse",
//       price: 29.99,
//       inStock: true,
//       rating: 4
//     },
//     {
//       id: 102,
//       name: "Mechanical Keyboard",
//       price: 89.99,
//       inStock: false,
//       rating: 3.5
//     },
//     {
//       id: 103,
//       name: "USB-C Hub",
//       price: 45.00,
//       inStock: true,
//       rating: 4
//     },
//     {
//       id: 104,
//       name: "Bluetooth Speaker",
//       price: 58.99,
//       inStock: false,
//       rating: 4.9
//     },
//     {
//       id: 105,
//       name: "Laptop Stand",
//       price: 68.99,
//       inStock: true,
//       rating: 5
//     }
//   ];

//   return (
//     <>
//       <ProductList products={products} />
//     </>
//   );
// }

// export default App;


  


// // function App() {
// //   return (
// //     <div>
// //       {products.map((product) => (
// //         <ProductList
// //           key={product.id}
// //           name={product.name}
// //           price={product.price}
// //           inStock={product.inStock}
// //           rating={product.rating}

// //         />
// //       ))}
// //     </div>
// //   );
// // }
// // // function Child({ title, description }) {
// // //   return (
// // //     <div>
// // //       <h2>{title}</h2>
// // //       <p>{description.toUpperCase()}</p>
// // //     </div>
// // //   );
// // // }

// // // // function Parent() {
// // // //   return <Child title="Hello World" />;
// // // // }
// // // function Parent() {
// // //   return (
// // //     <Child
// // //       title="Hello World"
// // //       description="This is a description"
// // //     />
// // //   );
// // // }

// // // function App() {
// // //   return (
// // //     <div>
// // //       <Parent />
// // //     </div>
// // //   );
// // // }

// export default App;
// import ProductList from "./ProductList";

// function App() {
//   const products = [
//     {
//       id: 101,
//       name: "Wireless Mouse",
//       price: 29.99,
//       inStock: true,
//       rating: 4
//     },
//     {
//       id: 102,
//       name: "Mechanical Keyboard",
//       price: 89.99,
//       inStock: false,
//       rating: 3.5
//     },
//     {
//       id: 103,
//       name: "USB-C Hub",
//       price: 45.0,
//       inStock: true,
//       rating: 4
//     },
//     {
//       id: 104,
//       name: "Bluetooth Speaker",
//       price: 58.99,
//       inStock: false,
//       rating: 4.9
//     },
//     {
//       id: 105,
//       name: "Laptop Stand",
//       price: 68.99,
//       inStock: true,
//       rating: 5
//     }
//   ];

//   return (
//     <>
//       <ProductList products={products} />
//     </>
//   );
// }

// export default App;
// import InteractiveForm from "./InteractiveForm";

// function App() {
//   return (
//     <div>
//       <h1>Interactive Form</h1>
//       <InteractiveForm />
//     </div>
//   );
// }

// export default App;
import Counter from "./Counter";

function App() {
  return (
    <div>
      <h1>Counter App</h1>
      <Counter />
    </div>
  );
}

export default App;

