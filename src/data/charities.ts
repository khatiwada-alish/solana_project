export interface Charity {
  id: string;
  name: string;
  description: string;
  walletAddress: string;
  category: string;
  logo: string;
}

export const charities: Charity[] = [
  {
    id: "1",
    name: "Nepal Scouts",
    description: "Developing the physical, intellectual, and social potential of young people through value-based scouting and community service.",
    walletAddress: "4Vn2B8mQ9kL1xZ7jR5wT0yP3sH6gD4fE8uA1iO9pC2nM",
    category: "Youth Development",
    logo: "⚜️",
  },
  {
    id: "2",
    name: "Nepal Red Cross Society",
    description: "The largest humanitarian organization in Nepal, providing emergency health, blood transfusion services, and disaster relief.",
    walletAddress: "6Np9X7kM2bL5vR1jQ8wD4tY3sH0gA5zF7uP2iE1oX4nB",
    category: "Humanitarian Aid",
    logo: "🏥",
  },
  {
    id: "3",
    name: "Maiti Nepal",
    description: "A leading non-profit dedicated to protecting girls and women from human trafficking, domestic violence, and exploitation.",
    walletAddress: "2Km8L4fQ0nW3xR5jY1vC6bP9dT7sH2gE4uA8iO6pZ3mB",
    category: "Social Protection",
    logo: "👩‍👧",
  },
  {
    id: "4",
    name: "Tilganga Institute of Ophthalmology",
    description: "Restoring sight to thousands through world-class eye care, rural outreach clinics, and affordable cataract surgeries.",
    walletAddress: "9Rp2M4fQ7nW3xL5jY1vC6bR9dT0sH2gE4uA8iO6pZ3mN",
    category: "Healthcare",
    logo: "👁️",
  },
  {
    id: "5",
    name: "SOS Children's Villages Nepal",
    description: "Providing a loving home for children who have lost parental care and strengthening families to prevent child abandonment.",
    walletAddress: "3Kp5N2fR8nW1xL9jY4vC7bR0dT2sH6gE9uA3iO5pZ1mQ",
    category: "Child Welfare",
    logo: "🏠",
  },
  {
    id: "6",
    name: "Superteam Nepal",
    description: "A community of builders, developers, and creatives in Nepal working to launch and grow projects within the Solana ecosystem.",
    walletAddress: "StNp5X7kM2bL5vR1jQ8wD4tY3sH0gA5zF7uP2iE1oX4nB",
    category: "Web3 & Technology",
    logo: "🪙",
  },
];
