console.clear();
const dayStart = "07:30";
const dayEnd = "17:45";

function scheduleMeeting(startTime, durationMinutes) {
    const dayStartHour = parseInt(dayStart.split(":", 1)[0], 10);
    const dayStartMinute = parseInt(dayStart.split(":", 2)[1], 10);
    const dayEndHour = parseInt(dayEnd.split(":", 1)[0], 10);
    const dayEndMinute = parseInt(dayEnd.split(":", 2)[1], 10);
    const startHour = parseInt(startTime.split(":", 1)[0], 10);
    const startMinute = parseInt(startTime.split(":", 2)[1], 10);
    let endHour = startHour + Math.floor(durationMinutes / 60);
    let endMinute = startMinute + (durationMinutes % 60);

    if (endMinute === 60) {
        endMinute = 0;
        endHour++;
    }

    if (startHour < dayStartHour) {
        return false;
    }
    if (startHour > dayEndHour) {
        return false;
    }
    if (startHour === dayStartHour && startMinute < dayStartMinute) {
        return false;
    }
    if (startHour === dayEndHour && startMinute > dayEndMinute) {
        return false;
    }

    if (endHour > dayEndHour || endHour < dayStartHour) {
        return false;
    }
    if (endHour === dayEndHour && endMinute > dayEndMinute) {
        return false;
    }

    if (endHour === dayStartHour && endMinute < dayStartMinute) {
        return false;
    }

    return true;
}

console.log(scheduleMeeting("7:00", 15)); // false
console.log(scheduleMeeting("07:15", 30)); // false
console.log(scheduleMeeting("7:30", 30)); // true
console.log(scheduleMeeting("11:30", 60)); // true
console.log(scheduleMeeting("17:00", 45)); // true
console.log(scheduleMeeting("17:30", 30)); // false
console.log(scheduleMeeting("18:00", 15)); // false
