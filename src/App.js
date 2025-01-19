import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/navigation/Navbar";
import Sidebar from "./components/navigation/Sidebar";
import WalletScreen from "./components/screens/Wallet";

function App() {
  return (
    <div className="relative z-0  h-screen">
      {/* <div className="absolute w-auto h-full">
        <img className="" src="images/bg.png" width="100%" height="100%" />
      </div> */}
      <Navbar />
      <main className=" flex">
        <Sidebar />
        <WalletScreen />
      </main>
    </div>
  );
}

export default App;
