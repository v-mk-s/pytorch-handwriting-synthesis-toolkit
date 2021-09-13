import { generateHandwriting, generateHandwritingWithPriming } from './utils';

onmessage = function(e) {
    const text = e.data[0];
    const bias = e.data[1];
    const primingSequence = e.data[2];
    const primingText = e.data[3];

    const onProgress = (progress, results) => {
        self.postMessage({event: "progressChanged", value: progress, results: results});
    };

    if (primingSequence.length > 0 && primingText.length > 0) {
        generateHandwritingWithPriming(primingSequence, primingText, text, bias, onProgress).then(results => {
            self.postMessage({event: "resultsReady", results: results});
        });
    } else {
        generateHandwriting(text, bias, onProgress).then(results => {
            self.postMessage({event: "resultsReady", results: results});
        });
    }
}

/*
export const startWorker = (text, bias) => {
    const onProgress = (progress, results) => {
        // eslint-disable-next-line
        self.postMessage({event: "progressChanged", value: progress, results: results});
    };
    generateHandwriting(text, bias, onProgress).then(results => {

        // eslint-disable-next-line
        self.postMessage({event: "resultsReady", results: results});
    });
};
*/