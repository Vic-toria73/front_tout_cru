import api from "./api";

export interface Picture {
  id: number;
  url: string;
  altText: string;
}

export const uploadPicture = async (file: File, altText?: string) => {
  const formData = new FormData();
  formData.append('file', file);
  if (altText) {
    formData.append('altText', altText);
  }

  return api.post('/pictures/upload', formData, {
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  });
};