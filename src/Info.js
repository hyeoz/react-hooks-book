import React, { useEffect, useState } from "react";

const Info = () => {
  const [name, setName] = useState("");
  const [nickname, setNickname] = useState("");

  const [fix, setFix] = useState({
    nameFix: "",
    nicknameFix: "",
  });

  useEffect(() => {
    console.log("End of Rendering");
    console.log(fix.nameFix);

    return () => {
      console.log("clean-up");
      console.log(fix.nameFix);
    };
  }, [fix]);

  const onNameChange = (e) => {
    setName(e.target.value);
  };

  const onNicknameChange = (e) => {
    setNickname(e.target.value);
  };

  const onClick = () => {
    setFix({
      nameFix: name,
      nicknameFix: nickname,
    });
  };

  return (
    <div>
      <div>
        <input value={name} onChange={onNameChange} />
        <input value={nickname} onChange={onNicknameChange} />
        <button onClick={onClick}>Confirm</button>
      </div>
      <div>
        <div>
          <b>이름 : </b>
          {fix.nameFix}
        </div>
        <div>
          <b>닉네임 : </b>
          {fix.nicknameFix}
        </div>
      </div>
    </div>
  );
};

export default Info;
