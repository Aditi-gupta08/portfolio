import React from 'react';
import './utils.scss';

import profile_pic2 from './images/profile_pic2.jpg';

class Header extends React.Component {
    render() {
        return (
            <div className="header-div blockp">

                <div>
                </div> 

                <div className="header-div__content rowp"> 
                    <div>
                        <div className="header-div__content__head1"> HEY THERE, </div>
                        <div className="header-div__content__head2"> I am Aditi Gupta </div> 

                        <a class="header-div__content__button stroke smoothscroll" href="https://drive.google.com/file/d/1ibM1yhB8dpe1ubV86ZXpHTHNZMRoCrs2/view?usp=sharing" target="_blank"> Download resume </a>
                    </div> 

                    <div className="header-div__content__profile-pic">
                        <img src={profile_pic2}/> 
                    </div> 
                    
                </div> 


                <div className="header-div__social">
                    <ul className="header-div__social__ul">

                    {  
                        this.props.social_data.map( (elem) => {
                            return(        
                                <a href= {elem.link} target="_blank">
                                    <li>
                                        <i class= {elem.icon}></i> 
                                    </li>
                                </a>
                            )}
                    )}

                    </ul> 
                </div>    
         
            </div> 
        );
    }
}


class Education extends React.Component {
    render() {
        return (
            <div className="education-div blockp">

                <div className="section-heading section-heading--centerbottom"> EDUCATION </div>

                <div className="education-div__body">

                    {
                        this.props.edu_data.map( (edu) => {
                            return(
                            <div className="education-div__body__edu">

                                <div className="education-div__body__edu__ico">
                                    <i className="fa fa-briefcase"></i>
                                </div>

                                <div className="education-div__body__edu__content">
                                    <div className="education-div__body__edu__content__header">
                                        <h3> {edu.deg_name} </h3>
                                        <p> {edu.year} </p>
                                    </div>

                                    <div className="education-div__body__edu__content__descp">
                                        <p className = "inst_name"> {edu.inst_name} </p>
                                        <p> {edu.descp} </p>
                                    </div>
                                </div> 
                                
                            </div> )
                        })
                    }

                    			

                </div> 

            </div>
        );
    }
}


class Project extends React.Component {
    render() {
        return (
            <div className ="project-div blockp ss-dark target-section">
                <div className ="project-div__shadow-overlay"></div>

                <div className ="row heading-block heading-block--center" data-aos="fade-up">
                    <h2 className ="section-heading section-heading--centerbottom"> PROJECTS </h2>
                </div> 

                <div className ="project-div__project-list block-large-1-3 block-medium-1-2 block-tab-full">
                {  
                    this.props.proj_data.map( (proj) => {
                        return(
                            <div className ="column project-div__project-list__item-project" data-aos="fade-up">

                                <div className ="project-div__project-list__item-project__content">
                                    <h4 className ="item-title"> {proj.title} </h4>
                                    <p>
                                        {proj.descp} <br/> <br/>
                                        Technologies Used: {proj.tech} <br/> <br/>
                                    </p>

                                    <a href={proj.git_link} target="_blank"> 
                                        <button> Github Link </button>
                                    </a>

                                    {/* if(proj.dep_link != ""){
                                        <a href={proj.dep_link} target="_blank"> 
                                            <button> View game </button>
                                        </a>
                                    } */}
                                    {   proj.dep_link != ""
                                        ? <a href={proj.dep_link} target="_blank"> 
                                            <button> View game </button>
                                        </a>
                                        : null 
                                    }
                                    
                                </div>
                            </div>
                        )
                    })
                }

                </div>
            </div>
        );
    }
}


class Internship extends React.Component {
    render(){
        return (

            <div className="internship-div blockp">

                <div className="section-heading section-heading--centerbottom"> Internship </div>

                <div className="internship-div__body">
                    <h2 className= "internship-div__body__head1"> <i class="fa fa-diamond"></i> Front-end Developer Intern </h2>
                    <h3 className= "internship-div__body__head2"> bbbootstrap.com | (April 2020 - July 2020)) </h3>
                    <a href= "https://bbbootstrap.com/users/aditi-gupta-52721?page=1" target="_blank"> 
                        <button className="internship-div__body__btn" > View Profile </button>
                    </a>
                </div>
            </div>
        );
    }
}


class Footer extends React.Component {
    render(){
        return (
            <section className="others-div">

                <div className ="others-div__overlay"></div>

                <div className="others-div__main">
                    <div className ="row heading-block heading-block--center" data-aos="fade-up">
                        <h2 className ="section-heading section-heading--centerbottom"> OTHERS </h2>
                    </div> 
                    

                    <div className ="others-div__main__content">

                        <div className ="others-div__main__content__list">

                            {  
                            this.props.others_data.map( (elem) => {
                                return(

                                    <div className ="others-div__main__content__list__item">

                                        <span className ="icon"><i className ="icon-image"></i></span>	            

                                        <div className ="service-content">
                                            <i className={elem.icon}> </i>

                                            <h3> {elem.title} </h3>

                                            <ul>
                                            {  
                                                elem["descp"].map( (des) => {
                                                return( <li> {des} </li> )
                                                })
                                            }
                                            </ul>
                                             

                                        </div>	               

                                    </div>
                                )}
                            )}

                        </div> 

                        <div class="row others-div__main__content__social">
                            <ul class="row others-div__main__content__social__ul">

                                {  
                                this.props.social_data.map( (elem) => {
                                    return(        
                                        
                                        <a href= {elem.link} target="_blank">
                                            <li>
                                                <i class= {elem.icon}></i> 
                                            </li>
                                        </a>
                                    )}
                                )}

                            </ul> 
                        </div>
                        
                    </div> 
                </div>

                
                
                
        </section> 
        );
    }
}


export { Header, Education, Project, Internship, Footer}