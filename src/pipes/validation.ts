import { PipeTransform, ArgumentMetadata, BadRequestException, HttpStatus, Injectable } from '@nestjs/common';
import { validate, ValidatorOptions } from 'class-validator';
import { plainToClass } from 'class-transformer';
import { HttpException } from "@nestjs/common/exceptions/http.exception";

const validatorOptions: ValidatorOptions = {
    forbidUnknownValues: true,
    forbidNonWhitelisted: true,
    whitelist: true,
}
@Injectable()
export class ValidationPipe implements PipeTransform<any> {
    async transform(value, metadata: ArgumentMetadata) {

        if (!value) {
            throw new BadRequestException('No data submitted');
        }

        const { metatype } = metadata;

        if (!metatype || !this.toValidate(metatype)) {
            return value;
        }
        const object = plainToClass(metatype, value);
        const errors = await validate(object, validatorOptions);
        if (errors.length > 0) {
            throw new HttpException({ message: 'Input data validation failed', errors: this.buildError(errors), rawErrors: errors }, HttpStatus.BAD_REQUEST);
        }
        return value;
    }

    private buildError(errors) {
        const result = {};
        errors.forEach(el => {
            let prop = el.property;
            Object.entries(el.constraints).forEach(constraint => {
                result[prop + constraint[0]] = `${constraint[1]}`;
            });
        });
        return result;
    }

    private toValidate(metatype): boolean {
        const types = [String, Boolean, Number, Array, Object];
        return !types.find((type) => metatype === type);
    }
}
