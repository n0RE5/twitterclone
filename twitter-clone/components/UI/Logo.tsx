import { useRouter } from 'next/router';
import { BsTwitter } from 'react-icons/bs'

const Logo = () => {
    const router = useRouter()
    return (
        <div onClick={() => router.push('/')} className="relative rounded-full w-14 h-14 flex items-center justify-center p-4 hover:bg-slate-300 hover:bg-opacity-10 cursor-pointer">
            <BsTwitter size={28} color='white' />
        </div>
    );
};

export default Logo;