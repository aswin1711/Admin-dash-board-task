import { Header } from './Header';
import { Maincontent } from './Maincontent';

export function Contentwrapper() {
	return (
		<div className="content-wrapper">
			<Header />
			<Maincontent />
			{/* <section>Holds all the content</section> */}
			<footer>Copyright © Your Website 2020</footer>
		</div>
	);
}
