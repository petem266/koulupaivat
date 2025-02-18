function calculateSchoolDays() {
    const today = new Date(); // Start counting from the current date when the page is opened
    const endDate = new Date('2025-05-31');

    // List of holidays (only school days affected)
    const holidays = [
        new Date('2025-02-24'), new Date('2025-02-25'), new Date('2025-02-26'), 
        new Date('2025-02-27'), new Date('2025-02-28'), // Winter break (5 school days)
        new Date('2025-04-18'), // Good Friday
        new Date('2025-04-21'), // Easter Monday
        new Date('2025-05-01'), // May Day
        new Date('2025-05-29')  // Ascension Day
    ];

    let totalDays = 0;
    let currentDate = new Date(today.getFullYear(), today.getMonth(), today.getDate());

    while (currentDate <= endDate) {
        const dayOfWeek = currentDate.getDay();
        const isWeekend = (dayOfWeek === 0 || dayOfWeek === 6) && !(currentDate.toDateString() === 'Sat May 31 2025');
        const isHoliday = holidays.some(holiday => currentDate.toDateString() === holiday.toDateString());

        if (!isWeekend && !isHoliday) {
            totalDays++;
        }

        currentDate.setDate(currentDate.getDate() + 1);
    }

    document.getElementById('daysLeft').innerText = `Total School Days Remaining: ${totalDays}`;
}

window.onload = calculateSchoolDays;
