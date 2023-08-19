import React from "react";
import Input from 'components/Form/Input';
import Button from 'components/Button'
import RadioGroup from "components/Form/RadioGroup";
import { applyJobTypes } from "constants/applyJobTypes";


const Step2 = ({ control, errors }) => {

  return <>
    <div className='flex gap-8 w-full justify-between items-flex-start'>
      <Input
        label="Experience"
        name="minimum-experience"
        type='number'
        required={true}
        control={control}
        errors={errors}
        placeholder='Minimum'
      />
      <Input
        label="-"
        name="maximun-experience"
        hideLabel={true}
        control={control}
        errors={errors}
        placeholder='Maximum'
      />
    </div>
    <div className='flex gap-8 w-full justify-between items-flex-start'>
      <Input
        label="Salary"
        name="minimum-salary"
        control={control}
        required={true}
        type='number'
        errors={errors}
        placeholder='Minimum'
      />
      <Input
        label="-"
        name="maximun-salary"
        hideLabel={true}
        type='number'
        control={control}
        errors={errors}
        placeholder='Maximum'
      />
    </div>
    <Input
      label="Total employee"
      name="total-employee"
      required={true}
      control={control}
      errors={errors}
      placeholder='ex. 100'
    />
    <RadioGroup
      label="Apply type"
      name="apply-type"
      control={control}
      required={true}
      options={applyJobTypes}
      rules={{ required: true }}
      errors={errors}
    />
    <div className='text-end mt-16'>
      <Button type='' title='Save' />
    </div>
  </>
};

export default Step2;
