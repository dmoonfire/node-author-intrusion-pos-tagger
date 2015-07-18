declare module "node-author-intrusion-pos-tagger" {
    import types = require("node-author-intrusion");
    export function process(args: types.AnalysisArguments): void;
}
