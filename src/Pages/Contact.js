import React, { useEffect, useState } from 'react';
import emailjs from 'emailjs-com';
import {
	RiFacebookCircleLine,
	RiMessengerLine,
	RiLinkedinBoxLine,
	RiTwitterLine,
} from 'react-icons/ri';

import { TwitterTweetEmbed } from 'react-twitter-embed';

//css
import '../css/Pages/Contact/Main.css';
import '../css/Pages/Contact/Responsive.css';

const Contact = ({ setCurrentPage, openTag, closeTag }) => {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [message, setMessage] = useState('');
	const [modalMessage, setModalMessage] = useState('');

	const sendEmail = (e) => {
		e.preventDefault();
		emailjs
			.sendForm(
				'service_bqnpjhx',
				'template_i93awxq',
				e.target,
				'user_KOOQHMCSUbVYvW0SZMOgq'
			)
			.then(
				(result) => {
					if (result.text && result.text === 'OK') {
						setModalMessage(
							`Thank you for your inquiry, ${name}. I will be in touch soon`
						);
						setName('');
						setEmail('');
						setMessage('');
					} else {
						setModalMessage(
							'There seams to be an issue, please try again'
						);
						console.log(result.text);
					}
				},
				(error) => {
					setModalMessage(
						'There seams to be an issue, please try again'
					);
					console.log(error.text);
				}
			);
	};

	useEffect(() => {
		setCurrentPage('contact');
	}, []);

	return (
		<div className="contact">
			{modalMessage && (
				<div className="messagePageCover">
					<div className="messageBox">
						<p>{modalMessage}</p>
						<button onClick={() => setModalMessage('')}>OK</button>
					</div>
				</div>
			)}
			<div className="pageBackground">
				<p>CONTACT</p>
			</div>
			<div className="container">
				<div className="contactFormContainer">
					<h1>Get In Touch</h1>
					<form
						className="contactForm"
						onSubmit={(e) => sendEmail(e)}>
						<div className="inputGroup">
							<p>Name</p>
							<input
								type="text"
								value={name}
								onChange={(e) => setName(e.target.value)}
								name="name"
								required
							/>
						</div>
						<div className="inputGroup">
							<p>Email</p>
							<input
								type="email"
								value={email}
								onChange={(e) => setEmail(e.target.value)}
								name="email"
								required
							/>
						</div>
						<div className="inputGroup textArea">
							<p>Message</p>
							<textarea
								value={message}
								onChange={(e) => setMessage(e.target.value)}
								name="message"
								required
							/>
						</div>
						<div className="inputGroup">
							<button>Send</button>
						</div>
					</form>
				</div>

				{/* social media tags */}
				<div className="social">
					<TwitterTweetEmbed
						tweetId={'1376454932249853961'}
						placeholder="loading"
					/>
					<h3>You can also reach me here - </h3>

					<div className="socialIcons">
						{/* facebook =  https://fb.me/DeanRichardsWebDev */}
						<a
							href="https://fb.me/DeanRichardsWebDev"
							rel="noreferrer"
							target="_blank">
							<RiFacebookCircleLine />
						</a>
						{/* messenger = https://m.me/DeanRichardsWebDev  */}
						<a
							href="https://m.me/DeanRichardsWebDev"
							rel="noreferrer"
							target="_blank">
							<RiMessengerLine />
						</a>
						{/* linked in  = www.linkedin.com/in/DeanRichardsWebDev1981*/}
						<a
							href="https://www.linkedin.com/in/DeanRichardsWebDev1981"
							rel="noreferrer"
							target="_blank">
							<RiLinkedinBoxLine />
						</a>
						{/* twitter =  https://twitter.com/jaggysnake57 */}
						<a
							href="https://twitter.com/jaggysnake57"
							rel="noreferrer"
							target="_blank">
							<RiTwitterLine />
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Contact;
