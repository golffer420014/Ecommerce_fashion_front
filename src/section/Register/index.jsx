/* eslint-disable no-unused-vars */
import Btn from "../../components/Btn";
import Input from "../../components/Input";
import { useState } from "react";
import { Alert } from "antd";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Register = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState({
        firstName: "",
        lastName: "",
        userName: "",
        password: "",
        conPassword: "",
        email: "",
    });

    console.log(user);
    const [errorMessage, setErrorMessage] = useState("");
    const handleSubmit = () => {
        const { conPassword, ...userData } = user;
        if (user.password !== user.conPassword) {
            setErrorMessage("Passwords do not match");
            return;
        }
        axios
            .post("http://localhost:3000/api/register", userData)
            .then((res) => {
                if (res && res.data) {
                    navigate("/regis-address");
                }
            })
            .catch((err) => console.log(err));
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser((prevUser) => ({
            ...prevUser,
            [name]: value,
        }));
    };

    return (
        <div className="flex items-center justify-center  h-[95vh] bg-[#d8c8db]">
            <div className=" p-10  border rounded-3xl backdrop-blur-xl bg-white/30 shadow-xl hover:shadow-primary/30 transition-all duration-300  my-10 w-[400px] flex items-center justify-center">
                <div className=" w-full h-full">
                    <div className="text-3xl text-primary font-bold">
                        Register
                    </div>
                    <div className="my-6 ">
                        <div className="flex flex-col gap-4">
                            <Input
                                placeholder="ชื่อ"
                                name={"firstName"}
                                value={user.firstName}
                                handleChange={handleChange}
                            />
                            <Input
                                placeholder="นามสกุล"
                                name={"lastName"}
                                value={user.lastName}
                                handleChange={handleChange}
                            />
                            <Input
                                placeholder="อีเมล"
                                name={"email"}
                                value={user.email}
                                handleChange={handleChange}
                            />
                            <Input
                                placeholder="ชื่อผู้ใช้"
                                name={"userName"}
                                value={user.userName}
                                handleChange={handleChange}
                            />
                            <Input
                                placeholder="รหัสผ่าน"
                                name={"password"}
                                value={user.password}
                                handleChange={handleChange}
                            />
                            <Input
                                placeholder="ยืนยันรหัสผ่าน"
                                name={"conPassword"}
                                value={user.conPassword}
                                handleChange={handleChange}
                            />
                            {errorMessage && (
                                <Alert
                                    message={errorMessage}
                                    type="error"
                                    showIcon
                                />
                            )}
                        </div>
                    </div>
                    <Btn title="สมัครสมาชิก" handleSubmit={handleSubmit} />
                </div>
            </div>
        </div>
    );
};

export default Register;
