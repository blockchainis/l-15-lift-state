import { useState } from "react";

export default function Input({ label }) {
  //input이 각각 state를 갖고 있습니다.
  const [text, setText] = useState("");

  function handleChange(e) {
    setText(e.target.value);
  }

  return (
    <label>
      {label} <input value={text} onChange={handleChange} />
    </label>
  );
}


