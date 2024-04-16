import { Link } from "react-router-dom";
import Btn from "../../components/Btn";
import Input from "../../components/Input";

const Login = () => {
    return (
        <div className="flex items-center justify-center bg-primaryBg h-[95vh] bg-[#d8c8db]">
            <div className=" p-10 rounded-3xl backdrop-blur-xl bg-white/30 shadow-xl hover:shadow-primary/30 transition-all duration-300  my-10 w-[400px] flex items-center justify-center">
                <div className=" w-full h-full">
                    <div className="text-3xl text-primary font-bold">Login</div>
                    <div className="my-6 ">
                        <div className="flex flex-col gap-4">
                            <Input placeholder="อีเมล / ชื่อผู้ใช้" />
                            <Input placeholder="รหัสผ่าน" />
                        </div>
                        <div className="my-4 text-xs text-primary">
                            ลืมรหัสผ่าน ?
                        </div>
                        <Btn title="เข้าสู่ระบบ" />
                        <div className="my-4 text-xs text-primary">
                            พึ่งเคยเข้ามาใช่หรือไม่{" "}
                            <Link to={'/register'}>
                            <span className=" underline">สมัครใหม่</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
