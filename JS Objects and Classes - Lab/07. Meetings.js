function meetings(input) {
    let meetingCalendar = {};
    for (const line of input) {
        let [day, person] = line.split(' ');
        if (!meetingCalendar.hasOwnProperty(day)) {
            meetingCalendar[day] = person;
            console.log(`Scheduled for ${day}`)
        } else {
            console.log(`Conflict on ${day}!`)
        }
    }
    for (let [key, value] of Object.entries(meetingCalendar)) {
        console.log(`${key} -> ${value}`)
    }
}

meetings(
    ['Monday Peter',
    'Wednesday Bill',
    'Monday Tim',
    'Friday Tim']
)