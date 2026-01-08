import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";

const grizzArtLines = [
  "  _______________________",
  " |  YOU'VE UNLOCKED      |",
  " |  BX MODE  ---->       |",
  " |  xplore or whateva    |",
  " |_______________________|",
];

const bearGifs = [
  "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExZmcxbXU1dTVtanIxdWVhdTM0ZG81czNreHI5MGFjdXZoNDB3cmFzYyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/l0HlIsgsnBCaI9KcE/giphy.gif",
  "https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3Mzg0ZWVyaWQ4YXRmMXRxcHZmYnhkbG1xbHlvMm04ZXJqenQxcXpyayZlcD12MV9naWZzX3NlYXJjaCZjdD1n/3o6wrjNf9iYP6PpHZC/giphy.gif",
  "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExZGp1bHZmbDEyOWphdHRuNGozeGJvamg0ZWs0dmFqZW5zYnhpYTlwZiZlcD12MV9naWZzX3NlYXJjaCZjdD1n/9rgaf3uerR49dO1jWs/giphy.gif",
  "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExOXM1aHFlZjAwbm9jMjFoZnQ4YWxpZ2Fjb2h3MmRvNDlpbWM0YzZpeCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/cFdHXXm5GhJsc/giphy.gif",
  "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExZzBhOWtpMXBpMjd3dmc0cGZzaXF2enBkcTZ1N2ZxNnp0ZjZxbWFhdyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/AcZq2mahIezYY/giphy.gif",
  "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExdXAyaDc1Zmp4NWdwYXo3Njhnb3NqMnptNjkxNXdicnk1NXNqZnRoOCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/idXJtVxvDDwWTDZoqd/giphy.gif",
  "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExZ2locTc0Z3pnZXF5cjNpODAzOHI0NHc0dzVmczRucXkwa2RtZHF2eiZlcD12MV9naWZzX3NlYXJjaCZjdD1n/DIuf1nZCDvupSmBQ95/giphy.gif",
  "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExZG9scHgyMjVqeXpoZmJ2bnozM3F0NGxtdmo2aXN5Y2N2MHpubHRtbyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/TjAcxImn74uoDYVxFl/giphy.gif",
  "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExdmY2aTdiZTZ1dHViYjdiYTU4Mmd1OThnczZ2YWU4c3N6MzFuc3I4ayZlcD12MV9naWZzX3NlYXJjaCZjdD1n/hJvYQtUG2acbYDRlKd/giphy.gif",
  "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExdzNwMGRxZHMxc3hwZDU1ajhwamNmY3k0aDc4NGMyY3dmMDkzNjhjMCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/85Q7aV4R5bxDO/giphy.gif",
  "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExeDV1dm9tNndmZnpwdWhzYXprdGhwaWV4MW1mcnN1M2Ezc2t6ZjRkeSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/blSTtZehjAZ8I/giphy.gif",
  "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNWRmYnBjMzFkemJkajJtenQxdWZwemY1NHdlYm9nNTZkYzlpY2RidiZlcD12MV9naWZzX3NlYXJjaCZjdD1n/m9eG1qVjvN56H0MXt8/giphy.gif"
];

