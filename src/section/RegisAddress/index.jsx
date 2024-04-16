import Btn from "../../components/Btn";
import Input from "../../components/Input";

const RegisAddress = () => {
    
    const handleSubmit = () =>{
        alert(2)
    }


    return (
        <div className="flex items-center justify-center h-[95vh] bg-[#d8c8db]">
            <div className=" p-10 rounded-3xl backdrop-blur-xl bg-white/30 shadow-xl hover:shadow-primary/30 transition-all duration-300  my-10 w-[400px] flex items-center justify-center">
                <div className=" w-full h-full">
                    <div className="text-3xl text-primary font-bold">
                        Register
                    </div>
                    <div className="my-6 ">
                        <div className="flex flex-col gap-4">
                            <Input placeholder="เบอร์มือถือ" />
                            <Input placeholder="จังหวัด" />
                            <Input placeholder="อำเภอ" /> 
                            <Input placeholder="ตำบล" />
                            <Input placeholder="รหัสไปรษณี" />
                            <textarea
                                rows="2"
                                placeholder="รายละเอียดที่อยู่"
                                className="transition-all duration-700 rounded-md w-full p-2 outline-none focus:outline-primary"
                            ></textarea>
                        </div>
                    </div>
                    <Btn title="ยืนยัน" handleSubmit={handleSubmit} />
                </div>
            </div>
        </div>
    );
};

export default RegisAddress;
