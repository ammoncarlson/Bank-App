"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function displayClassName(target) {
    //console.log(`class name: ${target.ame}`);
}
exports.displayClassName = displayClassName;
function displayClassNameWithPurpose(purpose) {
    return (target) => {
        // console.log(`class name: ${target.name}, purpose: ${purpose}`)
    };
}
exports.displayClassNameWithPurpose = displayClassNameWithPurpose;
//# sourceMappingURL=decorators.js.map