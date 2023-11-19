import productsList from "@/components/context/productsList";

export function generateMetadata({ params: { productID } }) {
    try {
        const { product: { name: productName } } = productsList.find(({ product: {id} }) => id == productID);

        return {
            title: productName
        };
    } catch (error) {
        return {
            title: 'Erro'
        };
    };
};

function RootLayout({ children }) {
    return <>
        { children }
    </>
};
  
export default RootLayout;