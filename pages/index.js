import HeroSlider from "../components/HeroSlider/HeroSlider";
import ShopCategories from "../components/ShopCategories/ShopCategories.container";
import FeaturedProducts from "../components/FeaturedProducts/FeaturedProducts";
import PageTitleBox from "../components/PageTitleBox/PageTitleBox";
import Mapa from "../components/Mapa/Mapa";
import Contacto from "../components/Contacto/Contacto";
import Info from "../components/Info/Info";

export default function Home() {
  return (
    <>
      <HeroSlider />
      <Info />
      <PageTitleBox />
      {/* <ShopCategories /> */}
      {/* <FeaturedProducts /> */}
      {/* <Mapa /> */}
      <Contacto />
    </>
  );
}
