import { useState } from 'react';
import Card from '../components/Card/Card';
import examplePeople from '../data/examplePeopleData';

// AI Generated example people.

function PeoplePage() {
    const [people, setPeople] = useState(examplePeople);
    const [searchTerm, setSearchTerm] = useState('');
    const [sortField, setSortField] = useState('');
    const [sortDirection, setSortDirection] = useState('asc'); // asc or desc



    // const handleSort = (key) => {
    //     const sortedPeople = [...people].sort((a, b) => {
    //         const valA = a[key].toUpperCase();
    //         const valB = b[key].toUpperCase();
    //         if (valA < valB) return -1;
    //         if (valA > valB) return 1;
    //         return 0;
    //     });
    //     setPeople(sortedPeople);
    // };

    const handleSort = (field) => {
        const isAsc = sortField === field && sortDirection === 'asc';
        setSortDirection(isAsc ? 'desc' : 'asc');
        setSortField(field);

        const sortedPeople = [...people].sort((a, b) => {
            const valA = (typeof a[field] === 'string') ? a[field].toUpperCase() : a[field];
            const valB = (typeof b[field] === 'string') ? b[field].toUpperCase() : b[field];
            if (valA < valB) return isAsc ? 1 : -1;
            if (valA > valB) return isAsc ? -1 : 1;
            return 0;
        });
        setPeople(sortedPeople);
    }

    const getSortDirection = (field) => {
        return sortField === field ? (sortDirection === 'asc' ? '▲' : '▼') : '';
    };

    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
    }

    const filteredPeople = people.filter(person =>
        person.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '20px', padding: '20px' }}>
            <div style={{ gridColumn: '1 / -1', display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
                <input
                    type="text"
                    placeholder="Search by name..."
                    value={searchTerm}
                    onChange={handleSearch}
                    style={{ padding: '10px', marginRight: '10px', width: '200px' }}
                />
                <button className="sort-btn" onClick={() => handleSort('name')}>Sort by Name{getSortDirection('name')}</button>
                <button className="sort-btn" onClick={() => handleSort('role')}>Sort by Role{getSortDirection('role')}</button>
                {/* Add more sort and search options as needed */}
            </div>
            {filteredPeople.filter(person => person.name.toLowerCase().includes(searchTerm.toLowerCase())).map(person => (
                <Card
                    key={person.id}
                    image={person.image}
                    name={person.name}
                    role={person.role}
                    info={person.info}
                />
            ))}
        </div>
    );
}

export default PeoplePage;
