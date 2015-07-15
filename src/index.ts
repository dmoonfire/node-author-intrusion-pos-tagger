/// <reference path="./refs"/>

import natural = require("pos");
import types = require("node-author-intrusion");

interface PosTaggerOptions {
}

export function process(args: types.AnalysisArguments) {
    // Figure out the options we need for this plugin.
    var options: PosTaggerOptions = args.analysis.options;
}
