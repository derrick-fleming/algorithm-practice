function variableName(name: string) {
  if (/\D/g.test(name[0]) === false) {
    return false;
  }
  if (/[!@#$%^&*()[\].\-\\ ]/g.test(name)) {
    return false;
  }
  return true;
}

variableName('var_1__Int"');
