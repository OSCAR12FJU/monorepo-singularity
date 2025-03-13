import { CarrouselTest } from "../sections/CarrouselTest";
import { HowWorks } from "../sections/HowWorks";
import { MakeFetch } from "../sections/MakeFetch";
import { OurServices } from "../sections/OurServices";
import { PrintipalPet } from "../sections/PrintipalPet";
import { Footer } from "./Footer";
import { Header } from "./Header";

export function Layout(){
    return(
        <>
        <Header />
        <main>
          <div  
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1920 1080' preserveAspectRatio='xMidYMid slice'%3E%3Crect x='0' y='0' width='1920' height='1080' fill='%23F3F6FB'/%3E%3Cpath d='M0 699L64 714.3C128 729.7 256 760.3 384 732.7C512 705 640 619 768 550.7C896 482.3 1024 431.7 1152 380.5C1280 329.3 1408 277.7 1536 269.5C1664 261.3 1792 296.7 1856 314.3L1920 332L1920 0L1856 0C1792 0 1664 0 1536 0C1408 0 1280 0 1152 0C1024 0 896 0 768 0C640 0 512 0 384 0C256 0 128 0 64 0L0 0Z' fill='%23F8583E'/%3E%3C/svg%3E")`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",}}>
         <PrintipalPet />
          </div>
         <OurServices />
         <CarrouselTest />
         <HowWorks />
         <MakeFetch />
        </main>
        <Footer />

        </>

    )


}