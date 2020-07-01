import React, { Component } from 'react';
import { Col, Row, Container } from 'reactstrap'

export default  class Resume extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="resume">

         <div className="row education">

            <div className="three columns header-col">
               <h1><span>Education</span></h1>
            </div>

            <div className="nine columns main-col">
              {
                resumeData.education && resumeData.education.map((item)=>{
                  return(
                    <div className="row item">
                       <div className="twelve columns">
                          <h3>{item.UniversityName}</h3>
                          <p className="info">
                          {item.specialization}
                          <span>&bull;</span> <em className="date">{item.MonthOfPassing} {item.YearOfPassing}</em></p>
                          <p>
                          {item.Achievements}
                          </p>
                       </div>
                    </div>
                  )
                })
              }
            </div>
         </div>
        <div className="row work">
            <div className="three columns header-col">
               <h1><span>Work</span></h1>
            </div>

            <div className="nine columns main-col">
              {
                resumeData.work && resumeData.work.map((item) => {
                  return(
                    <div className="row item">
                       <div className="twelve columns">
                          <h3>{item.CompanyName}</h3>
                          <p className="info">
                          {item.specialization}
                          <span>&bull;</span> <em className="date">{item.MonthOfLeaving} {item.YearOfLeaving}</em></p>
                          <p>
                          {item.Achievements}
                          </p>
                       </div>

                    </div>

                  )
                })
              }
            </div> 
         </div>


         <div className="row skill">

            <div className="three columns header-col">
               <h1><span>Skills</span></h1>
            </div>

            <div className="nine columns main-col">


                  <div className="row">
                  <ul className="fa-ul mb-0">
          <li>
            <i className="fa-li fa fa-check" />
            NodeJs
          </li>
          <li>
            <i className="fa-li fa fa-check" />
            ReactJs
          </li>
          <li>
            <i className="fa-li fa fa-check" />
            Javascript/Typescript
          </li>
          <li>
            <i className="fa-li fa fa-check" />
            ExpressJs
          </li>
          <li>
            <i className="fa-li fa fa-check" />
            MongoDB
          </li>
          <li>
            <i className="fa-li fa fa-check" />
            PostgreSQL
          </li>
          <li>
            <i className="fa-li fa fa-check" />
            RESTful services
          </li>
          <li>
            <i className="fa-li fa fa-check" />
            GraphQL services
          </li>
          <li>
            <i className="fa-li fa fa-check" />
            Unit testing (Jest)
          </li>
          <li>
            <i className="fa-li fa fa-check" />
            Socket.io (subscriptions in graphql)
          </li>
          <li>
            <i className="fa-li fa fa-check" />
            PassportJs (Authentication)
          </li>
          <li>
            <i className="fa-li fa fa-check" />
            NestJs
          </li>
          <li>
            <i className="fa-li fa fa-check" />
            Redux
          </li>
          <li>
            <i className="fa-li fa fa-check" />
            React Hooks
          </li>
          <li>
            <i className="fa-li fa fa-check" />
            GatsbyJs
          </li>
        </ul>
                  </div>
               
   				{/* <div className="bars">

   				   <ul className="skillsa">
                {
                  resumeData.skills && resumeData.skills.map((item) => {
                    return(
                      <li>
                      <span className={`bar-expand ${item.skillname.toLowerCase()}`}>
                      </span>
                      <em>{item.skillname}</em>
                      </li>
                    )
                  })
                }

   					</ul>

   				</div> */}

   			      </div>

         </div>

      </section>
    );
  }
}