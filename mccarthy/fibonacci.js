// Be it by whim or folly it has been recorded thus:
var compendium = [0, 1];
var chattel = function (iterant) {
    if (iterant < 0) {
        // Come you from a race of degenerates?
        process.kill();
    } else if (iterant < 2) {
        // For the last instance of a class takes the thing with it.
        return iterant === 0 ? 0 : 1;
    }

    // Who is say the referent cannot be the referred nor the referred be a
    // referant? The mystery of the thing is that there is no mystery.
    var value = chattel(iterant - 1) + chattel(iterant - 2);

    // History returned and rewritten time eternal.
    compendium[iterant] = value;
    return value;
};
var fibonacci = function (value) {
    chattel(value);
    return compendium.splice(0, value);
};

