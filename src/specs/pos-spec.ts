/// <reference path="../../typings/node/node.d.ts"/>
/// <reference path="../../typings/jasmine/jasmine.d.ts"/>
/// <reference path="../../node_modules/node-author-intrusion-split/package.d.ts"/>
/// <reference path="../refs.ts"/>
/// <reference path="../index.ts"/>

import types = require("node-author-intrusion");
import split = require("node-author-intrusion-split");
import plugin = require("../index");

describe("default tokens", function() {
    it("tag simple sentence", function() {
        // Create the document with the line.
        var line = new types.Line(
            new types.Location("a", 1),
            "I like cheese.");
        var content = new types.Content();
        content.lines.push(line);

        // Split the line into tokens.
        var args = new types.AnalysisArguments();
        args.content = content;
        args.analysis = new types.Analysis;
        args.analysis.options = {};

        split.process(args);

        // Tag the tokens.
        plugin.process(args)
    });
});
