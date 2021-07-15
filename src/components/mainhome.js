import React from 'react';
import Map from './map'

const MainHome = () => {
    return ( 
        <div>
        <section className="bg-dark text-light p-5 text-center text-sm-start" id="showcase">
          <div className="container">
            <div className="d-sm-flex align-items-center justify-content-between">
              <div>
                <h1>Frontend <span className="text-warning"> Web Developer </span></h1>
                <p className="lead my-4">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, ex. Cupiditate ratione natus quod sit, suscipit dolores quasi totam sint!
                </p>
                <button className="btn btn-primary btn-lg" data-bs-toggle="modal" data-bs-target="#enroll">
                  Reqruit
                </button>
              </div>
              <img className="img-fluid w-50 d-none d-sm-block" src={require("./img/laptop.png").default} alt="" />
              
            </div>
          </div>
        </section>
        {/* Newsletter Newsletter Newsletter Newsletter Newsletter Newsletter Newsletter Newsletter */}
        <section className="bg-primary text-light p-5">
          <div className="container">
            <div className="d-md-flex justify-content-between align-items-center ">
              <h3 className="mb-3 mb-md-0 text-center">Sign Up For News</h3>
              <div className="input-group news-input">
                <input type="text" className="form-control" placeholder="Enter Email" />
                <button className="btn btn-dark btn-lg" type="button">Submit</button>
              </div>
            </div>
          </div>
        </section>
        {/* Boxes Boxes Boxes Boxes Boxes Boxes Boxes Boxes Boxes Boxes Boxes Boxes Boxes Boxes Boxes */}
        <section className="p-5">
          <div className="container">
            <div className="row text-center g-4">
              <div className="col-md">
                <div className="card bg-secondary text-light">
                  <div className="card-body text-center">
                    <div className="h1 mb-3">
                      <i className="bi bi-laptop" />
                    </div>
                    <h3 className="card-title mb-3">Freelance</h3>
                    <p className="card-text">
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil repellat quis repellendus. Architecto, quo eius?
                    </p>
                    <a href="https://www.instagram.com/" className="btn btn-primary">Read More</a>
                  </div>
                </div>
              </div>
              <div className="col-md">
                <div className="card bg-dark text-light">
                  <div className="card-body text-center">
                    <div className="h1 mb-3">
                      <i className="bi bi-person-square" />
                    </div>
                    <h3 className="card-title mb-3">Virtual</h3>
                    <p className="card-text">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet ratione in odio sapiente odit ducimus.
                    </p>
                    <a href="https://www.instagram.com/" className="btn btn-light">Read More</a>
                  </div>
                </div>
              </div>
              <div className="col-md">
                <div className="card bg-secondary text-light">
                  <div className="card-body text-center">
                    <div className="h1 mb-3">
                      <i className="bi bi-people" />
                    </div>
                    <h3 className="card-title mb-3">In Person</h3>
                    <p className="card-text">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, quia. Sint, vel? Obcaecati, a officiis!
                    </p>
                    <a href="https://www.instagram.com/" className="btn btn-primary">Read More</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* skills Sections skills Sections skills Sections skills Sections skills Sections skills Sections skills Sections */}
        <section id="skills" className="p-5 text-start">
          <div className="container">
            <div className="row align-items-center justify-content-between">
              <div className="col-md">
                <img src={require("./img/fundamentals.svg").default} className="img-fluid" alt="" />
              </div>
              <div className="col-md p-5">
                <h2>What I Have Learnt So Far!!</h2>
                <p className="lead">
                  HTML5, CSS3, ES6, ReactJS, Bootstrap, SASS
                </p>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque
                  reiciendis eius autem eveniet mollitia, at asperiores suscipit
                  quae similique laboriosam iste minus placeat odit velit quos,
                  nulla architecto amet voluptates?
                </p>
                <a href="https://reactjs.org/" className="btn btn-primary mt-3">
                  <i className="bi bi-chevron-right" /> Read More
                </a>
              </div>
            </div>
          </div>
        </section>
        {/* React React React React React React React React React React React React React React React React  */}
        <section id="React" className="p-5 bg-dark text-light text-start">
          <div className="container">
            <div className="row align-items-center justify-content-between">
              <div className="col-md p-5">
                <h2>ReactJS</h2>
                <p className="lead">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Similique deleniti possimus magnam corporis ratione facere!
                </p>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque
                  reiciendis eius autem eveniet mollitia, at asperiores suscipit
                  quae similique laboriosam iste minus placeat odit velit quos,
                  nulla architecto amet voluptates?
                </p>
                <a href="https://reactjs.org/" className="btn btn-light mt-3">
                  <i className="bi bi-chevron-right" /> Read More
                </a>
              </div>
              <div className="col-md">
                <img src={require("./img/react.svg").default} className="img-fluid" alt="" />
              </div>
            </div>
          </div>
        </section>
        {/* Question Accordion Question Accordion Question Accordion Question Accordion Question Accordion Question Accordion */}
        <section className="p-5">
          <div className="container">
            <h2 className="text-center mb-4">Frequently Asked Questions</h2>
            <div className="accordion accordion-flush text-start" id="questions">
              {/* Item 1 */}
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#question-one">
                    Where exactly are you located?
                  </button>
                </h2>
                <div id="question-one" className="accordion-collapse collapse" data-bs-parent="#questions">
                  <div className="accordion-body">
                    Mashhad, GhasemAbad, Shahed .St
                  </div>
                </div>
              </div>
              {/* Item 2 */}
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#question-two">
                    What's Ur Education?
                  </button>
                </h2>
                <div id="question-two" className="accordion-collapse collapse" data-bs-parent="#questions">
                  <div className="accordion-body">
                    Civil Engineering in Ferdowsi University of Mashhad
                  </div>
                </div>
              </div>
              {/* Item 3 */}
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#question-three">
                    What Skills Do You Have?
                  </button>
                </h2>
                <div id="question-three" className="accordion-collapse collapse" data-bs-parent="#questions">
                  <div className="accordion-body">
                    I have worked with HTML , CSS, ES6, ReactJS, Bootstrap and SASS.
                    furthermore, I have worked with python (tkinter, PyQt5) and Fortran as well.
                  </div>
                </div>
              </div>
              {/*Previous Employers Previous Employers Previous Employers Previous Employers Previous Employers Previous Employers Previous Employers */}
            </div></div></section>
        <section id="Previous Employers" className="p-5 bg-primary">
          <div className="container">
            <h2 className="text-center text-white"> Previous Employers</h2>
            <p className="lead text-center text-white mb-5">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error, ad.
            </p>
            <div className="row g-4">
              <div className="col-md-6 col-lg-3">
                <div className="card bg-light">
                  <div className="card-body text-center">
                    <img src="https://randomuser.me/api/portraits/men/40.jpg" className="rounded-circle mb-3" alt="" />
                    <h3 className="card-title mb-3">John Doe</h3>
                    <p className="card-text">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Assumenda accusamus nobis sed cupiditate iusto? Quibusdam.
                    </p>
                    <a href="https://www.instagram.com/"><i className="bi bi-twitter text-dark mx-1" /></a>
                    <a href="https://www.instagram.com/"><i className="bi bi-facebook text-dark mx-1" /></a>
                    <a href="https://www.instagram.com/"><i className="bi bi-linkedin text-dark mx-1" /></a>
                    <a href="https://www.instagram.com/"><i className="bi bi-instagram text-dark mx-1" /></a>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-3">
                <div className="card bg-light">
                  <div className="card-body text-center">
                    <img src="https://randomuser.me/api/portraits/women/40.jpg" className="rounded-circle mb-3" alt="" />
                    <h3 className="card-title mb-3">Jane Doe</h3>
                    <p className="card-text">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Assumenda accusamus nobis sed cupiditate iusto? Quibusdam.
                    </p>
                    <a href="https://www.instagram.com/"><i className="bi bi-twitter text-dark mx-1" /></a>
                    <a href="https://www.instagram.com/"><i className="bi bi-facebook text-dark mx-1" /></a>
                    <a href="https://www.instagram.com/"><i className="bi bi-linkedin text-dark mx-1" /></a>
                    <a href="https://www.instagram.com/"><i className="bi bi-instagram text-dark mx-1" /></a>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-3">
                <div className="card bg-light">
                  <div className="card-body text-center">
                    <img src="https://randomuser.me/api/portraits/men/50.jpg" className="rounded-circle mb-3" alt="" />
                    <h3 className="card-title mb-3">Jadon Doe</h3>
                    <p className="card-text">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Assumenda accusamus nobis sed cupiditate iusto? Quibusdam.
                    </p>
                    <a href="https://www.instagram.com/"><i className="bi bi-twitter text-dark mx-1" /></a>
                    <a href="https://www.instagram.com/"><i className="bi bi-facebook text-dark mx-1" /></a>
                    <a href="https://www.instagram.com/"><i className="bi bi-linkedin text-dark mx-1" /></a>
                    <a href="https://www.instagram.com/"><i className="bi bi-instagram text-dark mx-1" /></a>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-3">
                <div className="card bg-light">
                  <div className="card-body text-center">
                    <img src="https://randomuser.me/api/portraits/women/19.jpg" className="rounded-circle mb-3" alt="" />
                    <h3 className="card-title mb-3">Jasmine Doe</h3>
                    <p className="card-text">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Assumenda accusamus nobis sed cupiditate iusto? Quibusdam.
                    </p>
                    <a href="https://www.instagram.com/"><i className="bi bi-twitter text-dark mx-1" /></a>
                    <a href="https://www.instagram.com/"><i className="bi bi-facebook text-dark mx-1" /></a>
                    <a href="https://www.instagram.com/"><i className="bi bi-linkedin text-dark mx-1" /></a>
                    <a href="https://www.instagram.com/"><i className="bi bi-instagram text-dark mx-1" /></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Contact & Map Contact & Map Contact & Map Contact & Map Contact & Map Contact & Map Contact & Map */}
        <section className="p-5">
          <div className="container">
            <div className="row g-4">
              <div className="col-md">
                <h2 className="text-center mb-4">Contact Info</h2>
                <ul className="list-group list-group-flush lead text-start">
                  <li className="list-group-item">
                    <span className="fw-bold">Main Location:</span> Mashhad, GhasemAbad
                  </li>
                  <li className="list-group-item">
                    <span className="fw-bold">Enrollment Phone:</span> 05135149201
                  </li>
                  <li className="list-group-item">
                    <span className="fw-bold">Cellphone:</span> 09369348660
                  </li>
                  <li className="list-group-item">
                    <span className=" fw-bold">Email:</span>
                    s.jahanmard@gmail.com
                  </li>
                </ul>
              </div>
              <div className="col-md">
                <Map/>
              </div>
            </div>
          </div>
        </section>
        <div
    className="modal fade"
    id="enroll"
    tabIndex="-1"
    aria-labelledby="enrollLabel"
    aria-hidden="true"
  >
    <div className="modal-dialog">
      <div className="modal-content  bg-dark text-light">
        <div className="modal-header">
          <h5 className="modal-title" id="enrollLabel">Enrollment</h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div className="modal-body">
          <p className="lead">Fill out this form and I will get back to you</p>
          <form>
            <div className="mb-3">
              <label htmlFor="first-name" className="col-form-label">
                First Name:
              </label>
              <input type="text" className="form-control" id="first-name" />
            </div>
            <div className="mb-3">
              <label htmlFor="last-name" className="col-form-label">Last Name:</label>
              <input type="text" className="form-control" id="last-name" />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="col-form-label">Email:</label>
              <input type="email" className="form-control" id="email" />
            </div>
            <div className="mb-3">
              <label htmlFor="phone" className="col-form-label">Phone:</label>
              <input type="tel" className="form-control" id="phone" />
            </div>
          </form>
        </div>
        <div className="modal-footer">
          <button
            type="button"
            className="btn btn-secondary"
            data-bs-dismiss="modal"
          >
            Close
          </button>
          <button type="button" className="btn btn-primary">Submit</button>
        </div>
      </div>
    </div>
  </div>

</div>
      
     );
}
 
export default MainHome;