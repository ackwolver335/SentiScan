import React, {useEffect} from 'react'
import NavContact from '../components/NavContact'
import ContactIntro from '../components/ContactIntro'
import Connect from '../components/Connect'
import Questions from '../components/Questions';
import Clock from '../components/Clock';

export default function Contact(props) {

	// changing the title when it comes to the Home Page
	useEffect(() => {
		document.title = "Sentiment Analysis - Contact"
	}, []);

	return (
		<div className = "aboutIntro">
			<NavContact sound={props.sound} />
			<Clock sound={props.sound} />
			<ContactIntro />
			<Connect sound={props.sound} />
			<Questions />
		</div>
	)
}
