function realCash(cash) {
    return cash.toLocaleString('pt-br', { style: 'currency', currency: 'BRL'})
};

export default realCash;