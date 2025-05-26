export default function useTheme(){
 let darkMode = localStorage.getItem("darkMode");

 //* check if dark mode is enabled
 //* if it's enabled, turn it off
 //*if it's disabled, turn it on

 const enableDarkMode = () => {
    //1. add the class dark in the localStorage
    document.body.classList.add('dark');
    //2. update darkMode in the localStorage
    localStorage.setItem("darkMode", "enabled");
 };

 const disableDarkMode = () => {
    //1. remove the class dark to the body
    document.body.classList.remove("dark");
    //2. update darkMode in the localStorage
    localStorage.setItem("darkMode", null);
 }

 if(darkMode === "enabled") {
    enableDarkMode();
 }

 function swapTheme() {
    darkMode = localStorage.getItem("darkMode");
    if (darkMode !== "enabled") {
        enableDarkMode()
    }
    else{
        disableDarkMode()
    }
 }

 return {darkMode, swapTheme};
}