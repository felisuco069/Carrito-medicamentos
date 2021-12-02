import React from "react";
// import { SearchButton } from "./components/search.button";
// import { GetInputs } from "./components/input";
import { getDrugList } from "./components/api";

interface Drug {
  cn: number;
  description: string;
  discount: string;
  laboratory: string;
  referencePrice: string;
  tax: string;
  pvl: string;
  pvl_pvf: string;
}

export const App = () => {
  // const value1 = document.getElementById("input-Medicamentos").value;
  // const value2 = document.getElementById("input-cn").value;

  const [drugs, setDrugs] = React.useState([]);
  React.useEffect(() => {
    getDrugList().then((datas) => {
      setDrugs(datas);
    });
  }, []);

  return (
    <table>
      <thead>
        <tr>
          <th>CN</th>
          <th>Description</th>
          <th>Discount</th>
          <th>Laboratory</th>
          <th>Reference Price</th>
          <th>Tax</th>
          <th>PVL</th>
          <th>Discount on the PVL </th>
          <th>Unidades</th>
        </tr>
      </thead>
      <tbody>
        {drugs.map((drug: Drug) => (
          <tr key={drug.cn}>
            <td>
              <span>{drug.cn}</span>
            </td>
            <td>
              <span>{drug.description}</span>
            </td>
            <td>
              <span>{drug.discount}</span>
            </td>
            <td>
              <span>{drug.laboratory}</span>
            </td>
            <td>
              <span>{Number(drug.referencePrice).toFixed(2)} €</span>
            </td>
            <td>
              <span>{drug.tax}</span>
            </td>
            <td>
              <span>{Number(drug.pvl).toFixed(2)} €</span>
            </td>
            <td>
              <span>{drug.pvl_pvf}</span>
            </td>
            <td>
              <input type="number" />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
    // <>
    //   <GetInputs />
    //   <SearchButton />
    // </>
  );
};
