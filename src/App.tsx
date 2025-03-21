import React from "react";
import "./App.css";
import Navbar from "./component/Navbar";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
  Outlet,
} from "react-router-dom";
import { Calculator } from "./component/Calculator";
import { FoodList } from "./component/FoodList";
import { Recipe } from "./component/Recipe";
import { Login } from "./component/Login";
import { Register } from "./component/Register";
import NutriWiseBanner from "./component/FoodListNotif";
import GoToCalculator from "./component/GoToCalculator";

const AppContent: React.FC = () => {
  const location = useLocation();
  const showBanner = !['/calculator', '/food-list', '/recipe'].includes(location.pathname);

  return (
    <>
      <Navbar />
      {showBanner && (
        <NutriWiseBanner
          username="Hutao"
          foodItems={[
            { name: "Eggs", expiryDate: new Date("2023-08-20") },
            // { name: "Milk", expiryDate: new Date("2025-03-23") },
          ]}
          onAddFood={() => console.log("Add food")}
          onExpiryPress={() => console.log("View details")}
        />
      )}
      {showBanner && (
        <GoToCalculator />
      )}
      <Routes>
        <Route path="/calculator" element={<Calculator />} />
        <Route path="/food-list" element={<FoodList />} />
        <Route path="/recipe" element={<Recipe />} />
      </Routes>
    </>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/*" element={<AppContent />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
