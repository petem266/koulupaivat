function calculateSchoolDays() {
    const today = new Date();
    const endDate = new Date('2026-05-30');
    const holidays = [
        new Date('2026-02-23'), new Date('2026-02-24'), new Date('2026-02-25'), 
        new Date('2026-02-26'), new Date('2026-02-27'), // Winter break (5 school days)
        new Date('2026-04-02'), // Maundy Thursday
        new Date('2026-04-03'), // Good Friday
        new Date('2026-04-06'), // Easter Monday
        new Date('2026-05-01'), // May Day
        new Date('2026-05-14') // Ascension Day
    ];

    let totalDays = 0;
    let currentDate = new Date(today.getFullYear(), today.getMonth(), today.getDate());

    while (currentDate <= endDate) {
        const dayOfWeek = currentDate.getDay();
        const isWeekend = (dayOfWeek === 0 || (dayOfWeek === 6 && currentDate.toDateString() !== 'Sat May 30 2026'));
        const isHoliday = holidays.some(holiday => currentDate.toDateString() === holiday.toDateString());

        if (!isWeekend && !isHoliday) {
            totalDays++;
        }

        currentDate.setDate(currentDate.getDate() + 1);
    }

    document.getElementById('daysLeft').innerText = `Koulupäiviä jäljellä: ${totalDays}`;
}

window.onload = calculateSchoolDays;
