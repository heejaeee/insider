import { useState } from 'react';
import Card from '../components/Card/Card';

// AI Generated example people.
const examplePeople = [
    { id: 1, image: "https://via.placeholder.com/300x200", name: "Ally", role: "Data Analyst", info: "Expert in data visualization." },
    { id: 2, image: "https://via.placeholder.com/300x200", name: "Ben", role: "Car washer", info: "Specializes in eco-friendly car cleaning solutions." },
    { id: 3, image: "https://via.placeholder.com/300x200", name: "Chloe", role: "Beekeeper", info: "Passionate about sustainable beekeeping practices." },
    { id: 4, image: "https://via.placeholder.com/300x200", name: "Daniel", role: "App Developer", info: "Focuses on creating user-friendly mobile apps." },
    { id: 5, image: "https://via.placeholder.com/300x200", name: "Ella", role: "Florist", info: "Designs unique floral arrangements for all occasions." },
    { id: 6, image: "https://via.placeholder.com/300x200", name: "Frank", role: "Guitarist", info: "Plays in a local jazz band and teaches guitar lessons." },
    { id: 7, image: "https://via.placeholder.com/300x200", name: "Grace", role: "Hotel Manager", info: "Manages a boutique hotel with a focus on guest satisfaction." },
    { id: 8, image: "https://via.placeholder.com/300x200", name: "Henry", role: "Illustrator", info: "Creates artwork for books, magazines, and digital media." },
    { id: 9, image: "https://via.placeholder.com/300x200", name: "Ivy", role: "Jewelry Designer", info: "Crafts bespoke jewelry pieces using ethically sourced materials." },
    { id: 10, image: "https://via.placeholder.com/300x200", name: "Jack", role: "Kinesiologist", info: "Specializes in sports rehabilitation and functional movement." }
];

function PeoplePage() {
    const [people, setPeople] = useState(examplePeople);
    const [searchTerm, setSearchTerm] = useState('');


    const handleSort = (key) => {
        const sortedPeople = [...people].sort((a, b) => {
            const valA = a[key].toUpperCase();
            const valB = b[key].toUpperCase();
            if (valA < valB) return -1;
            if (valA > valB) return 1;
            return 0;
        });
        setPeople(sortedPeople);
    };

    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
    }

    const filteredPeople = people.filter(person =>
        person.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div>
            <div style={{ padding: 20 }}>
                <input
                    type="text"
                    placeholder="Search..."
                    value={searchTerm}
                    onChange={handleSearch}
                />
            </div>
            <div style={{ padding: 20 }}>
                <button onClick={() => handleSort('name')}>Sort by Name</button>
                <button onClick={() => handleSort('role')}>Sort by Role</button>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
                {filteredPeople.map(person => (
                    <Card
                        key={person.id}
                        image={person.image}
                        name={person.name}
                        role={person.role}
                        info={person.info}
                    />
                ))}
            </div>
        </div>
    );
}

export default PeoplePage;
