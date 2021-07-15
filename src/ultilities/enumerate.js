export {
  enumerate
};

// Examples: 
//   enumerate(finProdCard, finProdUnrankI, [4n,3n,5n])
//   enumerate(
//      (p) => finFunCard(p[0], p[1]),
//      (p, r) => finFunUnrankI(p[0], p[1], r),
//      [9n, 5n])
function enumerate(card, unrankFun, p) {
  return [...Array(Number(card(p))).keys()].map((r) => unrankFun(p, BigInt(r)))
}
