/// <reference path="./refs"/>

import pos = require("pos");
import types = require("node-author-intrusion");

interface PosTaggerOptions {
}

export function process(args: types.AnalysisArguments) {
    // Figure out the options we need for this plugin.
    var options: PosTaggerOptions = args.analysis.options;

    // Go through the lines, processing each one in turn.
    var posTokens = [];

    for (var line of args.content.lines)
    {
        // The POS tagger needs only a list of strings.
        for (var token of line.tokens)
        {
            posTokens.push(token.normalized);
        }

        // Tag the extracted words.
        var tagger = new pos.Tagger();
        var taggedTokens = tagger.tag(posTokens);

        // Set the POS tokens back into the tokens.
        for (var i in line.tokens) {
            line.tokens[i].partOfSpeech = taggedTokens[i][1];
        }
    }

    // Indicate that we tagged.
    args.content.processed.push("pos-tagger");
}
