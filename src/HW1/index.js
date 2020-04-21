function homework() {
    const bread = 15.678;
    const biscuit = 90.2345;
    const candy = 123.965;
    let sumCommodity = (bread+biscuit+candy);
    let maxSumCommodity = Math.ceil(sumCommodity/100)*100;
    return ('Выведите сумму товаров округленную до сотен. (Например если получилось 260, то выведите 300)-' +maxSumCommodity);;
}
let homework1 = homework();
export default homework1;