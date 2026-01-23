1function daysBetweenDates(date1: string, date2: string): number {
2    const d1 = new Date(date1);
3    const d2 = new Date(date2);
4    const dayInMilliseconds = 24 * 60 * 60 * 1000;
5
6    return Math.ceil(Math.abs(+d1 - +d2)) / dayInMilliseconds;
7};