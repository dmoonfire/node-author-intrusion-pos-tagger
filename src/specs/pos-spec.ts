/// <reference path="../../typings/node/node.d.ts"/>
/// <reference path="../../typings/jasmine/jasmine.d.ts"/>
/// <reference path="../../node_modules/node-author-intrusion-split/package.d.ts"/>
/// <reference path="../refs.ts"/>
/// <reference path="../index.ts"/>

import pos = require("pos");
import types = require("node-author-intrusion");
import split = require("node-author-intrusion-split");
import plugin = require("../index");

describe("lines", function() {
    it("tag simple sentence", function() {
        // Create the document with the line.
        var line = new types.Line(
            new types.Location("a", 1),
            "I like sharp cheese.");
        var content = new types.Content();
        content.lines.push(line);

        // Split the line into tokens.
        var args = new types.AnalysisArguments();
        args.content = content;
        args.analysis = new types.Analysis;
        args.analysis.options = {};

        split.process(args);

        // Tag the tokens.
        plugin.process(args);

        // Verify the results.
        expect(line.tokens[0].partOfSpeech).toBe("NN");
        expect(line.tokens[1].partOfSpeech).toBe("IN");
        expect(line.tokens[2].partOfSpeech).toBe("JJ");
        expect(line.tokens[3].partOfSpeech).toBe("NN");
        expect(line.tokens[4].partOfSpeech).toBe(".");
    });

    it("tag double sentence", function() {
        // Create the document with the line.
        var line = new types.Line(
            new types.Location("a", 1),
            "I like sharp cheese. It makes me happy.");
        var content = new types.Content();
        content.lines.push(line);

        // Split the line into tokens.
        var args = new types.AnalysisArguments();
        args.content = content;
        args.analysis = new types.Analysis;
        args.analysis.options = {};

        split.process(args);

        // Tag the tokens.
        plugin.process(args);

        // Verify the results.
        expect(line.tokens[0].partOfSpeech).toBe("NN");
        expect(line.tokens[1].partOfSpeech).toBe("IN");
        expect(line.tokens[2].partOfSpeech).toBe("JJ");
        expect(line.tokens[3].partOfSpeech).toBe("NN");
        expect(line.tokens[4].partOfSpeech).toBe("CD");
        expect(line.tokens[5].partOfSpeech).toBe("PRP");
        expect(line.tokens[6].partOfSpeech).toBe("VBZ");
        expect(line.tokens[7].partOfSpeech).toBe("PRP");
        expect(line.tokens[8].partOfSpeech).toBe("JJ");
        expect(line.tokens[9].partOfSpeech).toBe(".");
        expect(line.tokens[10]).toBe(undefined);
    });
});
