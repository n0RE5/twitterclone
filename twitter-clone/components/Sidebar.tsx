import { useState } from "react";
import { BsHouseFill, } from 'react-icons/bs'
import { BiLogOut } from "react-icons/bi";
import { FaUser } from 'react-icons/fa'
import SidebarItem from "./UI/SidebarItem";
import SidebarTweet from "./UI/SidebarTweet";
import Logo from "./UI/Logo";
import { useRouter } from "next/router";
import { useAppDispatch, useAppSelector } from "@/hooks/useRedux";
import { userLogout } from "@/store/reducers/userSlice";

const Sidebar = () => {
    const router = useRouter()
    const dispatch = useAppDispatch()
    const isAuth = useAppSelector(state => state.userSlice.isAuth)


    const [sidebarItems] = useState([
        {
            title: 'Home',
            href: '/',
            icon: BsHouseFill,
        },
        {
            title: 'Profile',
            href: '/users/1',
            icon: FaUser
        },
    ])

    const logout = () => {
        localStorage.removeItem('token')
        dispatch(userLogout())
        //todo custom alert
    }

    return (
        <div className="col-span-1 h-full pr-4 md:pr-4">
             <div className="flex flex-col items-end">
                <div className="space-y-2 lg:w-[230px]">
                    <Logo />
                    {sidebarItems.map((sidebarItem, index) =>
                        <SidebarItem 
                            key={index} 
                            onClick={() => router.push(sidebarItem.href)}
                            title={sidebarItem.title} 
                            icon={sidebarItem.icon} 
                        />
                    )}
                    {isAuth &&
                        <SidebarItem icon={BiLogOut} title="Logout" onClick={logout} />
                    }
                    <SidebarTweet />
                </div>
             </div>
        </div>
    );
};

export default Sidebar;