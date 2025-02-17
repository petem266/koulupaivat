function calculateSchoolDays() {
    const startDate = new Date('2025-02-17');
    const endDate = new Date('2025-05-31');
    const holidays = [
        { start: new Date('2025-02-24'), end: new Date('2025-03-02') },
        { start: new Date('2025-04-17'), end: new Date('2025-04-21') },
        new Date('2025-05-01'),
        new Date('2025-05-29')
    ];

    let totalDays = 0;
    let currentDate = new Date(startDate);

    while (currentDate <= endDate) {
        const isWeekend = currentDate.getDay() === 0 || currentDate.getDay() === 6;
        const isHoliday = holidays.some(holiday => {
            if (holiday instanceof Date) {
                return currentDate.getTime() === holiday.getTime();
            }
            return currentDate >= holiday.start && currentDate <= holiday.end;
        });

        if (!isWeekend && !isHoliday) {
            totalDays++;
        }

        currentDate.setDate(currentDate.getDate() + 1);
    }

    document.getElementById('daysLeft').innerText = `Total School Days Remaining: ${totalDays}`;
}

window.onload = calculateSchoolDays;
