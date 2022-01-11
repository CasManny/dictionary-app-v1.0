import React from "react";
import "./header.css";
import TextField from "@mui/material/TextField";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import MenuItem from "@mui/material/MenuItem";
import categories from "../../data/categories";

const Header = ({ category, setCategory, word, setWord, setMeanings }) => {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#fff",
      },

      type: "dark",
      background: {
        default: "#fff",
        paper: "#fff",
      },
    },
  });

  const handleChange = (e) => {
      setCategory(e.target.value)
      setWord('')
      setMeanings([])

  }

  console.log(category)
  return (
    <div className="header">
      <span className="header__title">{word ? word : 'Word Hunt'}</span>
      <div className="header__inputs">
        <ThemeProvider theme={theme}>
          <TextField className='header__search' value={word} label="Search a Word" onChange={(e) => setWord(e.target.value)} />
          <TextField
          className='header__select'
            select
            label="Language"
            value={category}
            onChange={handleChange}
           
          >
            {categories.map((category) => (
              <MenuItem key={category.label} value={category.label}>
                {category.value}
              </MenuItem>
            ))}
          </TextField>
        </ThemeProvider>
      </div>
    </div>
  );
};

export default Header;
