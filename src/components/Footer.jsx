import styles from "./Footer.module.css";

function Footer(props) {
  const companies = ["Matas", "Forte Advice", "LEGO"];
  return (
    <footer className={styles.footer}>
      <p>
        Her er en meget standard footer hvor jeg gerne vil vise (
        {props.contactInfo})
      </p>
      <ul className={styles.ul}>
        {companies.map((comp) => (
          <Client company={comp} />
        ))}
      </ul>
    </footer>
  );
}

function Client(props) {
  return <li>{props.company}</li>;
}

export default Footer;
