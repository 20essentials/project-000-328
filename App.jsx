/** @jsxImportSource @emotion/react */
import React from "react";
import { css, keyframes } from "@emotion/css";

const fadeIn = keyframes`
  0% {
    transform: perspective(10px) translateZ(500px);
  }
  100% {
    transform: perspective(10000px) translateZ(0px);
  }
`;

const globalStyles = css`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: sans-serif, system-ui, -apple-system, BlinkMacSystemFont,
      'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans',
      'Helvetica Neue';
    -webkit-tap-highlight-color: transparent;
  }

  html {
    scroll-behavior: smooth;
    scrollbar-width: thin;
  }

  body {
    height: 100vh;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    place-content: center;
    transform-style: preserve-3d;
    perspective: 10000px;
    background-image: linear-gradient(to bottom, var(--clr), var(--clr2));
    overflow: hidden;
  }
`;

const sectionStyle = css`
  --bg: url('assets/img-1.avif');

  transform-style: preserve-3d;
  background-image: var(--bg);
  background-size: cover;
  background-position: center;
  position: fixed;
  width: 100%;
  height: 100%;
  inset: 0;
  display: flex;
  view-transition-name: section;

  &::before,
  &::after {
    content: '';
    display: block;
    width: 5vmax;
    height: 5vmax;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    pointer-events: none;
    background-image: url('assets/arrow.png');
    background-size: cover;
    background-position: center;
    background-blend-mode: multiply;
    filter: invert(1);
  }

  &::before {
    left: 2vmax;
    transform: translateY(-50%) scaleX(-1);
  }

  &::after {
    right: 2vmax;
  }

  a {
    width: 50%;
    height: 100%;
    display: block;
    background-color: transparent;
  }
`;

const viewTransitionNew = css`
  animation: ${fadeIn} 1s ease forwards;
`;

const viewTransitionOld = css`
  animation: ${fadeIn} 1s ease reverse forwards;
`;

export default function App() {
  React.useEffect(() => {
    document.body.style.setProperty("--clr", "#002e34");
    document.body.style.setProperty("--clr2", "#010c12");
  }, []);

  return (
    <>
      <style>{`
        ::view-transition-new(section) {
          animation: fadeIn 1s ease forwards;
        }
        ::view-transition-old(section) {
          animation: fadeIn 1s ease reverse forwards;
        }
        @keyframes fadeIn {
          0% {
            transform: perspective(10px) translateZ(500px);
          }
          100% {
            transform: perspective(10000px) translateZ(0px);
          }
        }
      `}</style>
      <style>{globalStyles}</style>
      <section className={sectionStyle}>
        <a href="index7.html" />
        <a href="index2.html" />
      </section>
    </>
  );
}
