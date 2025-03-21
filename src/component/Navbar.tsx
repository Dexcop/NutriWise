import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={styles.nav}>
      <div style={styles.div_navbar}>
        <h1 style={styles.nameApp}>NUTRIWISE</h1>
        <ul style={styles.ul}>
          {[
            { name: "Calculator", path: "/calculator" },
            { name: "Food List", path: "/food-list" },
            { name: "Recipe", path: "/recipe" },
            { name: "Login", path: "/login" },
            { name: "Register", path: "/register" },
          ].map((item) => (
            <li key={item.name}>
              <Link
                to={item.path}
                style={styles.link}
                onMouseOver={(e) =>
                  ((e.target as HTMLAnchorElement).style.color = "#D2691E")
                }
                onMouseOut={(e) =>
                  ((e.target as HTMLAnchorElement).style.color = "#000000")
                }
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

const styles = {
  nav: {
    background:
      "linear-gradient(180deg, rgb(247, 226, 85) 0%, rgb(145, 133, 50, 0) 100%)",
    padding: "10px 0",
    backdropFilter: "blur(5px)",
  },
  div_navbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "0 20px",
  },
  nameApp: {
    fontFamily: `"Playfair Display", serif`,
    fontWeight: 900,
    fontStyle: "normal",
    color: "#B56100",
    fontSize: "50px",
  },
  ul: {
    listStyle: "none",
    display: "flex",
    gap: "40px",
    padding: 0,
    margin: 0,
    alignItems: "center",
  },
  link: {
    textDecoration: "none",
    color: "#000000",
    fontSize: "32px",
    transition: "color 0.3s ease",
  },
};

export default Navbar;
