import React from "react";
import {
	Button,
	ButtonRow,
	Description,
	Gif,
	ImagesContainer,
	PetProjectContainer,
	PetProjectHeader,
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
			<Description>{description}</Description>
			<ImagesContainer>
				<img src={mockup} style={{maxWidth: '100%'}}/>
				<Gif src={img}/>
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

