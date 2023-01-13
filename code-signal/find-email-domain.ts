function findEmailDomain(address: string): string {
  const atSign = address.lastIndexOf('@');
  return address.slice(atSign + 1);
}

findEmailDomain("\" \"@xample.org");
