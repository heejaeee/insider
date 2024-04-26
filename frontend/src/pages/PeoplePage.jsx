import { useState } from 'react';
import Card from '../components/Card/Card';

const initialPeople = [
    { id: 1, image: "https://via.placeholder.com/300x200", name: "Ally", role: "Data Analyst", info: "filler desc" },
    { id: 2, image: "https://via.placeholder.com/300x200", name: "Ben", role: "Car washer", info: "filler desc" },
    { id: 3, image: "https://via.placeholder.com/300x200", name: "Chloe", role: "Beekeeper", info: "filler desc" },
    { id: 4, image: "https://via.placeholder.com/300x200", name: "Daniel", role: "App developer", info: "dickhead." },
];

function PeoplePage() {
    const [people, setPeople] = useState(initialPeople);
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
