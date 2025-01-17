import { useState, useEffect } from "react";

const App = () => {
  const [theme, setTheme] = useState(() => {
    if(window.matchMedia('(prefers-color-scheme: dark').matches){
      return 'dark'
    }

    return 'light'
  });

  useEffect(() => {
    if(theme === 'dark'){
      document.querySelector('html').classList.add('dark');
    }else{
      document.querySelector('html').classList.remove('dark');
    }
  }, [theme])

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark');
    const handleChange = (e) => {
      setTheme(e.matches ? 'dark' : 'light');
    }

    mediaQuery.addEventListener("change", handleChange);

    return () => {
      mediaQuery.removeEventListener("change", handleChange)
    };
  }, [])

  const handleChangeTheme = () => {
    console.log("change");
    setTheme( theme === 'light' ? 'dark' : 'light');
  }
  return(
    <>
      <div className="h-screen flex justify-center flex-col items-center dark:bg-slate-900 dark:text-white">
        <p className="mb-2 text-xl">Hola Mundo!</p>
        <button className="bg-slate-200 px-4 py-2 rounded hover:bg-slate-300 dark:text-white dark:bg-slate-700 dark:hover:bg-slate-800" onClick={handleChangeTheme}>Change Theme</button>
      </div>
    </>
  )
}

export default App;