import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div className=" bg-primary py-2 px-[100px] flex flex-row items-center justify-between gap-4">
            <div className="p-1 px-2 rounded-full bg-primarySubCon hover:scale-125 transition-all">
                <Link to={'/'}>
                <div className="text-primary">icon</div>
                </Link>
            </div>
            <div className=" w-1/3">
                <input
                    type="text"
                    className=" outline-none rounded-md w-full p-2"
                    placeholder="ค้นหาสินค้า..."
                />
            </div> 
            <div className="flex gap-3 item s-center justify-center">
                <div className="p-1 px-2 rounded-full bg-primarySubCon hover:scale-125 transition-all">
                    <FontAwesomeIcon
                        icon={faCartShopping}
                        className="text-sm text-primary"
                    />
                </div>
                <Link to={'/login'}>
                    <div className="p-1 px-2 rounded-full bg-primarySubCon hover:scale-125 transition-all">
                        <FontAwesomeIcon
                            icon={faUser}
                            className="text-sm text-primary"
                        />
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default Navbar;
