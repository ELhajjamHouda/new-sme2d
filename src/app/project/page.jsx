import Preloader from "../../helper/Preloader";
import HeaderOne from "../../components/HeaderOne";
import Breadcrumb from "../../components/Breadcrumb"; 

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

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          fontSize: "24px",
          fontWeight: "bold",
        }}
      >
        🔧 Cette page sera bientôt disponible !
      </div>

      {/* TeamAreaTwoGrid  */}
      {/* <TeamAreaTwoGrid /> */}
    </>
  );
}
