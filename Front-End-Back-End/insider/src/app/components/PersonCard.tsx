import Image from "next/image";
import { ReactNode } from 'react';

interface PersonCardProps {
    image: string;
    name: string;
    job: string;
    children?: ReactNode;
}

const PersonCard = ({ image, name, job, children }: PersonCardProps) => {
    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg bg-theme-2">
            <Image src={image} alt={name} width={200} height={200} />
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2 text-theme-4">{name}</div>
                <p className="text-theme-4 text-base">{job}</p>
            </div>
            <div className="text-theme-4 px-6 pt-4 pb-2">
                {children}
            </div>
        </div>
    );
};

export default PersonCard;
