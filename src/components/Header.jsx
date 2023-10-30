export default function Header(props) {
  return (
    <header>
      <nav>
        <a href="/">Home</a>
      </nav>
      <div>
        <p>Velkommen {props.username} ({props.email})</p>
      </div>
    </header>
  );
}
