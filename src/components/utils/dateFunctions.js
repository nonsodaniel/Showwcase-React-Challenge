
export const convertMonthYear = (date_) => {
    let newDate = new Date(date_).toLocaleString('en-IN', { month: 'long', year: 'numeric' })
    return newDate
}
