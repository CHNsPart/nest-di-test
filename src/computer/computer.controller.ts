import { Controller, Get } from '@nestjs/common';
import { DiskService } from './../disk/disk.service';
import { CpuService } from './../cpu/cpu.service';

@Controller('computer')
export class ComputerController {
    constructor(
        private cpuService: CpuService,
        private diskService: DiskService
    ) {}

    @Get()
    run() {
        return [
            "cpuService --> compute() = ",this.cpuService.compute(1, 2),
            "diskService --> getData() = " ,this.diskService.getData()
        ]
    }
}
