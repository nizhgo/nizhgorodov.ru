import React from "react";
import {
	Button,
	ButtonRow,
	ImagesContainer,
	PetProjectContainer,
	PetProjectHeader
} from './style';

interface IPetProject {
	title: string,
	description: string,
	mockup: string,
	img: string,
	siteLink?: string,
	githubLink?: string,

}

const PetProjectItem = (props: IPetProject) => {
	const {title, description, mockup, img, siteLink, githubLink} = props;
	return (
		<PetProjectContainer>
			<PetProjectHeader>{title}</PetProjectHeader>
			<p>{description}</p>
			<ImagesContainer>
				<img src={mockup} style={{maxWidth: '100%'}}/>
				<img src={img} style={{maxWidth: '100%', borderRadius: '0px 0px 3px 3px'}}/>
			</ImagesContainer>
			<ButtonRow>
				{githubLink &&
					<Button onClick={() => {
						window.open(githubLink, 'blank')
					}}>GitHub</Button>}
				{siteLink &&
					<Button onClick={() => {
						window.open(siteLink, 'blank')
					}}>Рабочий прототип</Button>}
			</ButtonRow>
		</PetProjectContainer>
	)
}

export default PetProjectItem;

