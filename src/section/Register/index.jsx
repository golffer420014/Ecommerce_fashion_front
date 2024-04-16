import { Link } from "react-router-dom";
import Btn from "../../components/Btn";
import Input from "../../components/Input";

const Register = () => {
    return (
        <div className="flex items-center justify-center  h-[95vh] bg-[#d8c8db]">
            <div className=" p-10  border rounded-3xl backdrop-blur-xl bg-white/30 shadow-xl hover:shadow-primary/30 transition-all duration-300  my-10 w-[400px] flex items-center justify-center">
                <div className=" w-full h-full">
                    <div className="text-3xl text-primary font-bold">
                        Register
                    </div>
                    <div className="my-6 ">
                        <div className="flex flex-col gap-4">
                            <Input placeholder="ชื่อ" />
                            <Input placeholder="นามสกุล" />
                            <Input placeholder="อีเมล" />
                            <Input placeholder="ชื่อผู้ใช้" />
                            <Input placeholder="รหัสผ่าน" />
                            <Input placeholder="ยืนยันรหัสผ่าน" />
                        </div>
                    </div>
                    <Link to={'/regis-address'}>
                    <Btn title="สมัครสมาชิก" />
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Register;
