import {applyDecorators, SetMetadata, UseGuards} from "@nestjs/common";
import { JwtAuthGuard } from "./jwt-auth.guard";
import { RolesGuard } from "./roles.guard";

export const ROLES_KEY = 'role';

export const Roles = (...roles: string[]) => {
    return applyDecorators(
        SetMetadata(ROLES_KEY, roles),
        UseGuards(RolesGuard)
    )
} 