export default function getStartDate(month){
    let CurrentDate = new Date();
    CurrentDate.setMonth(CurrentDate.getMonth() - month);
    return CurrentDate;
}