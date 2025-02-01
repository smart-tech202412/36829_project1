// components/Typography.js

const Typography = () => {
    return (
      <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
        <h1 style={{ fontWeight: "bold", marginBottom: "20px" }}>02. Typography</h1>
  
        {/* Helvetica Section */}
        <div style={{ marginBottom: "40px" }}>
          <h2 style={{ fontSize: "24px", fontWeight: "bold", marginBottom: "10px" }}>Helvetica</h2>
          <p style={{ color: "#555", marginBottom: "20px" }}>Google Fonts</p>
          <div style={{ display: "flex", gap: "20px", alignItems: "center" }}>
            <div style={{ fontSize: "80px", fontWeight: "bold", color: "#ddd" }}>Aa</div>
            <div>
              <h3 style={{ fontSize: "20px", fontWeight: "bold" }}>Heading</h3>
              <p style={{ color: "#555", marginTop: "10px" }}>
                Line height and paragraph spacing for headings is 1.1x font size.
              </p>
            </div>
            <div>
              <div style={{ fontSize: "18px", marginBottom: "8px" }}>
                <strong>Heading 1</strong>: 60 px / 68 px
              </div>
              <div style={{ fontSize: "18px", marginBottom: "8px" }}>
                <strong>Heading 2</strong>: 48 px / 56 px
              </div>
              <div style={{ fontSize: "18px", marginBottom: "8px" }}>
                <strong>Heading 3</strong>: 40 px / 48 px
              </div>
              <div style={{ fontSize: "18px", marginBottom: "8px" }}>
                <strong>Heading 4</strong>: 32 px / 40 px
              </div>
              <div style={{ fontSize: "18px", marginBottom: "8px" }}>
                <strong>Heading 5</strong>: 24 px / 32 px
              </div>
              <div style={{ fontSize: "18px" }}>
                <strong>Heading 6</strong>: 20 px / 28 px
              </div>
            </div>
          </div>
        </div>
  
        {/* Inter Section */}
        <div>
          <h2 style={{ fontSize: "24px", fontWeight: "bold", marginBottom: "10px" }}>Inter</h2>
          <p style={{ color: "#555", marginBottom: "20px" }}>Google Fonts</p>
          <div style={{ display: "flex", gap: "20px", alignItems: "center" }}>
            <div style={{ fontSize: "80px", fontWeight: "bold", color: "#ddd" }}>Aa</div>
            <div>
              <h3 style={{ fontSize: "20px", fontWeight: "bold" }}>Body</h3>
              <p style={{ color: "#555", marginTop: "10px" }}>
                Line height and paragraph spacing for body text is 1.4x font size.
              </p>
            </div>
            <div>
              <div style={{ fontSize: "18px", marginBottom: "8px" }}>
                <strong>Large Text Bold</strong>: 20 px / 28 px
              </div>
              <div style={{ fontSize: "18px", marginBottom: "8px" }}>
                <strong>Large Text Regular</strong>: 20 px / 28 px
              </div>
              <div style={{ fontSize: "18px", marginBottom: "8px" }}>
                <strong>Medium Text Bold</strong>: 18 px / 26 px
              </div>
              <div style={{ fontSize: "18px", marginBottom: "8px" }}>
                <strong>Medium Text Regular</strong>: 18 px / 26 px
              </div>
              <div style={{ fontSize: "18px", marginBottom: "8px" }}>
                <strong>Small Text Bold</strong>: 16 px / 24 px
              </div>
              <div style={{ fontSize: "18px" }}>
                <strong>Small Text Regular</strong>: 14 px / 22 px
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Typography;
  