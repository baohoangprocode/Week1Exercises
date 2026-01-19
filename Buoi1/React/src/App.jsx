import { useState } from "react";
import ProductCard from "./Components/ProductCard/ProductCard";
import Login from "./pages/login/login";

const App = () => {
  const [isSHowLogin, setIsShowLogin] = useState(false);

  const listProducts = [
    {
      name: "Spaghetti",
      price: "$35.3",
      buttonType: "primary",
    },
    {
      name: "Spaghetti 1",
      price: "$35.3",
      buttonType: "danger",
    },
    {
      name: "Spaghetti 2",
      price: "$35.3",
      buttonType: "success",
    },
  ];
  return (
    <div>
      <div className="box">
        {listProducts.map((product) => (
          <ProductCard
            key={product.name}
            name={product.name}
            price={product.price}
            buttonType={product.buttonType}
          />
        ))}
      </div>
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          marginTop: "90px",
        }}
      >
        <button
          style={{ padding: "10px" }}
          onClick={() => setIsShowLogin(!isSHowLogin)}
        >
          Login
        </button>
      </div>
      {isSHowLogin && <Login onClose={() => setIsShowLogin(false)} />}
    </div>
  );
};

export default App;
