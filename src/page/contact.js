import React from 'react';
import { Box } from '@mui/material';
import { FaFacebook, FaInstagram, FaLinkedin, FaEnvelope, FaStarOfDavid } from 'react-icons/fa';
import location from "../photos/location.png";


function Contact() {
const handleSubmit = (event) => {
event.preventDefault();
const formData = new FormData(event.target);
const name = formData.get('name');
const email = formData.get('email');
const message = formData.get('message');
const mailtoUrl = `mailto:qasantiago8@gmail.com?subject=${name} - ${email}&body=${message}`;
window.location.href = mailtoUrl;}

return (
<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '20px', }}>
<Box sx={{
marginTop: '100px',
marginBottom: '285px',
marginLeft: '100px',
padding: '20px',
backgroundColor: '#f2f2f2',
borderRadius: '5px',
boxShadow: '0px 0px 10px 1px rgba(0,0,0,0.25)',
width: '650px'
}}>
<h1 sx={{ fontFamily: 'Arial', fontSize: '2rem', fontWeight: 'bold', marginBottom: '20px' }}>Get In Touch!</h1>
<form onSubmit={handleSubmit}>
<input type="text" name="name" placeholder="Name" style={{ marginBottom: '20px', padding: '5px', border: 'none', borderBottom: '1px solid black', width: '300px', height: '25px' }} />
<input type="text" name="email" placeholder="Email" style={{ marginBottom: '20px',marginLeft: '20px', padding: '5px', border: 'none', borderBottom: '1px solid black', width: '300px', height: '25px' }} />
<textarea name="message" placeholder="Message" style={{ marginBottom: '20px', paddingTop: '10px', border: 'none', borderBottom: '1px solid black', width: '639px', height: '160px'}}></textarea>
<button type="submit" style={{ backgroundColor: '#4CAF50', padding: '10px 20px', borderRadius: '5px', border: 'none', color: 'white' }}>
  Send
</button>
</form>
</Box>

  <div style={{ display: 'flex', flexDirection: 'column', marginLeft: '20px', marginRight:'50px', marginTop:'20px' }}>
    <a href="https://m.facebook.com/angelique.santiago.908" className="icon-link" style={{ color: 'black', marginRight:'50px' }}><FaFacebook size={35} style={{  marginRight:'10px' }} /> Angelique Santiago</a>
    <a href="https://instagram.com/angelique_santiago28?igshid=YmMyMTA2M2Y=://www.instagram.com/" className="icon-link" style={{ color: 'black' }}><FaInstagram size={35} style={{  marginRight:'10px' }}  />angelique_santiago28</a>
    <a href="https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile" className="icon-link" style={{ color: 'black' }}><FaLinkedin size={35} style={{  marginRight:'10px' }}  /> Angelique Santiago</a>
    <a href="mailto:qasantiago8@gmail.com" className="icon-link" style={{ color: 'black' }}><FaEnvelope size={35} style={{  marginRight:'10px' }}   />santiagoangelique2@gmail.com</a>
    <a href= "https://www.google.com/maps/place/Remberland+East+Subdivision/@14.5646504,121.2089755,17z/data=!4m6!3m5!1s0x3397c177f6d60117:0x9d79f369c1fb60a9!8m2!3d14.5649055!4d121.2119969!16s%2Fg%2F11pz1bdr79!5m1!1e1" style={{  marginTop:'20px' }}> LOCATION</a>
    <img
            src={location}
            alt="location"
            width="600"
            height="400"
            style={{ paddingTop: "9px" }} // Add this line to set the top padding

          />

  </div>
</div>
);
}

export default Contact;