process.stdin.setEncoding('utf-8');
process.stdin.on('readable', function() {
    var input = process.stdin.read();
    if (input != null) {
        var command = input.toString().trim();
        switch (command) {
            case '/exit':
                {
                    console.log('Exit');
                    process.exit();
                    break;

                }
            case '/sayhello':
                {
                    console.log('Hello!');
                    break;
                }
            case '/version':
                {
                    console.log(process.version);
                    break;
                }
            case '/oslang':
                {
                    console.log(process.env.OS);
                    break;
                }
            default:
                {
                    console.log('Unknown command');
                }
        }

    }
});