function pick(source: {}, keys: string[]) {
  const pickObject = {};
  for (const key in source) {
    if (keys.includes(key) && source[key] !== undefined) {
      pickObject[key] = source[key];
    }
  }
  return pickObject;
}

pick({ foo: 1, bar: 2, baz: 3 }, ['foo', 'baz']);
