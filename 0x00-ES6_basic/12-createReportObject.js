export default function createReportObject(employeesList) {
    const reportObject = {
      allEmployees: {
        ...employeesList,
      },
      getNumberOfDepartments: function () {
        return Object.keys(employeesList).length;
      },
    };
  
    return reportObject;
  }
  