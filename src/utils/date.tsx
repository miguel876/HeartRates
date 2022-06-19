export const dateTimeToDate = (dateTime: string) => {
    const date = new Date(dateTime)
    const day = date.getDate()
    const month = date.getMonth() + 1 < 9 ? `0${date.getMonth() + 1}` : date.getMonth() + 1

    return `${day}/${month}`

}