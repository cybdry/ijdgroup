import React,{Component} from "react"
import { Link } from "gatsby";
import { Banner,TextWrapper,MoreText,Mission, SectionThree, FlexBoxIndex, GenericPara, GenericH2,FormFive,
} from "../styles/IndexStyles";
import Layout from "../components/layout";
import {navigate} from 'gatsby-link';

const encode=(data)=>{
	return Object.kyes(data)
	.map(key =>encodeURIComponent(key)+"="+encodeURIComponent(data[
	key])).join('&');
	}
class IndexedPage  extends Component{
	constructor(props){
		super(props);
		this.state={name:"",email:"",message:""};
		}
	handleSubmit =e=>{
		e.preventDefault();
		const form=e.target
		fetch("/",{
			method:"POST",
			header:{"Content-Type":"application/x-www-form-urlencode"},
			body:encode({'form-name':form.getAttribute('name'),...this.state})
		})
	.then(()=>navigate(form.getAttribute('actions')))
	.catch(error=>alert(error))
	};
	handleChange =e=>this.setState({[e.target.name]:e.target.value});
 render(){
	 const{name,email,message}=this.state;
return(
  <Layout>
<section style={{position:'relative'}}>
    <Banner></Banner>
    <TextWrapper>
    <div>
      <GenericH2>IDJ~Group</GenericH2>
        <GenericPara>
        <p>Une étape pour<br/>
        toutes vos besoins de consultation<br/>
        conception<br/>
        et toutes vos construction<br/>
        </p>
        </GenericPara>
        <Link to="/works">Nos Travaux</Link>
    </div> 
    </TextWrapper>
    <MoreText>Apprend Plus Sur Nous</MoreText>
  </section>
  <Mission>
    <div>
      <GenericH2 black>A propos de nous</GenericH2>
      <GenericPara lessSize lessSpacing black>
        <b>IDJ construction & consultating Group</b> est Créer par L'Ingénieur <b>Joseph Doucke Omende Kahudi</b>.
        IDJ-GROUP is International Construction Project Management and Consulting Corporation, nous sommes un groupe de professionnels composé d'ingénieurs et 
        d'architectes experts qui ont été impliqués dans des projets de construction internationaux pendant de nombreuses années ayant une vaste expérience, des
         connaissances et des compétences techniques et se réunissent pour fournir le meilleur service à nos clients.
         Dans les projets de construction internationaux, nous fournissons des services de conseil en gestion des contrats (FIDIC Suite of Contracts et autres), 
         gestion des réclamations et variations, témoin expert et résolution des litiges.
      </GenericPara>
    </div>
  </Mission>
  <SectionThree>
    <FlexBoxIndex>
      <div className="image">
        <img src="power-plant-construction.jpg"/>
      </div>
      <div className="text_section3">
        <GenericH2 none>Construction des villas d’habitation et des commerces </GenericH2>
        <GenericPara lessSize lessSpacing>
					Nous vous assurons un accompagnement complet et personnalisé lors de la réalisation de projets immobiliers qui vous tiennent à cœur. De l’obtention du financement nécessaire à la réalisation de travaux de construction en passant par l’acquisition de la parcelle, nos ingénieurs, techniciens et notaires sont à vos côtés pour répondre à vos besoins les plus exigeants.
        </GenericPara>
      </div>
    </FlexBoxIndex>
    <FlexBoxIndex inverse>
      <div className="text_section3">
        <GenericH2 none>Installation de l’éclairage public </GenericH2>
        <GenericPara lessSize lessSpacing >
					Notre expertise accompagne les administrations publiques
					ainsi que les promoteurs privés dans la conception et l’implémentation
					de projets d’aménagement des espaces publics ou privés pour permettre
					l'accroissement de la circulation et décorer les espaces les plus prestigieux 
					(avenues centrales, gares, parcs et espaces d'expositions… ) et sécuriser 
					les espaces urbains, spécialement par l'éclairage public à l'intérieur et à l'extérieur des villes, très généralement en bordures des voiries et places, nécessaires à l’aisance et au confort des êtres humains.
        </GenericPara>
      </div>
      <div className="image">
        <img src="light.jpg" alt="pic02" />
      </div>
    </FlexBoxIndex>
    <FlexBoxIndex>
      <div className="image">
        <img src="3d-house-with-scaffolding.jpg" alt="pic03"/>
      </div>
      <div className="text_section3">
        <GenericH2 none>Construction des maisons préfabriquées </GenericH2>
        <GenericPara lessSize lessSpacing>
					Pour vous permettre de profiter des innovations technologiques, nous vous facilitons l’obtention de crédit nécessaire, des spécifications techniques d’usage et des solutions logistiques en vue de la réalisation de projets immobiliers en temps record grâce à la solution de maisons préfabriquées à un coût très concurrentiel!
        </GenericPara>
      </div>
    </FlexBoxIndex>
    <FlexBoxIndex inverse>
      <div className="text_section3">
        <GenericH2 none>Suivi et contrôle des projets génie civil et hydraulique</GenericH2>
        <GenericPara lessSize lessSpacing>
					Lors de l’exécution de travaux confiés aux tiers, notre bureau d’études se propose d’assurer le contrôle et surveillance des travaux en assurant le suivi du planning d’exécution fourni par les entreprises et en participant à la mise au point du planning à remanier éventuellement.
					Par ce contrôle des travaux, nous prenons soin de nous assurer que les travaux sont réalisés dans le respect des règles de l’Art et conformément aux plans et spécifications techniques des termes de références ayant régi l’accord entre les parties. 
        </GenericPara>
      </div>
      <div className="image">
        <img src="hydrau.jpg" alt="pic02" />
      </div>
    </FlexBoxIndex>
    <FlexBoxIndex >
       <div className="image">
        <img src="workplace-results-professional-report-accounting-during.jpg" alt="pic02" />
      </div>
      <div className="text_section3">
        <GenericH2 none>Elaboration de plan stratégique de transport</GenericH2>
        <GenericPara lessSize lessSpacing>
					Nous assurons l’élaboration des études et mise en œuvre de projets d’optimisation du réseau de transport interurbain en vue de répondre aux besoins de transport toujours croissant à l’intérieur et/ou hors agglomérations à travers les lignes régulières et occasionnelles.
        </GenericPara>
      </div>
     
    </FlexBoxIndex>
    <FlexBoxIndex inverse>
      <div className="text_section3">
        <GenericH2 none>Facilitation d’importation de matériaux de construction et autres entre la Turquie et l’Afrique</GenericH2>
        <GenericPara lessSize lessSpacing>
					Nous vous assurons notre accompagnement de proximité ainsi que nos solutions logistiques pour vous faciliter l’importation de matériaux de construction de la Turquie, l'un des plus importants pools d’attraction actuel du commerce international, en raison de la grande progression lui connue ces dernières années, pour l’importation de matériaux de construction et de revêtement de qualité supérieure (ciment, barres d’armature, carreaux, faïences, marbres, céramiques, pièces préfabriquées, etc.) destinés au commerce ou à la réalisation de travaux immobiliers de tout genre.
        </GenericPara>
      </div>
      <div className="image">
        <img src="iron-steel-material-storage.jpg" alt="pic02" />
      </div>
    </FlexBoxIndex>
  </SectionThree>
  <section style={{ position: "relative" }}>
    <Banner parallax></Banner>
    <FormFive>
      <form name="contact" method="post" data-netlify="true" onSubmit={this.onSubmit} action="thanks/">
      <div className="fields">
        <GenericH2 none>Contact Us</GenericH2>
        <input type="text" name="name" id="name" placeholder="Name" onChange={this.handleChange} value={name} />
        <input type="email" name="email" id="email" placeholder="Email" onChange={this.handleChange} value={email} />
        <textarea name="message" id="message" placeholder="Message" rows="7" value={message} onChange={this.handleChange}>
        </textarea>
        <div className="actions">
        <input type="submit" value="Send Message" className="button__primary" />
     </div>
    </div>
    </form>
	</FormFive>
  </section>
  </Layout>
 )
}
}
export default IndexedPage;
