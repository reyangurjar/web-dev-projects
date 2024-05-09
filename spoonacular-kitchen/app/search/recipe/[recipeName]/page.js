
import Card from "@/app/components/Search/Card.js";

async function getData(recipeName) {

  const res = await fetch(`${process.env.APP_URL}/api/search/recipe/${recipeName}`)

  const data = await res.json()
 
  if (!res.status == 200) {
    console.log(data)
    throw new Error("THere was an error fetching data");
  }
  return data;
}

export default   async function  recipeSearchPage(context){
  console.log(context.params.recipeName)
     const data = await getData(context.params.recipeName)
     console.log(data)
    if(!data.status == 200){
      return (
        <>
        <div className="py-4 font-bold text-black text-3xl text-center ">
      There was an error fetching data
    </div>
        </>
      )
    }
    return (<>
    {data.results.length == 0 ? <div className="py-4 font-bold text-black text-3xl text-center ">
      No results found for {context.params.recipeName}
    </div> : <><div className="py-4 font-bold text-3xl text-center ">
        Search results for {context.params.recipeName}
    </div>
    <div className="grid md:grid-cols-3 xl:grid-cols-4 sm:grid-cols-2 gap-4 my-2 mx-auto w-fit justify-center">
      {data.results.map((data) => 
        <Card key={"key" + data.id } name={data.title} img={data.image} id={data.id}  />
      )}
    

    </div></> }
    
    </>
    );

    return (
      <>
      {console.log(data)}
      <div className="empty">
        empty
      </div>
      </>
    )
};

