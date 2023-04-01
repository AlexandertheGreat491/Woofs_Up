const SearchBar = ({keyword, onChange
}) => {
    const BarStyle = {width: "20rem", padding:"0.5rem"};
    return (
        <input
        style={BarStyle}
        key = "search-bar"
        value={keyword}
        placeholder={"search hotel"}
        onChange={(e) => onChange(e.target.value)} 
        />
    )
}

export default SearchBar;