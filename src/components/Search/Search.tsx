import React, { HTMLInputTypeAttribute, InputHTMLAttributes, useState } from "react";
import styles from "./Search.module.scss";
import icon from "./img/search.svg";
import { FormatInputPathObject } from "path";

interface SearchProps {}

const Search = ({}: SearchProps) => {
  const [val, updateVal] = useState<string>();
  
  const changeText = (e: any) => {
    updateVal(e.target.value);
    // props.foo(e.target.value);
  };
  const clearText = function () {
    updateVal("");
    // props.foo("");
  };

  /*
    return (
        <form>
            <input type="text" value={val} onInput={changeText} placeholder="Поиск"/>
            <button className="search-btn" type="button">
                {val ? <img src={close} onClick={clearText}/> : <img src={icon}/>}
            </button>
        </form>
    )
  */
  return (
    <div className={styles.search}>
      <form>
        <input type="text" placeholder="Поиск" />
        <button className="search-btn" type="button">
          <img src={icon} />
        </button>
      </form>
    </div>
  );
};

export default Search;
