import { Link } from "react-router-dom";

function Navbar() {
    return (
        <div className="sticky top-0 bg-[#03071E]/90 py-3 flex justify-between items-center mb-4 mt-2">
            <Link to="/" className='hover:text-[#F48C06] transition-colors duration-300'>
              <i className="fas fa-home ml-4 text-xl"></i>
            </Link>

            <h1 className="text-2xl font-bold">Better Taste</h1>

            <Link to="/signup" className='hover:text-[#F48C06] transition-colors duration-300 text-lg font-semibold'>
              <i className="fas fa-user-circle mr-4 text-2xl"></i>
            </Link>
        </div>
    )
}

export default Navbar;