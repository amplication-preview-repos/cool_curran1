import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { DutyServiceBase } from "./base/duty.service.base";

@Injectable()
export class DutyService extends DutyServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
