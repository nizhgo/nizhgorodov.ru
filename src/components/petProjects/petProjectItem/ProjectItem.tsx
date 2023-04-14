import React from "react";
import {
	Button,
	ButtonRow,
	Description,
	Gif,
	ImagesContainer,
	PetProjectContainer,
	Title,
} from './style';
import {ProjectType} from "@/components/petProjects/style";

interface IPetProject {
	title: string,
	description: string,
	mockup: string,
	type: {
		name: string,
		color: string,
	}
	visual: string,
	siteLink?: string,
	githubLink?: string,

}

const ProjectItem = (props: IPetProject) => {
	const {title, description, mockup, visual, siteLink, githubLink, type} = props;
	// @ts-ignore
	return (
		<PetProjectContainer>
			<div style={{display:'flex', width:'100%', alignItems:'center', gap: '10px', flexWrap:'wrap'}}>
			<Title>{title}</Title>
			<ProjectType color={type.color}>{type.name}</ProjectType>
			</div>
			<Description>{description}</Description>
			<ImagesContainer>
				{/*<Image src={mockup} alt={title} width={300} height={50} style={{width: '100%', height:'auto', maxHeight:'100px'}}/>*/}
				<img src={mockup} alt={title} style={{width: '100%', height:'auto', maxHeight:'100px'}}/>
				<Gif src={visual}/>
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

export default ProjectItem;

