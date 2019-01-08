export const formatString = (o) => {
  const codV = encodeURI(JSON.stringify(o));
  const codK = encodeURI(ENVAR_UAI);
  let list = [], indx = 0;
  for (let i = 0; i < codV.length; i++) {
    if (indx + 1 === codK.length) { indx = 0 } else { indx++ }
    list.push(codV.charCodeAt(i) - codK.charCodeAt(indx));
  }
  return list.join();
}