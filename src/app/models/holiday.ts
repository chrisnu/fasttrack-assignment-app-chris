export class Holiday {
    holidayId: number;
    holidayLabel: string;
    employeeId: string;
    startOfHoliday: string;
    endOfHoliday: string;
    status: 'DRAFT' | 'REQUESTED' | 'SCHEDULED' | 'ARCHIVED';

    constructor(data: Holiday) {
        if (!data) {
            this.holidayId = Date.now();
            this.employeeId = 'klm100000';
            this.holidayLabel = '';
            this.startOfHoliday = '';
            this.endOfHoliday = '';
            this.status = 'DRAFT';
        } else {
            this .holidayId = data.holidayId;
            this.holidayLabel = data.holidayLabel;
            this.employeeId = data.employeeId;
            this.startOfHoliday = data.startOfHoliday;
            this.endOfHoliday = data.endOfHoliday;
            this.status = data.status;
        }
    }

}
