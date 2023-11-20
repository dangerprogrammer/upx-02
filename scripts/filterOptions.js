const filterOptions = {
    'none': () => !0,
    'price-under-200': ({product: {price}}) => price < 200,
    'price-upper-200': ({product: {price}}) => price > 200,
    'price-upper-400': ({product: {price}}) => price > 400,
    'phone': () => !0,
    'desktop': () => !0,
};

export default filterOptions;