export default function SkillsStack() {
  return (
    <div
      style={{
        fontFamily: "Inter, system-ui, sans-serif",
        minHeight: "100vh",
        background: "#f5f3ef",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "64px 32px",
      }}
    >
      <div
        style={{
          maxWidth: 960,
          width: "100%",
          display: "flex",
          gap: 64,
          alignItems: "flex-start",
        }}
      >
        <div style={{ flexShrink: 0, maxWidth: 300 }}>
          <p
            style={{
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: "#888",
              marginBottom: 16,
            }}
          >
            Stack
          </p>
          <h2
            style={{
              fontSize: 48,
              fontWeight: 900,
              lineHeight: 1.1,
              color: "#111",
              margin: "0 0 20px",
            }}
          >
            Skills grouped by engineering use, not alphabetically.
          </h2>
          <p style={{ fontSize: 13, color: "#888", lineHeight: 1.6, margin: 0 }}>
            The previous marquee made the stack energetic but hard to parse.
            This version keeps the same skill set and gives each group a job.
          </p>
        </div>

        <div
          style={{
            flex: 1,
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 16,
          }}
        >
          {[
            {
              title: "Mobile Delivery",
              tags: ["Dart", "Flutter", "Typescript", "Javascript", "Angular-Capacitor"],
            },
            {
              title: "Product Data",
              tags: ["Firebase", "Analytics", "Marketplace tools"],
            },
            {
              title: "Systems",
              tags: ["Java", "Groovy", "SQL", "Fintech", "Scoring"],
            },
            {
              title: "Working Style",
              tags: ["Shipping", "Debugging", "Store release", "Production support"],
            },
          ].map((group) => (
            <div
              key={group.title}
              style={{
                background: "#fff",
                border: "1px solid #e5e5e5",
                borderRadius: 8,
                padding: 20,
              }}
            >
              <h3
                style={{
                  fontWeight: 700,
                  color: "#111",
                  margin: "0 0 12px",
                  fontSize: 15,
                }}
              >
                {group.title}
              </h3>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                {group.tags.map((tag) => (
                  <span
                    key={tag}
                    style={{
                      fontSize: 12,
                      border: "1px solid #d1d5db",
                      color: "#444",
                      borderRadius: 4,
                      padding: "4px 10px",
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
