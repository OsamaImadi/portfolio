import React from 'react'
import { Col, Row, Container } from 'reactstrap'

// import './skills.styles.scss'
// import nodeIcon from '../../images/nodejs.png'
// import jsIcon from '../../images/js.png'
// import tsIcon from '../../images/typescript.png'
// import mongoIcon from '../../images/mongo.png'
// import postgresqlIcon from '../../images/postgres.png'
// import gitIcon from '../../images/git.png'
// import herokuIcon from '../../images/heroku.png'
// import reactIcon from '../../images/react.png'
// import graphqlIcon from '../../images/graphql.png'

const SkillsSection = () => (
  <>
    <section id="resume" className="resume-section p-3 p-lg-5 d-flex align-items-center" id="skills">
      <div className="w-100">
        <h2 className="mb-5">Skills</h2>

        <div className="subheading mb-3">Programming Languages &amp; Tools</div>
        <Container className="list-inline dev-icons">

          <Row>
            <Col>
              <div className="icon-text">
                <li className="list-inline-item">
                  {/* <img src={nodeIcon} alt="node-icon" /> */}
                </li>
                <p>NodeJs</p>
              </div>
            </Col>
            <Col>
              <div className="icon-text">
                <li className="list-inline-item">
                  {/* <img src={jsIcon} alt="js-icon" /> */}
                </li>
                <p>Javascript</p>
              </div>
            </Col>
            <Col>
              <div className="icon-text">
                <li className="list-inline-item">
                  {/* <img src={tsIcon} alt="js-icon" /> */}
                </li>
                <p>Typescript</p>
              </div>
            </Col>
          </Row>

          <Row>
            <Col>
              <div className="icon-text">
                <li className="list-inline-item">
                  {/* <img src={mongoIcon} alt="mongo-icon" /> */}
                </li>
                <p>MongoDb</p>
              </div>
            </Col>

            <Col>
              <div className="icon-text">
                <li className="list-inline-item">
                  {/* <img src={postgresqlIcon} alt="postgresql-icon" /> */}
                </li>
                <p>PostgreSQL</p>
              </div>
            </Col>
            <Col>
              <div className="icon-text">
                <li className="list-inline-item">
                  {/* <img src={gitIcon} alt="git-icon" /> */}
                </li>
                <p>Git</p>
              </div>
            </Col>
          </Row>

          <Row>
            <Col>
              <div className="icon-text">
                <li className="list-inline-item">
                  {/* <img src={herokuIcon} alt="heroku-icon" /> */}
                </li>
                <p>Heroku</p>
              </div>
            </Col>

            <Col>
              <div className="icon-text">
                <li className="list-inline-item">
                  {/* <img src={reactIcon} alt="react-icon" /> */}
                </li>
                <p>ReactJs</p>
              </div>
            </Col>

            <Col>
              <div className="icon-text">
                <li className="list-inline-item">
                  {/* <img src={graphqlIcon} alt="graphql-icon" /> */}
                </li>
                <p>GraphQL</p>
              </div>
            </Col>
          </Row>
        </Container>

        <div className="subheading mb-3">Miscellaneous libraries and tools</div>
        <ul className="fa-ul mb-0">
          <li>
            <i className="fa-li fa fa-check" />
            Unit testing (Jest)
          </li>
          <li>
            <i className="fa-li fa fa-check" />
            ExpressJs
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
            Redux-saga
          </li>
          <li>
            <i className="fa-li fa fa-check" />
            React Hooks
          </li>
          <li>
            <i className="fa-li fa fa-check" />
            REST
          </li>
          <li>
            <i className="fa-li fa fa-check" />
            ORMs (sequelize, typeORM, prisma)
          </li>
          <li>
            <i className="fa-li fa fa-check" />
            Mongo Atlas
          </li>
          <li>
            <i className="fa-li fa fa-check" />
            GatsbyJs
          </li>
          <li>
            <i className="fa-li fa fa-check" />
            Strapi
          </li>
        </ul>
      </div>
    </section>
    <hr className="m-0" />
  </>
)

export default SkillsSection
