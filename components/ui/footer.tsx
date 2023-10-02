import Logo from './logo'

export default function Footer() {
  return (
    <footer>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Top area: Blocks */}
        <div className=" grid sm:grid-cols-6 gap-8 py-8 md:py-12 border-t border-gray-200">
          {/* 1st block */}
          <div className="sm:col-span-12 lg:col-span-3">
            <div className="mb-2">
              <Logo />
            </div>
            <div className="text-sm text-gray-600">
              <a href="#0" className="text-gray-600 hover:text-gray-900 hover:underline transition duration-150 ease-in-out">Terms</a> · <a href="#0" className="text-gray-600 hover:text-gray-900 hover:underline transition duration-150 ease-in-out">Privacy Policy</a>
            </div>
          </div>

          {/* 2nd block */}
          <div className=" sm:col-span-2 md:col-span-3 lg:col-span-2">
            <h6 className="text-gray-800 font-medium mb-2">Products</h6>
            <ul className="text-sm">
              <li className="mb-2">
                <a href="#0" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">Home</a>
              </li>
              <li className="mb-2">
                <a href="https://kyr.vercel.app/" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">KYR</a>
              </li>
              <li className="mb-2">
                <a href="https://case-pedia.vercel.app/" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">CasePedia</a>
              </li>
              <li className="mb-2">
                <a href="https://codelegalist123.github.io/LegalAidProviders/" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">Aid Provider</a>
              </li>
            </ul>
          </div>
        </div>

        
            
            

          {/* Copyrights note */}
          <div className="text-sm text-gray-600 mr-4">&copy; codelegalist. All rights reserved.</div>
        </div>
    </footer>
  )
}
