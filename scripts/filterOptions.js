const filterOptions = {
    'none': () => !0,
    'price-under-200': ({product: {price}}) => price < 200,
    'price-upper-200': ({product: {price}}) => price > 200,
    'price-upper-400': ({product: {price}}) => price > 400,
    'phone': ({keywords}) => keywords.find(key => key == 'phone' || key == 'notebook'),
    'desktop': ({keywords}) => keywords.find(key => key == 'desktop' || key == 'tv'),
};

export default filterOptions;