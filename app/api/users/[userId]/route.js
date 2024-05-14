import { NextResponse } from "next/server"

export async function GET(request, {params}){

    console.log("la variable de entorno:",process.env.TOKEN)

    console.log("THE REQUESTTTTTTT",request)

    console.log(params)

    const {searchParams} = new URL(request.url)
    console.log("queries del url:",searchParams) //EN UN MAP SE ACCEDE CON searchParams.get("nombre")

    const data = await fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`)
    const dataAsJson = await data.json()

    //console.log(dataAsJson)

   return NextResponse.json(dataAsJson)
}


export async function POST(request, {params}){

    const data =await request.json()

    console.log("ESTA ES EL BODY DE LA PETICION POST",data)

    return NextResponse.json({
        message: "creando datos"
    })

}