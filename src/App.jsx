import NavBar from "./components/nav/NavBar";
import Hero from "./components/hero/Hero";
import Banner from "./components/banner/Banner";
import Products from "./components/product/Products";
function App() {
  return (
    <>
    <div className="fixed w-full z-[100]">
      <NavBar />
    </div>
    <div className="h-20 bg-white"/>
      <Hero />
      <Banner/>
      <Products/>
    </>
  );
}

export default App;
