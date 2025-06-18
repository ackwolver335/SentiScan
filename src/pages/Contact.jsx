import React, {useEffect} from 'react'
import NavContact from '../components/NavContact'
import ContactIntro from '../components/ContactIntro'
import Connect from '../components/Connect'
import Questions from '../components/Questions';

export default function Contact() {

	// changing the title when it comes to the Home Page
	useEffect(() => {
		document.title = "Sentiment Analysis - Contact"
	}, []);

	return (
		<>
			<NavContact />
			<ContactIntro />
			<Connect />
			<Questions />
		</>
	)
}
