import React from "react";
import "./index.scss";

const darkTheme = () => {
  const html = document.querySelector("html");
  const checkbox = document.querySelector("input[name=theme]");

  const getSyle = (element, style) =>
    window.getComputedStyle(element).getPropertyValue(style);

  const initialColors = {
    bg: getSyle(html, "--bg"),
    text: getSyle(html, "--text"),
    textInput: getSyle(html, "--text-input"),
    bgTextInput: getSyle(html, "--bg-text-input"),
  };

  const darkMode = {
    bg: "#333333",
    text: "#f3f3f3",
    textInput: "#b5b5b5",
    bgTextInput: "#85e258",
  };

  const transformKey = (key) =>
    "--" + key.replace(/([A-Z])/, "-$1").toLowerCase();

  const changeColors = (colors) => {
    Object.keys(colors).map((key) =>
      html.style.setProperty(transformKey(key), colors[key])
    );
  };

  checkbox.addEventListener("change", ({ target }) => {
    target.checked ? changeColors(darkMode) : changeColors(initialColors);
  });

  return (
    <div className="toggle">
      <input id="switch" type="checkbox" name="theme" />
      <label for="switch">Theme</label>
    </div>
  );
};

export default darkTheme;
