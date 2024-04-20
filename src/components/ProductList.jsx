import axios from "axios";
import { useEffect, useState } from "react";

const ProductList = () => {
    const [data, setData] = useState();
    const [isMouseEnter, setIsMouseEnter] = useState(false);
    useEffect(() => {
        axios
            .get("https://fakestoreapi.com/products")
            .then((res) => setData(res.data))
            .catch((err) => alert(`call product err ${err}`));
    }, []);

    if (!data) return <>Loading...</>;

    return (
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-4">
            {data.map((item) => (
                <div
                    onMouseEnter={() =>
                        setIsMouseEnter(() => ({
                            [`pr-${item.id}`]: true,
                        }))
                    }
                    onMouseLeave={() =>
                        setIsMouseEnter(() => ({
                            [`pr-${item.id}`]: false,
                        }))
                    }
                    key={item.id}
                    className={`bg-white border flex-shrink-0 flex-grow-0 col-span-1 rounded-md overflow-hidden
                    ${
                        isMouseEnter[`pr-${item.id}`]
                            ? "translate-y-[-6px] border-primary"
                            : ""
                    }
                    
                     transition-all duration-500
                    `}
                >
                    <div className="overflow-hidden py-4">
                        <img
                            src={item.image}
                            alt=""
                            className={`w-full h-[150px] object-contain transition-all duration-500
                            ${isMouseEnter[`pr-${item.id}`] ? 'scale-110' : ''}
                            `}
                        />
                    </div>
                    <div className="p-2 flex flex-col gap-4">
                        <div className="w-full">
                            {item.title.length > 20
                                ? item.title.slice(0, 25) + "..."
                                : item.title}
                        </div>
                        <div className="flex items-center justify-between">
                            <div className="text-primary">{item.price} B</div>
                            <div className="text-primary">{item.id}</div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ProductList;
