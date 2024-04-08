export type Address = {
    id: string,
    address: string,
    city: string,
    schedule: Schedule[],
    stationType: string,
    stationName: string,
    gps: string,
    googleMapSrc: string
}

export type ScheduleTime = {
    fromH: string,
    fromM: string,
    toH: string,
    toM: string
}

export type Schedule = {
    days: string,
    description: string | ScheduleTime
}