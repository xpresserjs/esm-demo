/**
 * Start a based nodejs http server.
 */

import { createServer } from "http";

var server = createServer(function (req, res) {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Hello World\n");
});

server.listen(8080);

class Framework {
    useEngine(engine) {
        return new engine(this);
    }
}

class BaseEngine {
    constructor($) {
        this.$ = $;
    }

    otherMethods() {
        // can access this.$
    }
}

class Router extends BaseEngine {
    constructor(app) {
        super(app);
    }

    get(path, fn) {
        // do something
        // can access this.$
        return this;
    }

    // ... other router methods
}

const $ = new Framework();
const router = $.useEngine(Router);
