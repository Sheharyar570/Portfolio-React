import navClasses from "./navigation.module.css";

function navigation() {
  return (
    <nav>
      <h1>Sheharyar</h1>
      <ul>
        <li>
          <a href="">Home</a>
        </li>
        <li>
          <a href="">About</a>
        </li>
        <li>
          <a href="">Projects</a>
        </li>
        <li>
          <a href="">Contact Me</a>
        </li>
        <li>
          <button className={navClasses.cv_download_btn}>
            <a >Download CV</a>
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default navigation;
