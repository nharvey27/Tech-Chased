"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateRegister = void 0;
const validateRegister = (options) => {
    if (options.username.includes("@")) {
        return [
            {
                field: "username",
                message: "length must be greater than 2",
            },
        ];
    }
    if (options.password.length <= 2) {
        return [
            {
                field: "password",
                message: "length must be greater than 2",
            },
        ];
    }
    if (options.password.includes("@")) {
        return [
            {
                field: "username",
                message: "can not include an @",
            },
        ];
    }
    return null;
};
exports.validateRegister = validateRegister;
//# sourceMappingURL=validateRegister.js.map