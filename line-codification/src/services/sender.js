async function sendMessage(message){
  const route = '/receive-message';
  const port = 5000;
  try{
    const res = await fetch(`http://localhost:${port}${route}`,{
      method: 'POST',
      headers: {
        'Content-Type': 'application-json',
      },
      body: JSON.stringify({message}),
    });

    if (!res.ok){
      throw new Error(`Request response status not 200 OK: ${res.statusText}`);
    }
  }
  catch (error){
    console.log("Error on fetch operation:", error);
    return null;
  }
}


sendMessage("Greg gostosinho");
