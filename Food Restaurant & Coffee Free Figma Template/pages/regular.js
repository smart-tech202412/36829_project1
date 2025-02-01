// components/IconGrid.js

const IconGrid = () => {
    // Categories with unique icons
    const categories = [
      {
        title: "Arrows",
        icons: ["↔", "↕", "↑", "↓", "←", "→", "↩", "↪", "⇄", "⇅", "⇆", "⇇", "⇈", "⇉", "⇊", "⇋"],
      },
      {
        title: "Communications",
        icons: ["✉", "📧", "📩", "📤", "📥", "📬", "📭", "📞", "📱", "📠", "📟", "📻", "📡", "🗨", "💬"],
      },
      {
        title: "Health & Wellness",
        icons: ["⚕", "💊", "🩺", "🩹", "🦽", "🚑", "🏥", "🩸", "🧬", "🧪", "💉", "🧫", "🚴", "🧘"],
      },
      {
        title: "Maps & Travel",
        icons: ["✈", "🚂", "🚕", "🚗", "🛳", "🚢", "🚀", "🚁", "🏝", "🗺", "🛤", "🗻", "🏞", "🛫"],
      },
      {
        title: "Design",
        icons: ["⚙", "✏", "📐", "📏", "📋", "🖌", "🎨", "🖍", "🖋", "📎", "📜", "🖼", "🧾", "📑"],
      },
      {
        title: "Math & Finance",
        icons: ["₿", "💵", "💶", "💷", "💸", "💳", "💰", "📊", "📈", "📉", "🔢", "➕", "➖", "✖", "➗"],
      },
      {
        title: "People",
        icons: ["🙂", "🙃", "😊", "😉", "😍", "😎", "🤩", "😢", "😭", "😡", "😱", "🤔", "🤗", "🙌"],
      },
      {
        title: "Brands",
        icons: ["Ⓜ", "🅿", "🆓", "🆕", "🆒", "🅾", "🆗", "ℹ", "✅", "❌", "📛", "🅰", "🅱", "🅾", "🆙"],
      },
      {
        title: "Development",
        icons: ["</>", "{ }", "</>", "🔧", "🔨", "🖥", "⌨", "💻", "📟", "📀", "💾", "🖱", "🖲", "🖼"],
      },
      {
        title: "Media",
        icons: ["🎥", "🎞", "📷", "📹", "🎤", "🎬", "🎧", "🎶", "🎵", "📻", "📺", "📼", "📟", "🖥"],
      },
      {
        title: "Security & Warnings",
        icons: ["⚠", "🚧", "🔒", "🔓", "🛡", "🔑", "🚨", "🚔", "🚓", "🔏", "🔐", "❗", "❕", "☢", "☣"],
      },
      {
        title: "Time",
        icons: ["⏰", "⏲", "⏳", "⌚", "🕰", "🕛", "🕐", "🕑", "🕒", "🕓", "🕔", "🕕", "🕖", "🕗", "🕘"],
      },
      {
        title: "Weather & Nature",
        icons: ["☀", "☁", "⛅", "🌧", "🌩", "🌨", "🌪", "🌈", "🔥", "💧", "🌊", "🌳", "🌴", "🌵"],
      },
      {
        title: "Commerce",
        icons: ["🛒", "🛍", "💰", "💳", "💵", "💴", "💶", "💷", "📦", "📥", "📤", "📦", "📮", "📭"],
      },
      {
        title: "Education",
        icons: ["📘", "📕", "📖", "📚", "📒", "📓", "📔", "🖍", "🖋", "✏", "📜", "🎓", "📑", "📂"],
      },
      {
        title: "Games",
        icons: ["🎮", "🎲", "♟", "🕹", "🎴", "🎯", "🧩", "🎱", "🃏", "🀄", "🎳", "🎰", "🧸", "⚽"],
      },
    ];
  
    return (
      <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
        <h1 style={{ fontSize: "24px", fontWeight: "bold", marginBottom: "20px" }}>
          Icon Categories
        </h1>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "40px" }}>
          {categories.map((category, index) => (
            <div key={index} style={{ width: "200px" }}>
              <h2 style={{ fontSize: "16px", fontWeight: "bold", marginBottom: "10px" }}>
                {category.title}
              </h2>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(4, 1fr)",
                  gap: "10px",
                }}
              >
                {category.icons.map((icon, iconIndex) => (
                  <div
                    key={iconIndex}
                    style={{
                      textAlign: "center",
                      padding: "8px",
                      border: "1px solid #ddd",
                      borderRadius: "4px",
                    }}
                  >
                    {icon}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default IconGrid;
  