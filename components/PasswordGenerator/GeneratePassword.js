import { useEffect, useState, useCallback, useRef } from "react";
import "./PasswordGenerator.css";

function PasswordGenerator() {
  const [length, setLength] = useState(8);
  const [numAllowed, setNumAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");
  const passwordRef = useRef(null)

  const handlePassword = useCallback(()=>{
      let pass = "";
      let chars = "AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz";
      if (numAllowed) chars += "1234567890";
      if (charAllowed) chars += '`~@#$%^&*()_+-=/{}[]".,?|';
      for (let i = 0; i < length; i++) {
        let char = Math.floor(Math.random() * chars.length + 1);
        pass += chars.charAt(char);
      }
      setPassword(pass);
    },
      [length, numAllowed, charAllowed, setPassword]);

  useEffect(()=>{
    handlePassword();
  },[length, numAllowed, charAllowed, setPassword])

  const copyPassword = useCallback(()=>{
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password).then
    (console.log('coppied to clipboard'));
  },[password]);

  return (
    <>
      <h1>Password Generator</h1>
      <div className="parent">
        <div className="passwordcontainer">
          <div className="input">
            <input
              className="input1"
              type="text"
              placeholder="Password"
              value={password}
              ref={passwordRef}
              readOnly
            />
            <button onClick={copyPassword}>Copy</button>
          </div>
          <div className="input2">
            <input
              type="range"
              min={4}
              max={100}
              value={length}
              onChange={(e) => setLength(e.target.value)}
              style={{ cursor: "pointer" }}
            />
            <label>Length: {length}</label>
            <input
              style={{ cursor: "pointer" }}
              type="checkbox"
              defaultChecked={numAllowed}
              onChange={() => setNumAllowed((prev) => !prev)}
            />
            <label>Numbers</label>
            <input style={{ cursor: "pointer" }} type="checkbox" 
            defaultChecked={numAllowed}
            onChange={() => setNumAllowed((prev) => !prev)}/>
            <label>Characters</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default PasswordGenerator;
