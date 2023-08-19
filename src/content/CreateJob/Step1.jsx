import React from "react";
import Input from 'components/Form/Input';
import Button from 'components/Button'

const Step1 = ({ control, errors }) => {
  return <>
    <Input
      label="Job title"
      name="title"
      control={control}
      required={true}
      errors={errors}
      placeholder='ex. UX UI Designer'
    />
    <Input
      label="Company name"
      name="name"
      control={control}
      required={true}
      errors={errors}
      placeholder='ex. Google'
    />
    <Input
      label="Industry"
      name="industry"
      control={control}
      required={true}
      errors={errors}
      placeholder='ex. Information Technology '
    />
    <div className='flex gap-8'>
      <Input
        label="Location"
        name="location"
        control={control}
        required={true}
        errors={errors}
        placeholder='ex. Chennai '
      />
      <Input
        label="Remote type"
        name="type"
        control={control}
        required={true}
        errors={errors}
        placeholder='ex. In-office'
      />
    </div>

    <div className='text-end mt-16'>
      <Button type='' title='Next' />
    </div>
  </>
};

export default Step1;
