export default function dateTimeFormatter (timeStamp) {
    const dateTime = new Date(timeStamp);
    const date = dateTime.getDate();
    const month = dateTime.toDateString().split(' ')[1];
    const year = dateTime.getFullYear();
    const time = dateTime.toLocaleTimeString();
    return date+' '+month+' '+year+" "+time;
}

