import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { DutyService } from "./duty.service";
import { DutyControllerBase } from "./base/duty.controller.base";

@swagger.ApiTags("duties")
@common.Controller("duties")
export class DutyController extends DutyControllerBase {
  constructor(
    protected readonly service: DutyService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
