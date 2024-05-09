// import Carousel from "./components/Home/Carousel";
import Link from "next/link";
import SearchInput from "./components/SearchInput";
// export default function Home() {
//   let slides = [
//     "https://i.pinimg.com/originals/51/82/ac/5182ac536727d576c78a9320ac62de30.jpg",
//     "https://wallpapercave.com/wp/wp3386769.jpg",
//     "https://wallpaperaccess.com/full/809523.jpg",
//     "https://getwallpapers.com/wallpaper/full/5/c/0/606489.jpg",
//   ];
//   return (
//    <>
//   <div className="py-3 mx-auto md:px-14 lg:px-32 max-w-7xl ">
//     <Carousel slides={slides} />
//   </div>
//  <section>
//     <div className="px-8 py-24 mx-auto md:px-12 lg:px-32 max-w-7xl">
//       <div className="grid items-center grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-24">
//         <div className="md:order-first">
//           <h1 className="text-4xl font-semibold tracking-tighter text-gray-900 text-balance">
//             Building one pagers together,
//             <span className="text-gray-600">wherever and anywhere</span>
//           </h1>
//           <p className="mt-4 text-base font-medium text-gray-500">
//             Control and added security. With decentralization, users have more
//             control over their data and transactions, and the platform is less
//             susceptible to malicious attacks.
//           </p>
//           <div className="flex flex-col items-center gap-2 mx-auto mt-8 md:flex-row">
//             <button className="inline-flex items-center justify-center w-full h-12 gap-3 px-5 py-3 font-medium text-white duration-200 bg-gray-900 md:w-auto rounded-xl hover:bg-gray-700 focus:ring-2 focus:ring-offset-2 focus:ring-black" aria-label="Primary action">
//               Primary button
//             </button>
//             <button className="inline-flex items-center justify-center w-full h-12 gap-3 px-5 py-3 font-medium duration-200 bg-gray-100 md:w-auto rounded-xl hover:bg-gray-200 focus:ring-2 focus:ring-offset-2 focus:ring-blue-500" aria-label="Secondary action">
//               Secondary button
//             </button>
//           </div>
//         </div>
//         <div className=" hidden md:block order-first  w-full mt-12 aspect-square lg:mt-0">
//           <div className=" p-2 overflow-hidden aspect-square border shadow-lg bg-gray-50 rounded-3xl">
//             <img src ={`/heroImg.jpg`} alt="hero_image_vegetables"  />
//           </div>
//         </div>
//       </div>
//     </div>
//   </section>
//    </>
//   );
// }

export default function Home() {
  return (
    <>
      <section className="relative w-full h-screen overflow-hidden">
        <img
          alt="Hero Image"
          className="w-full h-full object-cover object-center"
          height="700"
          src="/heroImg.jpg"
          style={{
            aspectRatio: "1400/700",
            objectFit: "cover",
          }}
          width="1400"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900/50" />
        <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center text-white">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            Discover Delicious Recipes
          </h1>
          <p className="mt-4 max-w-2xl text-lg sm:text-xl md:text-2xl">
            Find the perfect meal for any occasion with our easy-to-use recipe
            app.
          </p>
          <div className="mt-8 flex w-full justify-center max-w-md">
            <SearchInput  className="bg-white/10" />
          </div>
        </div>
      </section>
      <section className="py-12 md:py-16 lg:py-20">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8">
            Popular Recipe Categories
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8 lg:gap-10">
            <Link
              className="bg-gray-100 rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300"
              href="#"
            >
              <img
                alt="Breakfast"
                className="w-full h-48 object-cover"
                height="200"
                src="/placeholder.svg"
                style={{
                  aspectRatio: "300/200",
                  objectFit: "cover",
                }}
                width="300"
              />
              <div className="p-4">
                <h3 className="text-lg md:text-xl font-medium mb-2">
                  Breakfast
                </h3>
                <p className="text-gray-600 text-sm">
                  Start your day with delicious breakfast recipes.
                </p>
              </div>
            </Link>
            <Link
              className="bg-gray-100 rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300"
              href="#"
            >
              <img
                alt="Lunch"
                className="w-full h-48 object-cover"
                height="200"
                src="/placeholder.svg"
                style={{
                  aspectRatio: "300/200",
                  objectFit: "cover",
                }}
                width="300"
              />
              <div className="p-4">
                <h3 className="text-lg md:text-xl font-medium mb-2">Lunch</h3>
                <p className="text-gray-600 text-sm">
                  Satisfy your midday cravings with delectable lunch ideas.
                </p>
              </div>
            </Link>
            <Link
              className="bg-gray-100 rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300"
              href="#"
            >
              <img
                alt="Dinner"
                className="w-full h-48 object-cover"
                height="200"
                src="/placeholder.svg"
                style={{
                  aspectRatio: "300/200",
                  objectFit: "cover",
                }}
                width="300"
              />
              <div className="p-4">
                <h3 className="text-lg md:text-xl font-medium mb-2">Dinner</h3>
                <p className="text-gray-600 text-sm">
                  Enjoy a delicious and satisfying dinner with our recipes.
                </p>
              </div>
            </Link>
            <Link
              className="bg-gray-100 rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300"
              href="#"
            >
              <img
                alt="Desserts"
                className="w-full h-48 object-cover"
                height="200"
                src="/placeholder.svg"
                style={{
                  aspectRatio: "300/200",
                  objectFit: "cover",
                }}
                width="300"
              />
              <div className="p-4">
                <h3 className="text-lg md:text-xl font-medium mb-2">
                  Desserts
                </h3>
                <p className="text-gray-600 text-sm">
                  Indulge in sweet and delectable dessert recipes.
                </p>
              </div>
            </Link>
          </div>
        </div>
      </section>
      <section className="bg-gray-100 py-12 md:py-16 lg:py-20">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8">
            Featured Recipes
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
            <Link
              className="bg-white rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300"
              href="#"
            >
              <img
                alt="Chocolate Cake"
                className="w-full h-48 object-cover"
                height="200"
                src="/placeholder.svg"
                style={{
                  aspectRatio: "300/200",
                  objectFit: "cover",
                }}
                width="300"
              />
              <div className="p-4">
                <h3 className="text-lg md:text-xl font-medium mb-2">
                  Chocolate Cake
                </h3>
                <p className="text-gray-600 text-sm">
                  A rich and decadent chocolate cake recipe.
                </p>
              </div>
            </Link>
            <Link
              className="bg-white rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300"
              href="#"
            >
              <img
                alt="Grilled Salmon"
                className="w-full h-48 object-cover"
                height="200"
                src="/placeholder.svg"
                style={{
                  aspectRatio: "300/200",
                  objectFit: "cover",
                }}
                width="300"
              />
              <div className="p-4">
                <h3 className="text-lg md:text-xl font-medium mb-2">
                  Grilled Salmon
                </h3>
                <p className="text-gray-600 text-sm">
                  A delicious and healthy grilled salmon recipe.
                </p>
              </div>
            </Link>
            <Link
              className="bg-white rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300"
              href="#"
            >
              <img
                alt="Vegetable Stir-Fry"
                className="w-full h-48 object-cover"
                height="200"
                src="/placeholder.svg"
                style={{
                  aspectRatio: "300/200",
                  objectFit: "cover",
                }}
                width="300"
              />
              <div className="p-4">
                <h3 className="text-lg md:text-xl font-medium mb-2">
                  Vegetable Stir-Fry
                </h3>
                <p className="text-gray-600 text-sm">
                  A quick and flavorful vegetable stir-fry recipe.
                </p>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
