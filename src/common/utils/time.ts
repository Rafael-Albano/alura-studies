export function timeForSeconds(time: string) {
    const [hours = '0', minutes = '0', seconds = '0'] = time.split(":");

    const parseHoursForSeconds = Number(hours) * 3600;
    const parseMinutesForSeconds = Number(minutes) * 60;
    return parseHoursForSeconds + parseMinutesForSeconds + Number(seconds);
}