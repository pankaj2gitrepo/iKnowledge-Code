import axios from "axios";

export const axiosInstanceBinary = axios.create({
  headers: {
    Accept: "application/protobuf",
    "Content-Type": "application/x-protobuf",
  },
  responseType: "arraybuffer",
});

export const encodeRequestData = (requestData, requestModel) => {
  const requestModelInstance = requestModel.create(requestData);
  return requestModel.encode(requestModelInstance).finish();
};

export const decodeResponseData = (
  responseModel,
  responseData,
  defaults = true
) => {
  if (!responseModel.decode) {
    return {};
  }
  const decodedMessage = responseModel.decode(new Uint8Array(responseData));
  return responseModel.toObject(decodedMessage, {
    defaults,
  });
};

export const generateProtoDataBody = (data) =>
  data.buffer.slice(data.byteOffset, data.byteOffset + data.byteLength);

export const getBinaryRequestData = (method, data) => {
  return {
    data: generateProtoDataBody(data),
  };
};

export const getData = async (
  method,
  url,
  requestData,
  requestModel,
  responseModel,
  defaults = true
) => {
  const requestModelEncoded = encodeRequestData(requestData, requestModel);
  try {
    const { data } = await axiosInstanceBinary.request({
      method,
      url,
      ...getBinaryRequestData(method, requestModelEncoded),
    });
    return decodeResponseData(responseModel, data, defaults);
  } catch (e) {
    if (e?.data) {
      console.log(e.data);
    } else {
      console.log("Connection Error: There is no data in response.");
    }
  }
};
