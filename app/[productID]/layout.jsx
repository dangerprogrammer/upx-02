export async function generateMetadata({ params: { productID } }) {
    return {
        title: productID
    };
};

function RootLayout({ children }) {
    return <>
        { children }
    </>
};
  
export default RootLayout;