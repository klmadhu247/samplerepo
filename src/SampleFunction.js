import React, { useState } from "react";

function NameInfo(props) {
  const [name, setName] = useState("madhusudan");
  const [age, setAge] = useState(33);

  return (
    <div>
      {name} {age}
     <div>FavFood is: {props.favFood}</div>
    </div>
  );
}

export default NameInfo;
