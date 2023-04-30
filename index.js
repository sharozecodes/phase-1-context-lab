/* Your Code Here */


function createEmployeeRecord(employeeData) {
    let employee = {
      firstName: employeeData[0],
      familyName: employeeData[1],
      title: employeeData[2],
      payPerHour: employeeData[3],
      timeInEvents: [],
      timeOutEvents: []
    };
    return employee;
  }

function createEmployeeRecords(employeeArray) {
    let employees = [];
    employeeArray.forEach(emp => employees.push(createEmployeeRecord(emp)));
    return employees;
  }


function createTimeInEvent(timeStamp) {
    const [date, hour] = timeStamp.split(" ");
  
    this.timeInEvents.push({
      type: "TimeIn",
      hour: parseInt(hour),
      date: date
    });
  
    return this;
  }

function createTimeOutEvent(timeStamp) {
    const [date, hour] = timeStamp.split(" ");
  
    this.timeOutEvents.push({
      type: "TimeOut",
      hour: parseInt(hour),
      date: date
    });
  
    return this;
  }

function hoursWorkedOnDate(date) {
    const timeIn = this.timeInEvents.find(e => e.date === date).hour;
    const timeOut = this.timeOutEvents.find(e => e.date === date).hour;
  
    return (timeOut - timeIn) / 100;
  }

function wagesEarnedOnDate(date) {
    const hoursWorked = hoursWorkedOnDate.call(this, date);
    const wages = hoursWorked * this.payPerHour;
    return wages;
  }

function allWagesFor() {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

function findEmployeeByFirstName(srcArray, firstName){

    return srcArray.find(employee => employee.firstName === firstName);

}

function calculatePayroll(employees) {
    let totalPayroll = 0;
  
    employees.forEach(employee => {
      totalPayroll += allWagesFor.call(employee);
    });
  
    return totalPayroll;
  }
  

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */


