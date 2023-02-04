
import { useState, useMemo, useEffect, useReducer, useRef } from "react";
import debouce from "lodash.debounce";
import "./searchBar.scss"


const SearchBar = ({ setSelectedCat, selectedcat, allcat }) => {
    const [searchTerm, setSearchTerm] = useState("");
    const [isShowResult,setResult] = useState(false);
    const ref = useRef("");
    let listToDisplay = allcat;

    const handleChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const renderFruitList = () => {
        return listToDisplay.map((cat, i) => <div className="para" key={i} onClick={() => {setSelectedCat(cat);setResult(false)}}>{cat}</div>);
    };

    if (searchTerm !== "") {
        listToDisplay = allcat.filter((cat) => {
            return cat.includes(searchTerm);
        });
    }

    const debouncedResults = useMemo(() => {
        return debouce(handleChange, 300);
    }, []);

    useEffect(() => {
        return () => {
            debouncedResults.cancel();
        };
    });

    useEffect(() => {
        function handleClickOutside(event) {
          if (ref.current && !ref.current.contains(event.target)) {
            setResult(false)
          }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
          document.removeEventListener("mousedown", handleClickOutside);
        };
      }, [ref]);

    return (
        <div className="search-box">
            <input type="text" placeholder="search catagories" className="search-conatiner" onChange={debouncedResults} onClick={()=>setResult(true)} />
            {isShowResult && <div className="results" ref={ref}>
                {renderFruitList()}
            </div>}
        </div>
    );
}

export default SearchBar
