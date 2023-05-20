import React from "react";
import './contact.css';
function ContactUs(){
    return(
        <div className="contact" id="contact">
            <h1>Contact Us</h1><br />
            <form>
                <label>
                     Name:
                    <input type="text" name="name" class="name"/><br />
                    Email:
                    <input type="mail" placeholder="Email" class="name" /><br />
                    Tell us what you need and we will get back to you: <br />
                    <textarea name="" id="" cols="0" rows="10" class="contact__input"></textarea>
                </label><br />
                <input type="submit" value="Submit" />
            </form>
        </div>
        
    );
}
export default ContactUs;
<ContactUs/>