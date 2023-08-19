import * as yup from 'yup';

export const createJobSchema =(step) => yup.object().shape({
  title: yup.string().required('Job title is required'),
  name: yup.string().required('Company name is required'),
  industry: yup.string().required('Industry is required'),
  location: yup.string().required('Industry is required'),
  type: yup.string().required('Industry is required'),
  "minimum-experience": step ==='2' && yup.string().required('Minimum experience is required'),  
  "maximun-experience": step ==='2' && 
    yup.string().required('Maximum experience is required')
    .when('minimum-experience', (minExp, schema) => {
      return schema.test({
        name: 'maximun-experience',
        test: function (maxExp) {
          return Number(minExp[0]) < Number(maxExp) || this.createError({ message: 'Maximum experience must be greater than minimum experience' });
        },
      });
    }),
  "minimum-salary": step ==='2' && yup.number().typeError('Minimum salary must be a number').required('Minimum salary is required'),
  "maximun-salary": step ==='2' && yup.string()
  .typeError('Maximum salary must be a number')
  .required('Maximum salary is required')
  .when('minimum-salary', (minSalary, schema) => {
    return schema.test({
      name: 'maximun-salary',
      test: function (maxSalary) {
        return  Number(minSalary[0]) < Number(maxSalary) || this.createError({ message: 'Maximum salary must be greater than minimum salary' });
      },
    });
  }),
  "total-employee": step ==='2' && yup.string().required('Total employee is required'),
  "apply-type": step ==='2' && yup.string().required('Please select a Apply type'),
});