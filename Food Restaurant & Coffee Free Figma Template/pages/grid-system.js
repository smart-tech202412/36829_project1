// components/GridSystem.js

const GridSystem = () => {
    return (
      <div
        style={{
          padding: "20px",
          fontFamily: "Arial, sans-serif",
          border: "2px solid #0078D4",
          borderRadius: "8px",
          margin: "20px auto",
          maxWidth: "600px",
          backgroundColor: "#f9f9f9",
        }}
      >
        <h1
          style={{
            fontSize: "24px",
            fontWeight: "bold",
            color: "#0078D4",
            marginBottom: "20px",
          }}
        >
          04. Grid Systems
        </h1>
  
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            backgroundColor: "white",
            borderRadius: "8px",
            padding: "20px",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
            width: "300px",
            margin: "0 auto",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "16px",
              width: "100%",
            }}
          >
            <span style={{ fontSize: "14px", fontWeight: "bold" }}>DESKTOP</span>
            <div
              style={{
                backgroundColor: "#000",
                width: "50px",
                height: "35px",
                borderRadius: "4px",
              }}
            ></div>
          </div>
          <div style={{ textAlign: "left", width: "100%", fontSize: "14px" }}>
            <p style={{ marginBottom: "8px" }}>
              <strong>Grid Options:</strong>
            </p>
            <p style={{ margin: "4px 0" }}>Breakpoint: 1400px</p>
            <p style={{ margin: "4px 0" }}>Number of columns: 12</p>
            <p style={{ margin: "4px 0" }}>Column width: 80px</p>
            <p style={{ margin: "4px 0" }}>Gutter width: 24px</p>
          </div>
        </div>
      </div>
    );
  };
  
  export default GridSystem;
  