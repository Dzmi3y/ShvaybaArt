export type Address = {
    id: string,
    address: string,
    city: string,
    schedule: Schedule[],
    stationType: string,
    stationName: string,
    gps: string
}

export type scheduleTime = {
    fromH: string,
    fromM: string,
    toH: string,
    toM: string
}

export type Schedule = {
    days: string,
    description: string | scheduleTime
}