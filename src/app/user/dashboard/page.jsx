import { authUserSession } from "@/libs/auth-libs";
import Image from "next/image";

const page = async() => {
    const user = await authUserSession()

  return (
    <div className="flex flex-col pt-2 gap-2 text-2xl justify-center w-full">
        <h1  className="">DASHBOARD</h1>
        <h1 className="">Welcome,  {user.name}</h1>
        <Image className="" src={user.image} alt="..." width={350} height={400}/>
    </div>
  )
};

export default page;
