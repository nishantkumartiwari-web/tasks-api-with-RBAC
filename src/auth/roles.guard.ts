
import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Role } from './role.enum.js';
import { ROLES_KEY } from './roles.decorator.js';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const requiredRoles = this.reflector.getAllAndOverride<Role[]>(ROLES_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);

    //console.log("required roles: ", requiredRoles)
    if (!requiredRoles) {
      return true;
    }

    // //console.log("context: ", context.switchToHttp().getRequest());

    const { body } = context.switchToHttp().getRequest();
    //console.log("user provided info: ", body);
    return requiredRoles.some((role) => body.role===(role));
  }
}
