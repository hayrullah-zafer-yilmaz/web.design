function consoleLog (logText, logType) {
  const logStyle = {
    padding: "10px",
    "border-radius": "5px",
    color: "black",
    "font-weight": "bold",
  };

  switch(logType) {
    case "warning":
      console.log(`%c${logText}`, "background: yellow;".concat(Object.entries(logStyle).map(([prop, value]) => `${prop}:${value}`).join(';')));
      break;
    case "success":
      console.log(`%c${logText}`, "background: lightgreen;".concat(Object.entries(logStyle).map(([prop, value]) => `${prop}:${value}`).join(';')));
      break;
    case "info":
      console.log(`%c${logText}`, "background: lightblue;".concat(Object.entries(logStyle).map(([prop, value]) => `${prop}:${value}`).join(';')));
      break;
    case "error":
      console.log(`%c${logText}`, "background: #B80F0A;".concat(Object.entries(logStyle).map(([prop, value]) => `${prop}:${value}`).join(';')));
      break;
      default:
        console.log("Log Type: info, success, warning, error");
      break;
  }
  
}

consoleLog("Text Message", "info");
consoleLog("Text Message", "success");
consoleLog("Text Message", "warning");
consoleLog("Text Message", "error");
