/* eslint-disable react/prop-types */
const Input = ({ placeholder }) => {
    return (
            <input
                type="text"
                className="transition-all duration-700 rounded-md w-full p-2 outline-none focus:outline-primary"
                placeholder={placeholder}
            />
    );
};

export default Input;
