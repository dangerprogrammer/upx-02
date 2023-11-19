import productsList from "@/components/context/productsList";

export function generateMetadata({ params: { productID } }) {
    const { product: { name: productName } } = productsList.find(({ product: {id} }) => id == productID);

    return {
        title: productName
    };
};

function RootLayout({ children }) {
    return <>
        { children }
    </>
};
  
export default RootLayout;