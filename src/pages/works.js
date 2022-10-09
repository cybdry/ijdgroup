import React from "react";
import {Works,GenericH2} from "../styles/IndexStyles";
import Project from '../components/Project';
import Layout from "../components/layout";
const projects=[
    {image:"3.jpeg",title:"Project d'habitation R+5 (Vue de profil)"},
    {image:"4.jpeg",title:"Project d'habitation R+5 (Vue de face)"},
    //{image:"5.jpeg",title:"mock project 5"},
    //{image:"6.jpeg",title:"mock project 6"},
    //{image:"7.jpeg",title:"mock project 7"},
    {image:"8.jpeg",title:"Project d'habitation"},
    {image:"9.jpeg",title:"Project d'habitation"},
    {image:"10.jpeg",title:"Vilas de Lux avec Picine"},
    {image:"11.jpeg",title:"Vilas de Lux "},
    {image:"12.jpeg",title:"Vilas de Lux"},
];   


export default () =>(
    <Layout>
        <Works>
            <GenericH2 none dark some>
                Nos Travaux
            </GenericH2>
            <section  className="gallery__flex">
                {projects && projects.map(proj =><Project key={proj.title} project={proj} />)}
            </section>
        </Works>
    </Layout>
)
