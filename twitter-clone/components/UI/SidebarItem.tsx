import { IconType } from "react-icons";

interface SidebarItemProps {
    title: string
    icon: IconType
    onClick?: () => void
}

const SidebarItem: React.FC<SidebarItemProps> = ({title, icon: Icon, onClick}) => {
    return (
        <div onClick={onClick} className="flex flex-row items-center">
            <div className="relative rounded-full h-14 w-14 flex items-center justify-center p-4 hover:bg-slate-300 hover:bg-opacity-10 cursor-pointer lg:hidden">
                <Icon size={28} color='white' />
            </div>
            <div className="relative gap-4 h-14 rounded-full items-center justify-center p-4 hover:bg-slate-300 hover:bg-opacity-10 cursor-pointer hidden lg:flex">
                <Icon size={28} color='white' />
                <span className="hidden lg:block text-white text-xl">{title}</span>
            </div>
        </div>
    );
};

export default SidebarItem;