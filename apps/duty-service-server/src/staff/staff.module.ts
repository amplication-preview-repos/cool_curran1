import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { StaffModuleBase } from "./base/staff.module.base";
import { StaffService } from "./staff.service";
import { StaffController } from "./staff.controller";
import { StaffResolver } from "./staff.resolver";

@Module({
  imports: [StaffModuleBase, forwardRef(() => AuthModule)],
  controllers: [StaffController],
  providers: [StaffService, StaffResolver],
  exports: [StaffService],
})
export class StaffModule {}
