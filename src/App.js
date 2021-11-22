import { createContext,useContext } from 'react';
import './App.css';
import ComA from './Components/Context/ComA';
const fname=createContext();
const lname=createContext();
function App() {
  return (
    <>
    <fname.Provider value={'Divyarajsinh'}>
      <lname.Provider value={"Rana"}>
      <ComA />
      </lname.Provider>
    </fname.Provider>
    </>
  );
}

export default App;
export {fname,lname};

// Second example of useContext
// const themes = {
//   light: {
//     foreground: "#000000",
//     background: "#eeeeee"
//   },
//   dark: {
//     foreground: "#ffffff",
//     background: "#222222"
//   }
// };

// const ThemeContext = createContext(themes.light);

// function App() {
//   return (
//     <ThemeContext.Provider value={themes.dark}>
//       <Toolbar />
//     </ThemeContext.Provider>
//   );
// }

// function Toolbar(props) {
//   return (
//     <div>
//       <ThemedButton />
//     </div>
//   );
// }

// function ThemedButton() {
//   const theme = useContext(ThemeContext);
//   return (
//     <button style={{ background: theme.background, color: theme.foreground }}>
//       I am styled by theme context!
//     </button>
//   );
// }
// export default App;