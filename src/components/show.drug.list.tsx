import React from "react";

interface Drug {
  cn: string;
  description: string;
  Dto: string;
  laboratory: string;
  price: string;
  iva: string;
}

export function ShowDrugList(props) {
  const [list] = props;
  return (
    <div>
      {list.map((drug: Drug) => {
        <span>{drug.cn}</span>;
        <span>{drug.description}</span>;
        <span>{drug.Dto}</span>;
        <span>{drug.laboratory}</span>;
        <span>{drug.price}</span>;
        <span>{drug.iva}</span>;
      })}
    </div>
  );
}
//   );
// }
