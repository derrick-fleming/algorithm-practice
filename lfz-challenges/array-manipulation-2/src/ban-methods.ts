/* exported banMethods */

export default function banMethods(fn: any, method1?: string, method2?: string, method3?: string) {
  var methods = Array.prototype.slice.call(arguments, 1);
  var banned = new RegExp(methods.map(function (method) {
    return '\\.' + method;
  }).join('|'), 'g');
  if (banned.test(fn.toString())) {
    throw new Error(`The following methods are banned for this problem: ${methods.join(', ')}`);
  }
}
