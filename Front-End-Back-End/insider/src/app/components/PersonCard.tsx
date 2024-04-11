interface PersonCardProps {
    image: string;
    name: string;
    job: string;
    children?: React.ReactNode;
}

const PersonCard: React.FC<PersonCardProps> = ({ image, name, job, children }) => {
    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <img className="w-full" src={image} alt={name} />
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{name}</div>
                <p className="text-gray-700 text-base">{job}</p>
            </div>
            <div className="px-6 pt-4 pb-2">
                {children}
            </div>
        </div>
    );
};

export default PersonCard;
