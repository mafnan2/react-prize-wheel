import React, { useEffect, useState } from "react";
import Header from "./components/common/header";
import Footer from "./components/common/footer";

function Layout({ children }) {
//   const [load, setLoad] = useState(true);

//   useEffect(() => {
//     var imgs = document.images,
//       len = imgs.length,
//       counter = 0;
//     [].forEach.call(imgs, function (img) {
//       if (img.complete) incrementCounter();
//       else img.addEventListener("load", incrementCounter, false);
//     });

//     function incrementCounter() {
//       counter++;
//       if (counter === len) {
//         setTimeout(() => {
//           setLoad(false);
//         }, 1000);
//       }
//     }
//   }, []);

//   useEffect(() => {
//     if (load) {
//       document.body.style.overflow = "hidden";
//     } else {
//       document.body.style.overflow = "auto";
//       window.scroll(0, 0);
//     }
//   }, [load]);

 
  return (
    <>
      {/* {load && (
        <div
          style={{ backgroundColor: "#272727" }}
          className="min-h-screen flex items-center fixed z-50 justify-center inset-0 w-full"
        >
          <img
            className="w-1/3 md:w-auto circle"
            src="images/loader.svg"
            alt="loader"
          />
        </div>
      )} */}
        <Header />
        {children}
        <Footer />
    </>
  );
}

export default Layout;
