import { useEffect, useRef, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { db, storageRef } from '../firebase';
import '../css/Components/AdminPanel/Main.css';
import { useStateValue } from '../contexts/ProjectsContext';

const AdminPanel = ({
	editableProjectId,
	setEditableProjectId,
	getProjects,
}) => {
	const [{ projects, featuredProject }, dispatch] = useStateValue();

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
		setEditableProjectId({});
	};

	const handleFormSubmit = async (e) => {
		e.preventDefault();
		// check to see if its an edit or a new project
		if (editableProjectId) {
			let updatedProject = {
				name: nameData,
				blurb: blurbData,
				websiteLink: websiteLinkData,
				gitHubLink: gitHubLinkData,
				featured,
			};
			// check for a new image
			if (projectImage) {
				try {
					// upload the file and get the url
					const fileRef = storageRef.child(projectImage.name);
					await fileRef.put(projectImage);
					const imageUrl = await fileRef.getDownloadURL();
					// add url to the updated project
					updatedProject = {
						...updatedProject,
						imageUrl,
					};
					//update the project
					await db
						.collection('projects')
						.doc(editableProjectId)
						.update(updatedProject);
					// clear the form and update the page
					clearForm();
					getProjects();
				} catch (error) {
					console.log(error);
				}
			} else {
				// update the project without a new image
				await db
					.collection('projects')
					.doc(editableProjectId)
					.update(updatedProject);
				//clear the form and update the page
				clearForm();
				getProjects();
			}
		} else {
			//create a new project
			try {
				// upload the file and get the url
				const fileRef = storageRef.child(projectImage.name);
				await fileRef.put(projectImage);
				const imageUrl = await fileRef.getDownloadURL();
				// create the new project
				const newProject = {
					name: nameData,
					imageUrl,
					blurb: blurbData,
					websiteLink: websiteLinkData,
					gitHubLink: gitHubLinkData,
					featured,
				};
				//upload the new project
				db.collection('projects').add(newProject);
				//clear the form and update the page
				clearForm();
				getProjects();
			} catch (error) {
				console.log(error);
			}
		}
	};

	const handleFilePicker = () => {
		filePicker.current.click();
	};

	useEffect(() => {
		if (editableProjectId) {
			if (featuredProject.id === editableProjectId) {
				const { name, websiteLink, gitHubLink, blurb, featured } =
					featuredProject;
				setNameData(name);
				setProjectImage('');
				setWebsiteLinkData(websiteLink);
				setGitHubLinkData(gitHubLink);
				setBlurbData(blurb);
				setFeatured(featured);
			} else {
				projects.map((project) => {
					if (project.id === editableProjectId) {
						const {
							name,
							websiteLink,
							gitHubLink,
							blurb,
							featured,
						} = project;
						setNameData(name);
						setProjectImage('');
						setWebsiteLinkData(websiteLink);
						setGitHubLinkData(gitHubLink);
						setBlurbData(blurb);
						setFeatured(featured);
					}
				});
			}
		}
	}, [editableProjectId]);

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
							type="button"
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
