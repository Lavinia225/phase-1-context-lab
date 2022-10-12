/* Your Code Here */

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

function createEmployeeRecord(array){
    return {
        "firstName": array[0],
        "familyName": array[1],
        "title": array[2],
        "payPerHour": array[3],
        "timeInEvents": [],
        "timeOutEvents": []
    }
}

function createEmployeeRecords(nestedArray){
    return nestedArray.map(employee => createEmployeeRecord(employee))
}

function createTimeInEvent(date){
    this.timeInEvents.push({
        "type": "TimeIn",
        "hour": parseInt(date.substring(11)),
        "date": date.substring(0, 10)
    })
    return this
}

function createTimeOutEvent(date){
    this.timeOutEvents.push({
        "type": "TimeOut",
        "hour": parseInt(date.substring(11)),
        "date": date.substring(0,10)
    })
    return this
}

function hoursWorkedOnDate(date){
    const timeIn = this.timeInEvents.find(day => day.date === date).hour
    const timeOut = this.timeOutEvents.find(day => day.date === date).hour
    return (timeOut - timeIn) / 100
}

function wagesEarnedOnDate(date){
    const hours = hoursWorkedOnDate.call(this, date)
    return this.payPerHour * hours
}


const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

function findEmployeeByFirstName(srcArray, firstName){
    let employee = srcArray.find(record =>{
        if(record.firstName === firstName){
            return true
        }
    })

    return employee
}

function calculatePayroll(employeeRoster){
    const totalWageArray = employeeRoster.map(employee =>allWagesFor.call(employee))

    function counter(total, value){
        return total += value
    }

    return totalWageArray.reduce(counter, 0)
}