
// Function to POST data
const postData = async (url = '', data = {}) => {
  const response = await fetch(url, {
    method: 'POST',
    credentials: 'same-origin',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data), // body data type must match "Content-Type" header
  });
  
  try {
    const newData = await response.json();
    return newData
  }
  catch (error) {
    console.log("error", error);
  }
}


// Function to GET Project Data
const updateUI = async (allData) => {
  try {
    console.log(allData);
    document.getElementById('polarity').innerHTML = allData.polarity;
    document.getElementById('polarity_confidence').innerHTML = allData.polarity_confidence;
    document.getElementById('text').innerHTML = allData.text;
  } catch (error) {
    console.log("error", error);
  }
}
function handleSubmit(event) {
  event.preventDefault()

  // check what text was put into the form field
  let formText = document.getElementById('name').value
  Client.checkForName(formText)

  // Form Validation
  if (formText.length == 0) {
    alert('Please enter text/url');
    return
  }
  console.log("::: Form Submitted :::")  
  postData('http://localhost:8081/sentiment', {'text': formText}) // send the formText with get or post
    .then(function (data) {
      console.log(data);
      updateUI(data);
    })
}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           

export { handleSubmit, postData, updateUI }