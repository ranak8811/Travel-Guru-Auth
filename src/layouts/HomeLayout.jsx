// bg darken using normal css method
import { Link } from "react-router-dom";
import home_bg from "../assets/Rectangle_1.png";
import Navbar from "../components/Navbar";

const HomeLayout = () => {
  return (
    <div className="relative min-h-screen">
      {/* Blurred Background */}
      <div
        className="absolute inset-0"
        style={{
          background: `rgba(0,0,0,0.5) url(${home_bg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundBlendMode: "darken",
          filter: "blur(2px)",
          zIndex: 0,
        }}
      ></div>

      <div className="relative z-10 container mx-auto">
        <nav>
          <Navbar></Navbar>
        </nav>

        <div className="flex items-center justify-center h-[600px]">
          <Link to={"/details"} className="btn">
            Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomeLayout;

//----------------------------------------------------------------
//----------------------------------------------------------------
//----------------------------------------------------------------

// // bg darken using normal and tailwind css method

// import home_bg from "../assets/Rectangle_1.png";

// const HomeLayout = () => {
//   return (
//     <div className="relative min-h-screen">
//       {/* Blurred Background */}
//       <div
//         className="absolute inset-0"
//         style={{
//           backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${home_bg})`,
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//           filter: "blur(2px)",
//           zIndex: 0,
//         }}
//       ></div>

//       {/* Text Content */}
//       <div className="relative z-10 flex items-center justify-center h-full">
//         <p className="text-white text-3xl font-bold">hey</p>
//       </div>
//     </div>
//   );
// };

// export default HomeLayout;

//----------------------------------------------------------------

// // bg darken using daisy ui method

// import home_bg from "../assets/Rectangle_1.png";

// const HomeLayout = () => {
//   return (
//     <div className="relative min-h-screen">
//       {/* Blurred Background */}
//       <div
//         className="absolute inset-0 bg-black bg-opacity-50 filter blur-sm"
//         style={{
//           backgroundImage: `url(${home_bg})`,
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//           backgroundBlendMode: "darken",
//         }}
//       ></div>

//       {/* Text Content */}
//       <div className="relative z-10 flex flex-col items-center justify-center h-full space-y-4">
//         <p className="text-white text-3xl font-bold">hey</p>
//         {/* DaisyUI Button */}
//         <button className="btn btn-primary">Click Me</button>
//       </div>
//     </div>
//   );
// };

// export default HomeLayout;

//----------------------------------------------------------------

// // bg darken using tailwind css method
// import home_bg from "../assets/Rectangle_1.png";

// const HomeLayout = () => {
//   return (
//     <div className="relative min-h-screen">
//       {/* Blurred Background */}
//       <div
//         className="absolute inset-0 bg-black bg-opacity-50 filter blur-sm"
//         style={{
//           backgroundImage: `url(${home_bg})`,
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//           backgroundBlendMode: "darken",
//         }}
//       ></div>

//       {/* Text Content */}
//       <div className="relative z-10 flex items-center justify-center h-full">
//         <p className="text-white text-3xl font-bold">hey</p>
//       </div>
//     </div>
//   );
// };

// export default HomeLayout;

//----------------------------------------------------------------
