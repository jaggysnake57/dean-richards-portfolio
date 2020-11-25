import React, { useEffect, useState } from 'react';
import {
	RiFacebookCircleLine,
	RiMessengerLine,
	RiLinkedinBoxLine,
	RiTwitterLine,
} from 'react-icons/ri';

//css
import '../css/Pages/Contact/Main.css';
import '../css/Pages/Contact/Responsive.css';

// RiFacebookCircleLine, RiMessengerLine, RiLinkedinBoxLine, RiTwitterLine
// AiOutlineLinkedin
// FiTwitter

const Contact = ({ setCurrentPage, openTag, closeTag }) => {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [question, setQuestion] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();
		alert('clicked');
	};

	useEffect(() => {
		setCurrentPage('contact');
	}, []);
	return (
		<div className="contact">
			<h1 className="component">
				<span className="tag-fragment">{'<'}</span>Get In Touch
				<span className="tag-fragment">{' />'}</span>
			</h1>

			<form className="contactForm">
				<div className="inputGroup">
					<p>{openTag('Name')}</p>
					<input
						type="text"
						value={name}
						onChange={(e) => setName(e.target.value)}
					/>
				</div>
				<div className="inputGroup">
					<p>{openTag('Email')}</p>
					<input
						type="email"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>
				</div>
				<div className="inputGroup textArea">
					<p>{openTag('Message')}</p>
					<textarea
						value={question}
						onChange={(e) => setQuestion(e.target.value)}
					/>
				</div>
				<div className="inputGroup">
					<button type="button" onClick={(e) => handleSubmit(e)}>
						{openTag('Send')}
					</button>
				</div>
			</form>

			{/* social media tags */}
			<div className="social">
				<h3>You can also reach me here - </h3>
				{/* facebook =  https://fb.me/DeanRichardsWebDev */}
				<a href="https://fb.me/DeanRichardsWebDev">
					<RiFacebookCircleLine />
				</a>

				{/* messenger = https://m.me/DeanRichardsWebDev  */}
				<a href="https://m.me/DeanRichardsWebDev">
					<RiMessengerLine />
				</a>

				{/* linked in  = www.linkedin.com/in/DeanRichardsWebDev1981*/}
				<a href="www.linkedin.com/in/DeanRichardsWebDev1981">
					<RiLinkedinBoxLine />
				</a>

				{/* twitter =  https://twitter.com/jaggysnake57 */}
				<a href="https://twitter.com/jaggysnake57">
					<RiTwitterLine />
				</a>
			</div>
		</div>
	);
};

export default Contact;
