import React, { Component } from 'react';

class Contact extends Component {
  render() {

    if(this.props.data){
      var phone= this.props.data.phone;
      var email = this.props.data.email;
      var message = this.props.data.contactmessage;
    }

    return (
      <section id="contact">
         <div className="row">
            <div className="ten columns">
               <h1 className="lead">{message}</h1>
               <p className="address">
                  {email}<br />
                  <span>{phone}</span>
               </p>
            </div>
         </div>
      </section>
    );
  }
}

export default Contact;
