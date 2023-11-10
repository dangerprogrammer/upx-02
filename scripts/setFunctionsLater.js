import scrollCategories from './scrollCategories';

function setFunctionsLater({ userCategories }, { setLaterFunctions }) {
    setLaterFunctions(lFunctions => {
        console.log(lFunctions);
        const cloneFunctions = [...lFunctions];

        cloneFunctions.push(() => scrollCategories(!userCategories.length));

        return cloneFunctions;
    });
};

export default setFunctionsLater;