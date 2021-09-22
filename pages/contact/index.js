import Layout from "../../components/Layout";

import styles from "../../styles/ContactPage.module.scss";
import { useState } from "react";
import { postDataToAPI } from "../../utils/dataPoster";
import ReCAPTCHA from "react-google-recaptcha";
export default function ContactPage() {
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [isHuman, setIsHuman] = useState(false);

  const sendMail = () => {
    if (!email.length || !subject.length || !message.length) {
      alert("Un des champs sont vides !");
    }

    if (!isHuman) {
      alert("Veuillez remplir le Captcha");
      return;
    }

    const msg = {
      to: "contact@archivs.fr", // Change to your recipient
      from: "contact@archivs.fr", // Change to your verified sender 
      subject: "Nouveau message venant de jeremycapeau.fr : " + subject,
      html: "email : " + email + "<br/><br/> message : " + message,
    };

    postDataToAPI(
      "/a-propos/mail",
      { msg },
      () => void alert("Message envoyé !"),
      (error) => void console.log(error)
    );
  };

  return (
    <Layout>
      <main className={styles.main}>
        <h2>Contactez moi !</h2>
        <input
          type="text"
          placeholder="Votre mail"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="text"
          placeholder="Objet de votre requête"
          onChange={(e) => setSubject(e.target.value)}
        />
        <textarea
          onChange={(e) => setMessage(e.target.value)}
          name="Text1"
          cols="40"
          rows="10"
          placeholder="Détaillez ici..."
        />
        <button onClick={sendMail}>Envoyer</button>
        <ReCAPTCHA
          sitekey="6LfmBYQcAAAAAGJagMDoXIKxvMB6bcWgyUZAKnn3"
          onChange={() => setIsHuman(true)}
        />
      </main>
    </Layout>
  );
}
