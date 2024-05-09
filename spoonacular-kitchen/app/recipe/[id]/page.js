
async function getData(recipeId) {
  // Todo - add this url as a env and then make a request to proces..../api/search/.... ok?
  const res = await fetch(
    `${process.env.APP_URL}/api/recipe/${recipeId}`
  );
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("THere was an error fetching data");
  }

  return res.json();
}

export default async function RecipePage(context) {
  
  const data = await getData(context.params.id);
 
  return (
    <>
     {data!==null ? <div>
      <div className="max-w-4xl mx-auto px-4 py-12 md:px-6 md:py-16">
        <div className="space-y-8 md:space-y-12">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            {data.title}
          </h1>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-12">
            <div className="rounded-lg overflow-hidden">
              <img
                alt="Sourdough Bread"
                className="w-full h-full object-cover "
                height={600}
                src={data.image}
                width={800}
              />
            </div>
            <div className="space-y-6">
              <ol className="space-y-4 text-lg md:text-xl">

              {data.analyzedInstructions[0].steps.map((instruction, index) => (
                <li className="flex items-start">
                <span className="font-bold mr-2">{instruction.number}.</span>
                <p>
                  {instruction.step}
                </p>
              </li>
              ))}

              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>: "No data found"}
    
                </>
  );
}
