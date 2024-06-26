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
    { id: 10, image: "https://via.placeholder.com/300x200", name: "Jack", role: "Kinesiologist", info: "Specializes in sports rehabilitation and functional movement." },
    { id: 11, image: "https://via.placeholder.com/300x200", name: "Kevin", role: "Librarian", info: "Organizes community reading programs." },
    { id: 12, image: "https://via.placeholder.com/300x200", name: "Laura", role: "Music Teacher", info: "Teaches piano and violin to children and adults." },
    { id: 13, image: "https://via.placeholder.com/300x200", name: "Mandy", role: "Nutritionist", info: "Specializes in dietary plans for athletes." },
    { id: 14, image: "https://via.placeholder.com/300x200", name: "Nigel", role: "Oceanographer", info: "Studies sea level changes and their impacts." },
    { id: 15, image: "https://via.placeholder.com/300x200", name: "Olive", role: "Pilot", info: "Flies commercial routes over the Pacific." },
    { id: 16, image: "https://via.placeholder.com/300x200", name: "Patty", role: "Quantum Physicist", info: "Researches particle physics and quantum theory." },
    { id: 17, image: "https://via.placeholder.com/300x200", name: "Quincy", role: "Researcher", info: "Conducts research on sustainable energy solutions." },
    { id: 18, image: "https://via.placeholder.com/300x200", name: "Rachel", role: "Surgeon", info: "Performs advanced cardiac surgery." },
    { id: 19, image: "https://via.placeholder.com/300x200", name: "Sam", role: "Teacher", info: "Teaches English at the local high school." },
    { id: 20, image: "https://via.placeholder.com/300x200", name: "Tina", role: "Ufologist", info: "Studies UFO sightings and collects evidence." }, { id: 21, image: "https://via.placeholder.com/300x200", name: "Uma", role: "Veterinarian", info: "Provides medical care for exotic pets." },
    { id: 22, image: "https://via.placeholder.com/300x200", name: "Vince", role: "Writer", info: "Writes novels and short stories." },
    { id: 23, image: "https://via.placeholder.com/300x200", name: "Wendy", role: "Xylophonist", info: "Performs in orchestras and solo recitals." },
    { id: 24, image: "https://via.placeholder.com/300x200", name: "Xavier", role: "Yogurt Maker", info: "Produces organic and flavored yogurts." },
    { id: 25, image: "https://via.placeholder.com/300x200", name: "Yasmine", role: "Zoologist", info: "Studies animal behavior in natural habitats." },
    { id: 26, image: "https://via.placeholder.com/300x200", name: "Zara", role: "Art Director", info: "Leads creative projects in advertising." },
    { id: 27, image: "https://via.placeholder.com/300x200", name: "Aaron", role: "Biologist", info: "Researches marine life conservation." },
    { id: 28, image: "https://via.placeholder.com/300x200", name: "Bella", role: "Chef", info: "Creates innovative dishes using local ingredients." },
    { id: 29, image: "https://via.placeholder.com/300x200", name: "Carlos", role: "Dentist", info: "Specializes in pediatric dentistry." },
    { id: 30, image: "https://via.placeholder.com/300x200", name: "Diana", role: "Engineer", info: "Develops solutions for renewable energy systems." },
    { id: 31, image: "https://via.placeholder.com/300x200", name: "Evan", role: "Farmer", info: "Operates an organic vegetable farm." },
    { id: 32, image: "https://via.placeholder.com/300x200", name: "Fiona", role: "Geologist", info: "Studies rock formations and earth processes." },
    { id: 33, image: "https://via.placeholder.com/300x200", name: "George", role: "Historian", info: "Writes about the medieval period." },
    { id: 34, image: "https://via.placeholder.com/300x200", name: "Hanna", role: "Interior Designer", info: "Designs residential and commercial spaces." },
    { id: 35, image: "https://via.placeholder.com/300x200", name: "Ian", role: "Journalist", info: "Covers international news and events." },
    { id: 36, image: "https://via.placeholder.com/300x200", name: "Julia", role: "Kite Designer", info: "Designs custom kites for competitions and recreation." },
    { id: 37, image: "https://via.placeholder.com/300x200", name: "Kyle", role: "Lawyer", info: "Specializes in intellectual property law." },
    { id: 38, image: "https://via.placeholder.com/300x200", name: "Lila", role: "Meteorologist", info: "Forecasts weather and studies climate patterns." },
    { id: 39, image: "https://via.placeholder.com/300x200", name: "Milo", role: "Nurse", info: "Provides care in an emergency room setting." },
    { id: 40, image: "https://via.placeholder.com/300x200", name: "Nina", role: "Optometrist", info: "Helps patients improve and care for their vision." },
    { id: 41, image: "https://via.placeholder.com/300x200", name: "Oscar", role: "Photographer", info: "Captures moments from around the world." },
    { id: 42, image: "https://via.placeholder.com/300x200", name: "Pam", role: "Quantum Scientist", info: "Conducts experiments on quantum computing." },
    { id: 43, image: "https://via.placeholder.com/300x200", name: "Quinn", role: "Restaurateur", info: "Owns and operates several small bistros." },
    { id: 44, image: "https://via.placeholder.com/300x200", name: "Riley", role: "Sculptor", info: "Creates abstract sculptures using recycled materials." },
    { id: 45, image: "https://via.placeholder.com/300x200", name: "Sasha", role: "Tailor", info: "Designs and sews custom suits and dresses." },
    { id: 46, image: "https://via.placeholder.com/300x200", name: "Toby", role: "Urologist", info: "Specializes in kidney and urinary system disorders." },
    { id: 47, image: "https://via.placeholder.com/300x200", name: "Ursula", role: "Vocalist", info: "Performs at jazz clubs and musical theatres." },
    { id: 48, image: "https://via.placeholder.com/300x200", name: "Victor", role: "Welder", info: "Expert in industrial and artistic welding projects." },
    { id: 49, image: "https://via.placeholder.com/300x200", name: "Willa", role: "Xenobiologist", info: "Researches life in extreme environments on Earth and potentially other planets." },
    { id: 50, image: "https://via.placeholder.com/300x200", name: "Xander", role: "Yacht Builder", info: "Designs and constructs luxury yachts." }

];

export default examplePeople;
