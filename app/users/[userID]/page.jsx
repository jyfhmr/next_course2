import React from "react";

async function getUser(id) {
    const res = await fetch(`https://reqres.in/api/users/${id}`);
    const response = await res.json();
    console.log(response)
    return response.data;
  }


export default async  function page({ params }) {

    
   const data = await getUser(params.userID)

   console.log(data)


  return (
    <>
      <div>User Específico: {params.userID}</div>

      <div>
        {data.id}
      </div>
      <div>
        {data.email}
      </div>
      <div>
        {data.first_name} {data.last_name}
      </div>
      <img src={data.avatar} width={{width: "150px"}}></img>
    
  
    </>
  );
}
