import { useEffect, useState } from "react";
import { getTypes } from "../../utils/api";
import styles from "./FilteredOptions.module.scss";

export default function FilterOptions({ setCurrentType }) {
  const [types, setTypes] = useState([]);

  function handleChange(event) {
    setCurrentType(event.target.value);
  }
  useEffect(() => {
    getTypes().then((res) => {
      setTypes(res.results);
    });
  }, []);
  return (
    <select id="typeSelector" onChange={handleChange}>
      <option value="all">All</option>
      {types.map((type, index) => {
        return (
          <option key={index} value={type.name}>
            {type.name}
          </option>
        );
      })}
    </select>
  );
}
