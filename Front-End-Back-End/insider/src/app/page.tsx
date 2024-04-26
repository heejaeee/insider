import PersonCard from "./components/PersonCard";

interface Person {
  id: number;
  name: string;
  job: string;
  image: string;
}

const Home: React.FC = () => {
  const people: Person[] = [
    { id: 1, name: 'John Doe', job: 'Web Developer', image: '/john-doe.jpg' },
    { id: 2, name: 'Jane Doe', job: 'Graphic Designer', image: '/jane-doe.jpg' },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {people.map(person => (
        <PersonCard key={person.id} name={person.name} job={person.job} image={person.image}>
          {/* You can insert additional information here */}
          <p>Additional info can go here.</p>
        </PersonCard>
      ))}
    </div>
  );
};

export default Home;
