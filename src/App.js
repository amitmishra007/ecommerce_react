import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ProductCard from "./components/ProductCard";
import SlickSlider from "./components/SlickSlider";
import TestimonialSection from "./components/TestimonialSection";
// import TestimonialText from "./components/TestimonialText";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="p_cont container">
        <ProductCard />
        <ProductCard
          image="https://www.pngitem.com/pimgs/m/135-1359965_transparent-carrots-png-vegetable-carrot-png-download.png"
          title="Carrot"
          caption="Carrots are Orange and very rich in Vitamin A"
          dPrice={20.12}
          aPrice={26.79}
          discount={20}
        />
        <ProductCard
          image="https://images.squarespace-cdn.com/content/v1/5a8212f5e9bfdff7bedd9efb/1646687068109-B8VNKL2NHEFXAUK7PXEP/Pacific+Cauliflower+naked.png"
          title="Cauliflower"
          caption="Cauliflower is quite high in fiber, which is beneficial for overall health. "
          dPrice={13.11}
          aPrice={21.93}
          discount={18}
        />
        <ProductCard />
        <ProductCard />
      </div>
      {/* <TestimonialSection /> */}
      <SlickSlider />
      {/* <Button size="large" arrow="left" filled={true} /> */}
      <Footer />
    </div>
  );
}

export default App;
