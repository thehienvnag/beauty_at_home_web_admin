import axios from "axios";

const version = "v1.0/";
const baseUrl = "https://beauty-at-home.azurewebsites.net/api/" + version;
// const baseUrl = "https://localhost:44397/api/" + version;

export const useInput = ({ target }, [inputName, callback]) => {
  callback([inputName, target.value]);
};

export const getById = async (endpoint, id) => {
  return await axios.get(baseUrl + endpoint + "/" + id);
};

export const updateStatus = async (endpoint, id, status) => {
  const formData = new FormData();
  formData.append("id", id);
  const config = {
    headers: { "Content-Type": "multipart/form-data" },
  };
  return await axios.put(
    baseUrl + endpoint + "/" + id + status,
    formData,
    config
  );
};

export const getAll = async (endpoint) => {
  return await axios.get(baseUrl + endpoint);
};

export const login = async (loginBody) => {
  const config = {
    // headers: { "Content-Type": "application/json" },
  };
  return await axios.post(baseUrl + "auth/login", loginBody, config);
};

export const updateProfile = async (updateBody, id) => {
  const formData = new FormData();
  formData.append("id", id);
  if (updateBody.displayName) {
    formData.append("displayName", updateBody.displayName);
  }
  if (updateBody.phone) {
    formData.append("phone", updateBody.phone);
  }
  if (updateBody.file) {
    formData.append("file", updateBody.file);
  }
  formData.append("status", "ACTIVE");

  // now upload
  const config = {
    headers: { "Content-Type": "multipart/form-data" },
  };
  return await axios.put(baseUrl + `accounts/${id}`, formData, config);
};

export const postFormData = async (values, entityEndpoint) => {
  const formData = new FormData();
  for (const [key, value] of Object.entries(values)) {
    if (key.includes("images")) {
      for (const element of value) {
        const file = dataURLtoFile(element.path);
        formData.append(key, file, element.name);
      }
    } else {
      formData.append(key, value);
    }
  }

  // now upload
  const config = {
    headers: { "Content-Type": "multipart/form-data" },
  };
  await axios.post(baseUrl + entityEndpoint, formData, config);
};

const dataURLtoFile = (dataurl, filename) => {
  const arr = dataurl.split(",");
  const mime = arr[0].match(/:(.*?);/)[1];
  const bstr = atob(arr[1]);
  let n = bstr.length;
  const u8arr = new Uint8Array(n);
  while (n) {
    u8arr[n - 1] = bstr.charCodeAt(n - 1);
    n -= 1; // to make eslint happy
  }
  return new File([u8arr], filename, { type: mime });
};
