import axios from 'axios';

const Base_URL = 'https://cerulean-marlin-wig.cyclic.app/';

const api = axios.create({
  baseURL: Base_URL,
})

export const getActivities = async () => {
  try {
    const response = await api.get('activities');
    console.log(response.data);
    return response.data;
  } catch (err) {
    throw err;
  }

}

//to update a single call
export const updateCall = async (call) => {
  try {
    const response = await api.patch(`activities/${call.id}`, { is_archived: call.is_archived });
    return response.data;
  }
  catch (err) {
    throw err;
  }
};

//to update multiple calls
export const updateMultipleCalls = async (calls) => {
  const successfulUpdates = [];
  const failedUpdates = [];

  try {

    for (const call of calls) {
      try {

        const updatedCall = await updateCall(call);
        successfulUpdates.push(updatedCall);
      } catch (err) {

        throw err;
      }
    }

    return { successfulUpdates, failedUpdates };
  } catch (err) {
    throw err;
  }
};

// to reset all calls to initial state
export const resetCalls = async () => {
  try {
    const response = await api.patch('reset');
    return response.data;
  } catch (error) {
    throw error;
  }
};