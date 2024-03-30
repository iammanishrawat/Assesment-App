import { useState } from "react";
import { campaignService } from "services";

export const useUploadForm = (url: string) => {
  const [isSuccess, setIsSuccess] = useState(false);
  const [progress, setProgress] = useState(0);

  const uploadForm = async (formData: FormData) => {
    // await axios.post(url, formData, {
    //   headers: {
    //     "Content-Type": "multipart/form-data",
    //   },
    //   onUploadProgress: (progressEvent: any) => {
    //     const progress = (progressEvent?.loaded / progressEvent?.total) * 50;
    //     setProgress(progress);
    //   },
    //   onDownloadProgress: (progressEvent: any) => {
    //     const progress = 50 + (progressEvent?.loaded / progressEvent?.total) * 50;
    //     console.log(progress);
    //     setProgress(progress);
    //   },
    // });
    // setIsSuccess(true);
    // setProgress(0);
    await new Promise((resolve) => {
      setTimeout(() => resolve("success"), 500);
    });
    setIsSuccess(true);
    setProgress(0);
  };

  return { uploadForm, isSuccess, progress };
};

export const useUploadFile = () => {
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);
  const [loading, setLoading] = useState(false);

  const uploadFile = async (formData: FormData) => {
    try{
      setLoading(true);
      setIsError(false);
      const response = await campaignService.uploadMultipleFiles(formData);
      if(response.success){
        setIsSuccess(true);
        setLoading(false);
        return response?.data;
      }
    } catch (error) {
      setIsSuccess(false);
      setIsError(true);
      setLoading(false);
      return error;
    }
  } 

  return {isSuccess, isError, loading, uploadFile, setIsError}
}