export const DevConsoleLive = () => {
  const containerRef = useRef(null);
  const [typedMessage, setTypedMessage] = useState("");
  const [cursorVisible, setCursorVisible] = useState(true);
  const [phase, setPhase] = useState(0);
  const [history, setHistory] = useState([]);
  const [isTyping, setIsTyping] = useState(false);
  const [isConsoleClearing, setIsConsoleClearing] = useState(false);
  const [isGrizzMode, setIsGrizzMode] = useState(false);
  const [asciiLines, setAsciiLines] = useState([]);
  const [isSessionEnded, setIsSessionEnded] = useState(false);
  const [activeBearGif, setActiveBearGif] = useState(bearGifs[0]);

  const spinnerFrames = ["⠋", "⠙", "⠹", "⠸", "⠼", "⠴"];

  const phases = [
    { prefix: "bc ~ % ", message: "get bexi", type: "command" },
    { prefix: "bc ~ % ", message: "Fetching...", type: "spinner" },
    { prefix: "🇵🇦 ", message: "Panamanian roots", type: "log" },
    { prefix: "🤠 ", message: "Texas Raised", type: "log" },
    { prefix: "🌴 ", message: "Beach evangelist", type: "log" },
    { prefix: "⚽️ ", message: "Visca Barça (don't cancel me)", type: "log" },
    { prefix: "🐢 ", message: "Long lost ninja turtle", type: "log" },
    { prefix: "✈️ ", message: "Adventure-a-holic", type: "log" },
    { prefix: "💿 ", message: "Tunes on, vibes flowing", type: "log" },
     { prefix: "💁🏽‍♀️ ", message: "ENFP & Certified yapper", type: "log" },
    { prefix: "bc ~ % > ", message: "", type: "choice" },
  ];

  useEffect(() => {
    const blink = setInterval(() => {
      setCursorVisible((prev) => !prev);
    }, 500);
    return () => clearInterval(blink);
  }, []);

  useEffect(() => {
    if (isTyping || isConsoleClearing || isGrizzMode || isSessionEnded) return;

    const current = phases[phase] || { prefix: "", message: "", type: "done" };
    if (current.type === "done" || current.type === "choice") return;

    if (current.type === "spinner") {
      let frame = 0;
      const spinnerInterval = setInterval(() => {
        setTypedMessage(`${spinnerFrames[frame]} ${current.message}`);
        frame = (frame + 1) % spinnerFrames.length;
      }, 100);

      setTimeout(() => {
        clearInterval(spinnerInterval);
        setHistory((prev) => [...prev, `${current.message}`]);
        setPhase((prev) => prev + 1);
      }, 2000);

      return;
    }

    let charIndex = 0;
    let buffer = "";
    setTypedMessage("");
    setIsTyping(true);

    const typingInterval = setInterval(() => {
      if (charIndex < current.message.length) {
        buffer += current.message.charAt(charIndex);
        setTypedMessage(buffer);
        charIndex++;
      } else {
        clearInterval(typingInterval);
        setTimeout(() => {
          setHistory((prev) => [...prev, `${current.prefix}${current.message}`]);
          setPhase((prev) => prev + 1);
          setIsTyping(false);
        }, 1000);
      }
    }, 50);

    return () => clearInterval(typingInterval);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [phase, isConsoleClearing, isGrizzMode, isSessionEnded]);

  const current = phases[phase] || {};
  const showChoice = current.type === "choice" && !isConsoleClearing && !isSessionEnded;

  const handleGoGrizz = () => {
    setIsConsoleClearing(true);
    setTypedMessage("");
    setIsTyping(false);
    setAsciiLines([]);
    setHistory(["bc ~ % go bx mode"]);
    setIsGrizzMode(true);
    setIsSessionEnded(false);
    setIsConsoleClearing(false);
    animateGrizzArt();
  };

  const handleGrowl = () => {
    gsap.fromTo(
      containerRef.current,
      { scale: 1 },
      { scale: 1.05, duration: 0.1, yoyo: true, repeat: 3 }
    );
    setHistory((prev) => [...prev, "bc ~ % * not you pressing it lol *"]);
  };

  const handleClearConsoleOnly = () => {
    setIsConsoleClearing(true);
    setTypedMessage("");
    setIsTyping(false);
    setAsciiLines([]);
    setIsGrizzMode(false);
    setHistory(["bc ~ % clear console"]);

    setTimeout(() => {
      setHistory(["bc ~ % bexi is hibernating..."]);
      setIsConsoleClearing(false);
      setIsSessionEnded(true);
    }, 800);
  };

  const handleReboot = () => {
    setTypedMessage("");
    setCursorVisible(true);
    setPhase(0);
    setHistory([]);
    setIsTyping(false);
    setIsConsoleClearing(false);
    setIsGrizzMode(false);
    setAsciiLines([]);
    setIsSessionEnded(false);

    gsap.fromTo(
      containerRef.current,
      { opacity: 0, scale: 0.95 },
      { opacity: 1, scale: 1, duration: 0.8, ease: "power2.out" }
    );
  };

  const animateGrizzArt = () => {
    let index = 0;
    const interval = setInterval(() => {
      setAsciiLines((prev) => [...prev, grizzArtLines[index]]);
      index++;
      if (index >= grizzArtLines.length) clearInterval(interval);
    }, 100);
  };

  const cycleBearGif = () => {
    const currentIndex = bearGifs.indexOf(activeBearGif);
    const nextIndex = (currentIndex + 1) % bearGifs.length;
    setActiveBearGif(bearGifs[nextIndex]);
  };

  return (
    <div
      style={{
        backgroundImage: isGrizzMode ? `url(${activeBearGif})` : "none",
        backgroundColor: isGrizzMode ? "rgba(0,0,0,0.7)" : "#121212ff",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        color: "#f5f5f5",
        padding: "1.5rem",
        borderRadius: "8px",
        fontSize: "1rem",
        lineHeight: "1.6",
        fontFamily: "inter",
        minHeight: "400px",
        overflow: "hidden",
        boxShadow: "0 0 0 1.5px #242424ff",
        position: "relative",
        transition: "background-image 0.5s ease-in-out",
      }}
    >
      {/* Terminal Header */}
      <div
        style={{
          position: "absolute",
          top: "0.5rem",
          left: "0.75rem",
          display: "flex",
          gap: "0.4rem",
          alignItems: "center"
        }}
      >
        <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#ff5f56" }} />
        <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#ffbd2e" }} />
        <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#27c93f" }} />
        <div style={{fontSize:".7rem", paddingLeft:"1rem", fontWeight:"bold"}}>bcastillo -zsh --77x29</div>
      </div>

      {/* Console Output */}
      <div ref={containerRef} style={{ paddingTop: "2rem", position: "relative", zIndex: 1 }}>
        {history.map((line, index) => (
          <div key={index}>{line}</div>
        ))}

        {!isConsoleClearing && current.type !== "choice" && !isGrizzMode && !isSessionEnded && (
          <div>
            <span style={{ color: "#00B2A9" }}>{current.prefix}</span>
            <span>{typedMessage}</span>
            <span style={{ opacity: cursorVisible ? 1 : 0 }}>|</span>
          </div>
        )}

        {showChoice && !isGrizzMode && !isSessionEnded && (
          <div style={{ display: "flex", gap: "1rem", marginTop: "1rem", alignItems: "center" }}>
            <span
              onClick={handleGoGrizz}
              style={{
                background: "#1f1f1fff",
                padding: "0.5rem .8rem",
                // borderRadius: "6px",
                color: "#fff",
                // fontWeight: "bold",
                fontFamily: "inter",
                cursor: "pointer",
                transition: "transform 0.2s ease",
                fontSize: ".8rem",
              }}
              onMouseEnter={(e) => (e.target.style.transform = "scale(1.05)")}
              onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
            >
              {">"} go bx mode
            </span>

            <span
              onClick={handleClearConsoleOnly}
              style={{
                color: "#b5b5b5",
                cursor: "pointer",
                textDecoration: "underline",
                fontSize: ".8rem",
              }}
            >
              clear console
            </span>
          </div>
        )}

        {isGrizzMode && (
          <pre style={{ color: "#fff", marginTop: "1rem", background: "transparent" }}>
            {asciiLines.map((line, i) => (
              <div key={i}>{line}</div>
            ))}
          </pre>
        )}

        {isGrizzMode && asciiLines.length === grizzArtLines.length && !isSessionEnded && (
          <div style={{ marginTop: "1rem", display: "flex", gap: ".3rem", flexDirection: "column", alignItems:"flex-start"}}>
            <span
              onClick={cycleBearGif}
              style={{
                color: "#fff200ff",
                background: "#000000",
                cursor: "pointer",
               fontSize: ".8rem",
                  padding: "0.5rem .8rem",
                transition: "transform 0.2s ease",
              }}
              onMouseEnter={(e) => (e.target.style.transform = "scale(1.05)")}
              onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
            >
             don't click me 
            </span>

            <span
              onClick={handleGrowl}
              style={{
                color: "#f5f5f5",
                background: "#000000",
                cursor: "pointer",
                fontSize: ".8rem",
                  padding: "0.5rem .8rem",
                transition: "transform 0.2s ease",
              }}
              onMouseEnter={(e) => (e.target.style.transform = "scale(1.05)")}
              onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
            >
              curious?
            </span>
                        <span
              onClick={handleClearConsoleOnly}
              style={{
                color: "#cacacaff",
                background: "#000000",
                cursor: "pointer",
               fontSize: ".8rem",
                padding: "0.5rem .8rem",
                transition: "transform 0.2s ease",
              }}
              onMouseEnter={(e) => (e.target.style.transform = "scale(1.05)")}
              onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
            >
              hibernate
            </span>
          </div>
        )}

        {isSessionEnded && (
          <>
            <div style={{ marginTop: "1rem", color: "#888", fontStyle: "italic" }}>
              (you can reboot or go bx mode again)
            </div>

            <div style={{ marginTop: "1rem", display: "flex", gap: "2rem" }}>
              <span
                onClick={handleReboot}
                style={{
                  color: "#fff200ff",
                  cursor: "pointer",
                  textDecoration: "underline",
                  fontSize: ".8rem",
                }}
                onMouseEnter={(e) => (e.target.style.transform = "scale(1.05)")}
                onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
              >
                reboot
              </span>

              <span
                onClick={handleGoGrizz}
                style={{
                  color: "#f5f5f5",
                  cursor: "pointer",
                  textDecoration: "underline",
                  fontSize: ".8rem",
                }}
                onMouseEnter={(e) => (e.target.style.transform = "scale(1.05)")}
                onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
              >
                go bx mode
              </span>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default DevConsoleLive;
