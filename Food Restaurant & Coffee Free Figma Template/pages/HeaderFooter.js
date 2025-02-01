// components/HeaderFooter.js

const HeaderFooter = () => {
    return (
      <div style={{ fontFamily: "Arial, sans-serif", minHeight: "100vh", display: "flex", flexDirection: "column" }}>
        {/* Header */}
        <header
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "10px 20px",
            borderBottom: "1px solid #ddd",
          }}
        >
          {/* Logo */}
          <div style={{ fontSize: "24px", fontWeight: "bold", color: "#F79C00" }}>
            Food<span style={{ color: "#333" }}>tuck</span>
          </div>
  
          {/* Navigation Links */}
          <nav>
            <ul
              style={{
                display: "flex",
                listStyle: "none",
                gap: "20px",
                margin: 0,
                padding: 0,
              }}
            >
              <li style={styles.navLink}>Home</li>
              <li style={styles.navLink}>Menu</li>
              <li style={styles.navLink}>Blog</li>
              <li style={styles.navLink}>Pages</li>
              <li style={styles.navLink}>About</li>
              <li style={styles.navLink}>Shop</li>
              <li style={styles.navLink}>Contact</li>
            </ul>
          </nav>
  
          {/* Search Icon */}
          <div>
            <i className="fas fa-search" style={styles.icon}></i>
          </div>
        </header>
  
        {/* Content Placeholder */}
        <div style={{ flex: 1, textAlign: "center", paddingTop: "100px" }}>
          <h1 style={{ color: "#F79C00" }}>Food</h1>
          <p style={{ color: "#999" }}>tuck</p>
          <div style={{ marginTop: "20px" }}>
            <span style={{ color: "#F79C00", marginRight: "10px" }}>•</span>
            <span style={{ color: "#999" }}>Home</span>
          </div>
        </div>
  
        {/* Footer */}
        <footer
          style={{
            borderTop: "1px solid #ddd",
            padding: "10px 20px",
            textAlign: "center",
            backgroundColor: "#F9F9F9",
          }}
        >
          <ul
            style={{
              display: "flex",
              justifyContent: "center",
              listStyle: "none",
              gap: "20px",
              margin: 0,
              padding: 0,
              fontSize: "14px",
            }}
          >
            <li style={styles.navLink}>Home</li>
            <li style={styles.navLink}>Menu</li>
            <li style={styles.navLink}>Blog</li>
            <li style={styles.navLink}>Pages</li>
            <li style={styles.navLink}>About</li>
            <li style={styles.navLink}>Shop</li>
            <li style={styles.navLink}>Contact</li>
          </ul>
          <div style={{ marginTop: "10px", color: "#333", fontSize: "14px" }}>
            © 2023 Foodtuck. All Rights Reserved.
          </div>
        </footer>
      </div>
    );
  };
  
  const styles = {
    navLink: {
      cursor: "pointer",
      color: "#333",
      textDecoration: "none",
      fontSize: "16px",
      fontWeight: "500",
    },
    icon: {
      fontSize: "16px",
      color: "#333",
      cursor: "pointer",
    },
  };
  
  export default HeaderFooter;
  