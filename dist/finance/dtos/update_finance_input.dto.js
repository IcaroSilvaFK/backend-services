"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateFinance = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_finance_input_dto_1 = require("./create_finance_input.dto");
class UpdateFinance extends (0, mapped_types_1.PartialType)(create_finance_input_dto_1.CreateFinanceInput) {
}
exports.UpdateFinance = UpdateFinance;
//# sourceMappingURL=update_finance_input.dto.js.map