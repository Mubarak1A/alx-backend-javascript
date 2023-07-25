export default function* createIteratorObject(reportObject) {
    for (const department in reportObject.allEmployees) {
      const employees = reportObject.allEmployees[department];
      for (const employee of employees) {
        yield employee;
      }
    }
  }
  