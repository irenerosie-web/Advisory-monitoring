import { Module } from '@nestjs/common';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { PrismaModule } from './prisma/prisma.module.js';
import { ProgramsModule } from './programs/programs.module.js';
import { StudentsModule } from './students/students.module.js';
import { RemarksController } from './remarks/remarks.controller';
import { RemarksService } from './remarks/remarks.service';
import { RemarksModule } from './remarks/remarks.module';

@Module({
  imports: [PrismaModule, ProgramsModule, StudentsModule, RemarksModule],
  controllers: [AppController, RemarksController],
  providers: [AppService, RemarksService],
})
export class AppModule {}