import React, { useEffect, useState} from 'react';
import uuid from 'react-uuid';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import Button from 'components/Button'
import Popup from 'components/Popup'
import Loader from 'components/Loader'
import Step1 from 'content/CreateJob/Step1';
import Step2 from 'content/CreateJob/Step2';
import { createJobSchema } from 'schema/createJobSchema';
import API from 'app/API';
import Card from 'components/Card';

export default function App() {
  
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [step,setStep] = useState('1')

  const [allJobs, setAllJobs] = useState([])
  const [refresh,setRefresh] = useState(false)
  const [loader,setLoader] = useState(false)
  const [isEdit,setIsEdit] = useState(false)

  useEffect(() =>{
    (async() => {
      setLoader(true)
      try{
        const jobs = await API.get('get_jobs')
        setAllJobs(jobs)      
      }catch(error){
        console.log('error',error)
      }finally{
        setLoader(false)
      }
    })()
    
  },[refresh])

  const handleRefreshData = () =>{
    setRefresh(preState => !preState)
  }

  const openPopup = () => {
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
    setStep('1')
    setIsEdit(false)
    handleClear()
  };


  const {
    handleSubmit,
    control,
    setValue,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(createJobSchema(step)),
  });

  const handleCreateJob = () =>{
    openPopup()
  }

  const onSubmit =async (data) => {    
    if(step === '1'){
      setStep('2')
      return
    }
    const postData = {
      "job-title": data.title,
      "company-name": data.name,
      "industry": data.industry,
      "location": data.location,
      "remote-type": data.type,
      "minimum-experience": data['minimum-experience'],
      "maximun-experience": data['maximun-experience'],
      "minimum-salary": data['minimum-salary'],
      "maximun-salary": data['maximun-salary'],
      "total-employee": data['total-employee'],
      "apply-type": data['apply-type'],
      id:uuid()
    }
    setLoader(true)
    try{
      if(isEdit){
        await API.put(`get_jobs/${data.id}`,postData)
      }else {
        await API.post('get_jobs',postData)
      }
      
      handleRefreshData()
      closePopup()
    }catch(error){
      console.log(error)
    }finally{
      setLoader(false)
    }
  };

  const handleClear = () => {
    reset();
  };

  const handleEdit = (job) => {
    setIsEdit(true)
    setValue('id',job.id)
    setValue('title',job['job-title'])
    setValue('name',job['company-name'])
    setValue('industry',job.industry)
    setValue('location',job.location)
    setValue('type',job['remote-type'])
    setValue('minimum-experience',job['minimum-experience'])
    setValue('maximun-experience',job['maximun-experience'])
    setValue('minimum-salary',job['minimum-salary'])
    setValue('maximun-salary',job['maximun-salary'])
    setValue('total-employee',job['total-employee'])
    setValue('apply-type', job['apply-type'] )
    openPopup()
  }

  const handleDelete = async(jobId) => {
    setLoader(true)
    try{
      await API.delete(`get_jobs/${jobId}`)
      handleRefreshData()
    }catch(error){
      console.log(error)
    }finally{
      setLoader(false)
    }
  }

  return (
    <div className='container mx-auto'>
      {loader && <Loader />} 
      <div className='my-4' >
        <Button type='outline' title='Create Job' onClick={handleCreateJob} /> 
      </div> 
      <div className='grid gap-4  sm:grid-cols-1 md:grid-cols-2 '>
        {allJobs.map((job) => <Card key={job.id} job={job} handleEdit={handleEdit} handleDelete={handleDelete} /> )}
      </div>
      <Popup isOpen={isPopupOpen} onClose={closePopup} title='Create a job' subTitle={`Step ${step}`}>
        <form onSubmit={handleSubmit(onSubmit)} className="w-full">
          {step === '1' && <Step1 control={control} errors={errors}  /> } 
          {step === '2' && <Step2 control={control} errors={errors}  /> }
        </form>
      </Popup>
    </div>
  )
}