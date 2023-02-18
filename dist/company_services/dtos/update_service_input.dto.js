"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateServiceInput = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_service_input_dto_1 = require("./create_service_input.dto");
class UpdateServiceInput extends (0, mapped_types_1.PartialType)(create_service_input_dto_1.CreateServiceInput) {
}
exports.UpdateServiceInput = UpdateServiceInput;
//# sourceMappingURL=update_service_input.dto.js.map