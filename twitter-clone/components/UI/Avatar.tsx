import Image from 'next/image'

interface AvatarProps {
    src: string
    border?: boolean
    large?: boolean
}

const Avatar: React.FC<AvatarProps> = ({src, border, large}) => {
    return (
        <div className={`
            ${border ? 'border-4 border-black' : ''}
            ${large ? 'h-32 w-32': 'h-12 w-12'}
            rounded-full
            hover:opacity-80
            transition
            cursor-pointer
            relative
            bg-blue-50
        `}>
            <Image alt="" fill style={{objectFit: 'cover', borderRadius: "100%"}} src={src} />
        </div>
    );
};

export default Avatar;