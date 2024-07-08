import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { DutyModuleBase } from "./base/duty.module.base";
import { DutyService } from "./duty.service";
import { DutyController } from "./duty.controller";
import { DutyResolver } from "./duty.resolver";

@Module({
  imports: [DutyModuleBase, forwardRef(() => AuthModule)],
  controllers: [DutyController],
  providers: [DutyService, DutyResolver],
  exports: [DutyService],
})
export class DutyModule {}
