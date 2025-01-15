import AromasSection from "./components/aromas/AromasSection";
import ArticleCard from "./components/article/ArticleCard";
import AdditionalAssistance from "./components/assistance/AdditionalAssistance";
import BundlesShowcase from "./components/bundles/AesopHome";
import FestiveOffer from "./components/festiveoffer/FestiveOffer";
import BlackFooter from "./components/footer/BlackFooter";
import WhiteFooter from "./components/footer/WhiteFooter";
import Header from "./components/header/Header";
import ProductHighlight from "./components/highlight/ProductHighlight";
import ProductDetails from "./components/product-details/ProductDetails";
import ProductGrid from "./components/productGrid/ProductGrid";

const App = () => {

    return (
        <div>
            <Header/>
            <BundlesShowcase/>
            <ProductGrid/>
            <FestiveOffer/>
            <AromasSection/>
            <ProductHighlight/>
            <ProductDetails/>
            <AromasSection title="Aromatically alike"/>
            <AdditionalAssistance/>
            <ArticleCard/>
            <WhiteFooter />
            <BlackFooter/>
        </div>
    )
}

export default App;