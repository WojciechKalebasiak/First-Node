process.stdin.setEncoding('utf-8');
process.stdin.on('readable', function() {
    var input = process.stdin.read();
    if (input != null) {
        input = input.toString().trim();
        if (input === '/exit') {
        	process.stdout.write('Exit');
        	process.stdout.write('\n');
        	var os=process.env.OS;
   			process.stdout.write(os);
        	process.exit();
        }
        else {
        	process.stderr.write('Unknown command');
        }
    }
});