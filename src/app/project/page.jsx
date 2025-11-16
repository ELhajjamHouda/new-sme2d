import Preloader from "../../helper/Preloader";
import HeaderOne from "../../components/HeaderOne";
import Breadcrumb from "../../components/Breadcrumb"; 
import TeamAreaTwoGrid from "../../components/TeamAreaTwoGrid";
import Cart from "../../components/Cart"; 

export default function Page() {
  return (
    <>
      {/* Preloader */}
      <Preloader />

      {/* HeaderOne */}
      <HeaderOne />

      {/* Breadcrumb */}
      <Breadcrumb
        title="Projects"
        imageHeader="/assets/img/hero/project-1.jpeg"
      />
      {/* Cart */}
      <Cart /> 

      {/* TeamAreaTwoGrid  */}
      {/* <TeamAreaTwoGrid /> */}
    </>
  );
}
