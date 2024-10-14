import '../style/Contact.css';

function Contact() {
  return (
    <div id="Contact">
      <section id="contactInfo">
        <h2>contact me</h2>
        <p>You can get in contact with me by using the links below or by completing the following form.</p>
      </section>

      <section id="contactForm">
        <form>
          <div id="inputWrapper">
            <input placeholder="Name" type="text" name="name" id="name"></input>
            <input placeholder="Your Email" type="email" name="email" id="email"></input>
            <input placeholder="Phone Number" type="tel" name="phone" id="phone"></input>
            <input placeholder="Message" type="text" name="message" id="message"></input>
          </div>
          <button type="submit" id="formButton">Send</button>
        </form>
      </section>
    </div>
  );
}

export default Contact;