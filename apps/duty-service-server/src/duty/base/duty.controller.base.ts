/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { DutyService } from "../duty.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { DutyCreateInput } from "./DutyCreateInput";
import { Duty } from "./Duty";
import { DutyFindManyArgs } from "./DutyFindManyArgs";
import { DutyWhereUniqueInput } from "./DutyWhereUniqueInput";
import { DutyUpdateInput } from "./DutyUpdateInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class DutyControllerBase {
  constructor(
    protected readonly service: DutyService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Duty })
  @nestAccessControl.UseRoles({
    resource: "Duty",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async createDuty(@common.Body() data: DutyCreateInput): Promise<Duty> {
    return await this.service.createDuty({
      data: data,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        duration: true,
        dateTime: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [Duty] })
  @ApiNestedQuery(DutyFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Duty",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async duties(@common.Req() request: Request): Promise<Duty[]> {
    const args = plainToClass(DutyFindManyArgs, request.query);
    return this.service.duties({
      ...args,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        duration: true,
        dateTime: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Duty })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Duty",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async duty(
    @common.Param() params: DutyWhereUniqueInput
  ): Promise<Duty | null> {
    const result = await this.service.duty({
      where: params,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        duration: true,
        dateTime: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Duty })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Duty",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async updateDuty(
    @common.Param() params: DutyWhereUniqueInput,
    @common.Body() data: DutyUpdateInput
  ): Promise<Duty | null> {
    try {
      return await this.service.updateDuty({
        where: params,
        data: data,
        select: {
          id: true,
          createdAt: true,
          updatedAt: true,
          duration: true,
          dateTime: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Duty })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Duty",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteDuty(
    @common.Param() params: DutyWhereUniqueInput
  ): Promise<Duty | null> {
    try {
      return await this.service.deleteDuty({
        where: params,
        select: {
          id: true,
          createdAt: true,
          updatedAt: true,
          duration: true,
          dateTime: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}
