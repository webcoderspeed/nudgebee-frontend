import { Lato } from 'next/font/google';
import Navbar from '@/components/Navbar/Navbar';

const inter = Lato({
	subsets: ['latin'],
	weight: '400',
});

export default function Home() {
	return (
		<main
      className={`${inter.className}`}
    >
			<Navbar />
		</main>
	);
}
