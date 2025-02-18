function calculateSchoolDays() {
    const today = new Date();
    const endDate = new Date('2025-05-31');
    // List specific holidays that affect school days
    const holidays = [
        new Date('2025-04-18'), // Good Friday
        new Date('2025-04-21'), // Easter Monday
        new Date('2025-05-01'), // May Day
        new Date('2025-05-29') // Ascension Day
    ];

    // Adding the range for the Winter break
    const winterStart = new Date('2025-02-24');
    const winterEnd = new Date('2025-03-02'); // Winter break ends on Sunday

    let totalDays = 0;
    let currentDate = new Date(today.getFullYear(), today.getMonth(), today.getDate());

    while (currentDate <= endDate) {
        const isWeekend = currentDate.getDay() === 0 || currentDate.getDay() === 6;
        const isWinterBreak = currentDate >= winterStart && currentDate <= winterEnd;
        const isHoliday = holidays.some(holiday => currentDate.toDateString() === holiday.toDateString());

        if (!isWeekend && !isHoliday && !isWinterBreak) {
            totalDays++;
        }

        currentDate.setDate(currentDate.getDate() + 1);
    }

    document.getElementById('daysLeft').innerText = `Total School Days Remaining: ${totalDays}`;
}

window.onload = calculateSchoolDays;
