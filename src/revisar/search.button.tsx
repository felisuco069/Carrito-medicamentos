// import React from "react";

// import { getDrugList } from "./api";
// import { ShowDrugList } from "./show.drug.list";

// function FilterFunction() {
//   const value1 = document.getElementById("input-Medicamentos").value;
//   const value2 = document.getElementById("input-cn").value;

//   getDrugList().then((datas) => {
//     const result = datas.filter(
//       (data) => data.description.includes(value1) && data.cn === value2
//     );
//     return ShowDrugList(result);
//   });
// // }

// export const SearchButton = () => {
//   return (
//     <button onClick={FilterFunction} id="searchButton">
//       Search
//     </button>
//   );
// };
