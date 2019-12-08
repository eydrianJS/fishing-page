import React from "react";
import { MyForm } from "./components/MyForm";
import Header from "./navigation/Header";


const App = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <Header />
      <MyForm
        onSubmit={({ email, firstName, lastName }) => {
          console.log(email, firstName, lastName);
        }}
      />
    </div>
  );
};

export default App;
