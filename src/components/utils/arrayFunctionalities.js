export function noRepeat() {
    var args = arguments, c = [], i = 0, l = args.length;
    while (i < l) {
        args[i++].map(function (e) {
            c.indexOf(e) < 0 && c.push(e);
        });
    }
    return c;
}