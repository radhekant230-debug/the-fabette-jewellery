{/* ================= PREMIUM WHITE HERO ================= */}
<motion.section
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 1.2 }}
  className="position-relative overflow-hidden"
  style={{
    minHeight: "100vh",
    background: "#ffffff",
    color: "#111111",
    display: "flex",
    alignItems: "center",
  }}
>
  {/* SUBTLE GOLD GLOW */}
  <div
    style={{
      position: "absolute",
      width: "500px",
      height: "500px",
      borderRadius: "50%",
      background: "rgba(180, 138, 90, 0.08)",
      filter: "blur(100px)",
      top: "-180px",
      right: "-120px",
      pointerEvents: "none",
    }}
  />

  <div className="container position-relative">
    <div className="row align-items-center min-vh-100">

      {/* ================= LEFT CONTENT ================= */}
      <div className="col-lg-6 py-5">

        {/* SMALL LABEL */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          style={{
            letterSpacing: "0.45em",
            fontSize: "12px",
            color: "#777777",
            textTransform: "uppercase",
            marginBottom: "28px",
            fontWeight: 500,
          }}
        >
          Digital Luxury Maison
        </motion.p>

        {/* MAIN HEADING */}
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 1 }}
          style={{
            fontFamily: "Georgia, 'Times New Roman', serif",
            fontSize: "clamp(4rem, 8vw, 8rem)",
            fontWeight: 400,
            lineHeight: 0.88,
            letterSpacing: "-0.04em",
            margin: 0,
            color: "#111111",
          }}
        >
          TIMELESS
          <br />

          <span
            style={{
              color: "#A67C2E",
              fontStyle: "italic",
              fontWeight: 400,
              letterSpacing: "-0.05em",
            }}
          >
            LUXURY
          </span>
        </motion.h1>

        {/* GOLD LINE */}
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "90px" }}
          transition={{ delay: 0.8, duration: 0.8 }}
          style={{
            height: "1px",
            background: "#A67C2E",
            marginTop: "35px",
            marginBottom: "28px",
          }}
        />

        {/* DESCRIPTION */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
          style={{
            maxWidth: "520px",
            lineHeight: 1.9,
            fontSize: "17px",
            color: "#555555",
            marginBottom: "35px",
            fontFamily: "Georgia, 'Times New Roman', serif",
          }}
        >
          Fabette blends timeless jewellery craftsmanship with
          contemporary elegance — creating pieces designed to
          become part of your story.
        </motion.p>

        {/* ================= BUTTONS ================= */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="d-flex gap-3 flex-wrap"
        >

          {/* PRIMARY BUTTON */}
          <Link
            to="/collection"
            className="btn"
            style={{
              background: "#111111",
              color: "#ffffff",
              padding: "17px 40px",
              borderRadius: "0",
              letterSpacing: "0.2em",
              fontSize: "11px",
              fontWeight: 600,
              textDecoration: "none",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "#A67C2E";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "#111111";
            }}
          >
            ENTER COLLECTION
          </Link>

          {/* SECONDARY BUTTON */}
          <button
            type="button"
            onClick={() => navigate("/about")}
            className="btn"
            style={{
              border: "1px solid #222222",
              color: "#111111",
              padding: "17px 40px",
              borderRadius: "0",
              letterSpacing: "0.2em",
              fontSize: "11px",
              fontWeight: 600,
              background: "transparent",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "#111111";
              e.currentTarget.style.color = "#ffffff";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "transparent";
              e.currentTarget.style.color = "#111111";
            }}
          >
            OUR STORY
          </button>

        </motion.div>

      </div>

      {/* ================= RIGHT IMAGE ================= */}
      <div className="col-lg-6 position-relative">

        <motion.div
          initial={{ opacity: 0, scale: 1.08 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            delay: 0.3,
            duration: 1.4,
            ease: "easeOut",
          }}
          style={{
            position: "relative",
            width: "100%",
            height: "78vh",
            minHeight: "550px",
            overflow: "hidden",
          }}
        >

          {/* IMAGE */}
          <img
            src="https://images.unsplash.com/photo-1617038220319-276d3cfab638?q=80&w=1974&auto=format&fit=crop"
            alt="Fabette Luxury Jewellery"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "center",
              display: "block",
              filter: "brightness(1.02) contrast(0.96)",
              transition: "transform 1s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.04)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
            }}
          />

          {/* IMAGE CAPTION */}
          <div
            style={{
              position: "absolute",
              bottom: "25px",
              left: "25px",
              background: "rgba(255,255,255,0.92)",
              padding: "12px 18px",
              backdropFilter: "blur(8px)",
            }}
          >
            <span
              style={{
                fontSize: "10px",
                letterSpacing: "0.25em",
                color: "#222222",
                textTransform: "uppercase",
              }}
            >
              The Fabette Collection
            </span>
          </div>

        </motion.div>

        {/* DECORATIVE GOLD FRAME */}
        <div
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            border: "1px solid rgba(166,124,46,0.35)",
            top: "18px",
            left: "18px",
            pointerEvents: "none",
            zIndex: -1,
          }}
        />

      </div>

    </div>
  </div>

  {/* ================= SCROLL INDICATOR ================= */}
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 1.5 }}
    style={{
      position: "absolute",
      bottom: "25px",
      left: "50%",
      transform: "translateX(-50%)",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: "8px",
    }}
  >
    <span
      style={{
        fontSize: "9px",
        letterSpacing: "0.3em",
        color: "#888888",
        textTransform: "uppercase",
      }}
    >
      Scroll
    </span>

    <div
      style={{
        width: "1px",
        height: "40px",
        background: "#A67C2E",
      }}
    />
  </motion.div>

</motion.section>
