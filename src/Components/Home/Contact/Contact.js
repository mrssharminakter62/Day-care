import React from 'react';
import './Contact.css'

const Contact = () => {
    return (
        <section className="contact my-5 py-5">
        <div className="container" style={{backgroundColor:'#f72585'}}>
            <div className=" my-5 py-5">
            <div className="section-header text-center text-white mb-5">
                 <h5 className="text-uppercase text-light" style={{fontFamily:"'Courgette', cursive"}}>Contact us</h5>
                 <h1>Always  connect with us</h1>
            </div>
            <div className="col-md-9 mx-auto">
                <form action="">
                    <div className="form-group mb-3">
                        <input type="text" className="form-control" placeholder="Email Address *"/>
                    </div>
                    <div className="form-group mb-3">
                        <input type="text" className="form-control" placeholder="Subject *"/>
                    </div>
                    <div className="form-group mb-3">
                        <textarea name="" className="form-control" id="" cols="30" rows="10" placeholder="Message *"></textarea>
                    </div>
                    <div className="form-group text-center mb-3">
                        <button type="button" className="btn btn-light"> Send Message </button>
                    </div>
                </form>
            </div>
            </div>
        </div>
    </section>
    );
};

export default Contact;