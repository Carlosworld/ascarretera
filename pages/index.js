import HeroSlider from "../components/HeroSlider/HeroSlider";
import ShopCategories from "../components/ShopCategories/ShopCategories.container";
import FeaturedProducts from "../components/FeaturedProducts/FeaturedProducts";
import PageTitleBox from "../components/PageTitleBox/PageTitleBox";
import Mapa from "../components/Mapa/Mapa";
import Contacto from "../components/Contacto/Contacto";
import Info from "../components/Info/Info";
import Infopage from "../components/Infopage/Infopage";
import OurServices from "../pages/our-services";

export default function Home() {
  return (
    <>
      <HeroSlider />
      <Info />
      <PageTitleBox />
      <Infopage />
      <OurServices />
      {/* <ShopCategories /> */}
      {/* <FeaturedProducts /> */}
      <Mapa />
      <Contacto />
    </>
  );
}
