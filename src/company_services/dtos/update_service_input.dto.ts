import { PartialType } from '@nestjs/mapped-types';
import {CreateServiceInput} from './create_service_input.dto'

export class UpdateServiceInput extends PartialType(CreateServiceInput){}