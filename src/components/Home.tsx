import { Link } from "react-router-dom";
import InsightApi from "./api";


const Home = () => {
InsightApi.wakeUp();
  return (
    <div className="bg-gray-100 min-h-screen">
         <div className='flex justify-center'>
          <div className='container relative'>
          <img src="https://hips.hearstapps.com/hmg-prod/images/2000-honda-insight-what-to-buy-105-1663605331.jpg?crop=1.00xw:1.00xh;0,0&resize=1200:*"
               alt="ficus green insight"
               className='w-full'/>
          <span className='absolute bottom-0w-full top-6 right-4 text-center mt-1 mr-2 text-md font-sans font-bold md:mt-10 md:top-10 md:right-10 md:text-xl lg:right-16 lg:text-2xl'>Honda's most slept-on car.</span>
          </div>
        </div>

      {/* Hero section */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
              Welcome to 1g Honda Insight!
            </h1>
            <p className="mt-4 mb-6 text-lg text-gray-600">
              A place where you can find all things 1st Gen Honda Insight.
            </p>
            <Link to="/about" className="mt-6">
              <a className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded">
                About
              </a>
            </Link>
          </div>
        </div>
      </div>

      {/* Features section */}
      <div className="bg-gray-200 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900">Site Features</h2>
            <p className="mt-4 text-lg text-gray-600">
              Learn all about the Honda Insight.
            </p>
          </div>
          {/* Feature cards */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900">Online Marketplace Listings</h3>
                <p className="mt-4 text-gray-600">
                  Browse Listings from FB Marketplace, Offerup
                </p>
                <div className="mt-6 flex justify-between">
                  <Link to="/listings/fb">
                    <a className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded">
                    Facebook
                    </a>
                  </Link>
                  <Link to="/listings/offerup">
                    <a className="bg-emerald-700 hover:bg-emerald-900 text-white font-bold py-3 px-8 rounded place-self-end">
                    Offerup
                    </a>
                  </Link>
            </div>
              </div>
            </div>
            {/* Feature 2 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900">Feature 2</h3>
                <p className="mt-4 text-gray-600">
                  Description of Feature 2.
                </p>
              </div>
            </div>
            {/* Feature 3 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900">Feature 3</h3>
                <p className="mt-4 text-gray-600">
                  Description of Feature 3.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>


      {/* Footer */}
      <footer className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <p className="text-sm">&copy; {new Date().getFullYear()} Your Website. All rights reserved.</p>
          <div>
            <a href="#" className="text-gray-400 hover:text-white ml-4">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-white ml-4">Terms of Service</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;