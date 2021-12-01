import React from "react";
import { getInputPlaceholder } from "./api";

const Input = (props) => {
  const { id, text } = props;
  return <input type="text" id={id} placeholder={text} />;
};

export const GetInputs = () => {
  const [drugList, setDrugList] = React.useState([]);

  React.useEffect(() => {
    getInputPlaceholder().then((data) => setDrugList(data));
  }, []);
  return (
    <div id="inputContainer">
      {drugList.map((drug) => (
        <Input
          key={`${drug.placeholder}`}
          text={drug.placeholder}
          id={`input-${drug.placeholder}`}
        />
      ))}
    </div>
  );
};
