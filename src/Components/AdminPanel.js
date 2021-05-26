import { useRef, useState } from 'react';
import { db, storageRef } from '../firebase';
import '../css/Components/AdminPanel/Main.css';

const AdminPanel = () => {
	const [nameData, setNameData] = useState('');
	const [projectImage, setProjectImage] = useState();
	const [websiteLinkData, setWebsiteLinkData] = useState('');
	const [gitHubLinkData, setGitHubLinkData] = useState('');
	const [blurbData, setBlurbData] = useState('');
	const [featured, setFeatured] = useState(false);

	const filePicker = useRef();

	const clearForm = () => {
		setNameData('');
		setProjectImage('');
		setWebsiteLinkData('');
		setGitHubLinkData('');
		setBlurbData('');
		setFeatured(false);
	};

	const handleFormSubmit = async (e) => {
		e.preventDefault();
		try {
			const fileRef = storageRef.child(projectImage.name);
			await fileRef.put(projectImage);
			const imageUrl = await fileRef.getDownloadURL();
			const newProject = {
				name: nameData,
				imageUrl,
				blurb: blurbData,
				websiteLink: websiteLinkData,
				gitHubLink: gitHubLinkData,
				featured,
			};
			db.collection('projects').add(newProject);
			clearForm();
		} catch (error) {
			console.log(error);
		}
	};

	const handleFilePicker = () => {
		filePicker.current.click();
	};

	return (
		<div className="admin-panel">
			<form action="" onSubmit={(e) => handleFormSubmit(e)}>
				<div className="form-group">
					<label htmlFor="name">Project Name</label>
					<input
						type="text"
						name="name"
						onChange={(e) => setNameData(e.target.value)}
						value={nameData}
					/>
				</div>

				<div className="form-group">
					<label htmlFor="image">Project Image</label>

					<input
						type="file"
						name="image"
						onChange={(e) => setProjectImage(e.target.files[0])}
						ref={filePicker}
					/>
					<div className="custom-file-picker">
						<button
							className="btn file-picker-btn"
							onClick={() => handleFilePicker()}>
							Choose a image
						</button>
						{projectImage ? (
							<p>{`1 File Selected - ${projectImage.name}`}</p>
						) : (
							''
						)}
					</div>
				</div>

				<div className="form-group">
					<label htmlFor="websiteLink">Website Link</label>
					<input
						type="text"
						name="websiteLink"
						onChange={(e) => setWebsiteLinkData(e.target.value)}
						value={websiteLinkData}
					/>
				</div>

				<div className="form-group">
					<label htmlFor="gitHublink">Github Link</label>
					<input
						type="text"
						name="gitHublink"
						onChange={(e) => setGitHubLinkData(e.target.value)}
						value={gitHubLinkData}
					/>
				</div>

				<div className="form-group">
					<label htmlFor="blurb">Project Blurb</label>
					<textarea
						type="text"
						name="blurb"
						onChange={(e) => setBlurbData(e.target.value)}
						value={blurbData}
					/>
				</div>

				<div className="form-group">
					<label htmlFor="featured">Featured</label>
					<input
						type="checkbox"
						name="featured"
						onChange={(e) => setFeatured(e.target.value)}
						value={featured}
					/>
				</div>
				<div className="button-group">
					<button className="btn">Submit</button>
					<button
						type="button"
						className="btn"
						onClick={() => clearForm()}>
						Cancel
					</button>
				</div>
			</form>
		</div>
	);
};

export default AdminPanel;
