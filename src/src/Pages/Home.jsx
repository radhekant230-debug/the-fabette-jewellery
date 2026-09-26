{/* ================= PREMIUM WHITE LUXURY HERO ================= */}
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
  {/* ================= SUBTLE GOLD GLOW ================= */}
  <div
    style={{
      position: "absolute",
      width: "500px",
      height: "500px",
      borderRadius: "50%",
      background: "rgba(166, 124, 46, 0.06)",
      filter: "blur(110px)",
      top: "-220px",
      right: "-150px",
      pointerEvents: "none",
      zIndex: 0,
    }}
  />

  {/* ================= CONTENT ================= */}
  <div
    className="container position-relative"
    style={{
      zIndex: 2,
    }}
  >
    <div className="row align-items-center">

      {/* =====================================================
          LEFT CONTENT
      ===================================================== */}
      <div className="col-lg-6 py-5">

        {/* SMALL LABEL */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.2,
            duration: 0.8,
          }}
          style={{
            margin: "0 0 28px 0",
            color: "#777777",
            fontSize: "11px",
            fontWeight: 500,
            letterSpacing: "0.45em",
            textTransform: "uppercase",
          }}
        >
          Digital Luxury Maison
        </motion.p>

        {/* MAIN HEADING */}
        <motion.h1
          initial={{
            opacity: 0,
            y: 50,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 0.35,
            duration: 1,
            ease: "easeOut",
          }}
          style={{
            margin: 0,
            color: "#111111",
            fontFamily:
              "Georgia, 'Times New Roman', serif",
            fontSize: "clamp(4rem, 8vw, 8rem)",
            fontWeight: 400,
            lineHeight: 0.88,
            letterSpacing: "-0.055em",
          }}
        >
          TIMELESS
          <br />

          <span
            style={{
              color: "#A67C2E",
              fontStyle: "italic",
              fontWeight: 400,
              letterSpacing: "-0.06em",
            }}
          >
            LUXURY
          </span>
        </motion.h1>

        {/* GOLD LINE */}
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "90px" }}
          transition={{
            delay: 0.8,
            duration: 0.8,
          }}
          style={{
            height: "1px",
            background: "#A67C2E",
            marginTop: "35px",
            marginBottom: "28px",
          }}
        />

        {/* DESCRIPTION */}
        <motion.p
          initial={{
            opacity: 0,
            y: 15,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 0.8,
            duration: 0.9,
          }}
          style={{
            maxWidth: "510px",
            margin: "0 0 35px 0",
            color: "#555555",
            fontFamily:
              "Georgia, 'Times New Roman', serif",
            fontSize: "17px",
            lineHeight: 1.9,
          }}
        >
          Fabette blends timeless jewellery craftsmanship
          with contemporary elegance — creating pieces
          designed to become part of your story.
        </motion.p>

        {/* ================= BUTTONS ================= */}
        <motion.div
          initial={{
            opacity: 0,
            y: 25,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 1,
            duration: 0.8,
          }}
          className="d-flex gap-3 flex-wrap"
        >

          {/* ENTER COLLECTION */}
          <Link
            to="/collection"
            className="btn"
            style={{
              background: "#111111",
              color: "#ffffff",
              padding: "17px 40px",
              border: "1px solid #111111",
              borderRadius: "0",
              fontSize: "11px",
              fontWeight: 600,
              letterSpacing: "0.2em",
              textDecoration: "none",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background =
                "#A67C2E";
              e.currentTarget.style.borderColor =
                "#A67C2E";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background =
                "#111111";
              e.currentTarget.style.borderColor =
                "#111111";
            }}
          >
            ENTER COLLECTION
          </Link>

          {/* OUR STORY */}
          <button
            type="button"
            onClick={() => navigate("/about")}
            className="btn"
            style={{
              background: "transparent",
              color: "#111111",
              padding: "17px 40px",
              border: "1px solid #222222",
              borderRadius: "0",
              fontSize: "11px",
              fontWeight: 600,
              letterSpacing: "0.2em",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background =
                "#111111";
              e.currentTarget.style.color =
                "#ffffff";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background =
                "transparent";
              e.currentTarget.style.color =
                "#111111";
            }}
          >
            OUR STORY
          </button>

        </motion.div>
      </div>

      {/* =====================================================
          RIGHT IMAGE
      ===================================================== */}
      <div className="col-lg-6 py-4">

        <div
          style={{
            position: "relative",
            width: "100%",
            maxWidth: "590px",
            margin: "0 auto",
            padding: "0 18px 18px 0",
          }}
        >

          {/* GOLD FRAME */}
          <div
            style={{
              position: "absolute",
              top: "18px",
              left: "18px",
              right: "0",
              bottom: "0",
              border: "1px solid rgba(166, 124, 46, 0.35)",
              pointerEvents: "none",
              zIndex: 0,
            }}
          />

          {/* IMAGE CONTAINER */}
          <motion.div
            initial={{
              opacity: 0,
              scale: 1.06,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              delay: 0.3,
              duration: 1.3,
              ease: "easeOut",
            }}
            style={{
              position: "relative",
              width: "100%",
              height: "min(72vh, 680px)",
              minHeight: "500px",
              overflow: "hidden",
              background: "#f5f5f5",
              zIndex: 1,
            }}
          >

            {/* JEWELLERY IMAGE */}
            <img
              src="https://images.unsplash.com/photo-1617038220319-276d3cfab638?q=80&w=1974&auto=format&fit=crop"
              alt="Fabette Luxury Jewellery"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: "center",
                display: "block",
                filter:
                  "brightness(1.03) contrast(0.96) saturate(0.9)",
                transition:
                  "transform 1s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform =
                  "scale(1.04)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform =
                  "scale(1)";
              }}
            />

            {/* IMAGE CAPTION */}
            <div
              style={{
                position: "absolute",
                left: "24px",
                bottom: "24px",
                background:
                  "rgba(255, 255, 255, 0.94)",
                padding: "12px 18px",
                backdropFilter: "blur(8px)",
              }}
            >
              <span
                style={{
                  color: "#222222",
                  fontSize: "9px",
                  fontWeight: 500,
                  letterSpacing: "0.25em",
                  textTransform: "uppercase",
                }}
              >
                The Fabette Collection
              </span>
            </div>

          </motion.div>
        </div>
      </div>
    </div>
  </div>

  {/* ================= SCROLL INDICATOR ================= */}
  <motion.div
    initial={{
      opacity: 0,
    }}
    animate={{
      opacity: 1,
    }}
    transition={{
      delay: 1.5,
      duration: 0.8,
    }}
    style={{
      position: "absolute",
      bottom: "22px",
      left: "50%",
      transform: "translateX(-50%)",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: "7px",
      zIndex: 3,
    }}
  >
    <span
      style={{
        color: "#888888",
        fontSize: "8px",
        letterSpacing: "0.35em",
        textTransform: "uppercase",
      }}
    >
      Scroll
    </span>

    <div
      style={{
        width: "1px",
        height: "36px",
        background: "#A67C2E",
      }}
    />
  </motion.div>

</motion.section>
