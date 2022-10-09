import React from "react";
import Layout from "../components/layout";
import { Link } from "gatsby";
import { Banner,TextWrapper,GenericPara,GenericH3, Mission } from "../styles/IndexStyles";


const about =() =>{
    return(
        <Layout>
            <section style={{position:'relative'}}>
                <Banner different></Banner>
                <TextWrapper>
                    <div >
                        <GenericH3>Qui some nous?</GenericH3>
                        <GenericPara lessSpacing active black>
                        IDJ construction & consultating Group est Créer par L'Ingénieur Joseph Doucke Omende Kahudi. IDJ-GROUP is International Construction Project Management and Consulting Corporation, nous sommes un groupe de professionnels composé d'ingénieurs et d'architectes experts qui ont été impliqués dans des projets de construction internationaux pendant de nombreuses années ayant une vaste expérience, des connaissances et des compétences techniques et se réunissent pour fournir le meilleur service à nos clients. Dans les projets de construction internationaux, nous fournissons des services de conseil en gestion des contrats (FIDIC Suite of Contracts et autres), gestion des réclamations et variations, témoin expert et résolution des litiges.
                        </GenericPara>
                        <Link to="/works">Nos Travaux</Link>
                    </div>
                </TextWrapper>
            </section>
            <Mission>
                <div>
                    <GenericH3>Notre Equipe</GenericH3>
                </div>
            </Mission>
        </Layout>
    )
}

export default about;