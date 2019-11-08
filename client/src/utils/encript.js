export const encryptPassword = (pass) => {
  let code = '•';
  let cont = '';
  if (pass) {
    for (let i = 0; i < pass.length; i++) {
      cont += code
    }
    return cont
  }
}