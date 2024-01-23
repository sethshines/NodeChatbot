exports.isServer = () => {
    let [,,,args] = process.argv;
    return args.split('=')[1] == 'true';
}