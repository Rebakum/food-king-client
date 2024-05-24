

const MushroomsFood = () => {
  return (
    <div>
      <div className="hero min-h-screen my-20 bg-base-200">


        <div className=" flex flex-col lg:flex-row p-10  gap-10 border shadow-2xl">

          <div className="lg:w-1/2 ">
            <img src="https://images.squarespace-cdn.com/content/v1/5d5577ab9ce6c9000153aa4f/ad700fc6-04d6-49be-8005-96dc2a8ae189/Final+Dish.jpg?format=" className="  gap-10 rounded-lg shadow-2xl w-full h-full" />

          </div>
          <div className=" lg:w-1/2 ">
            <h1 className="text-5xl font-bold mb-10 "> Mushrooms & Rice Recipe!!</h1>

            <h3 className="text-2xl">Ingredients- Pecan Pesto</h3>
            <div className="py-6">
              <li>3 cups fresh nettle leaves</li>
              <li>2 cloves garlic or to taste</li>
              <li>1/4 cup olive oil</li>
              <li>2 tablespoon lemon juice</li>
              <li>1/2 cup of pecans</li>
              <li>salt & pepper</li>
            </div>
            <h3 className="text-xl font-bold">Directions:</h3>

            <p className="py-2">On an open gas top flame or a cast iron skillet, roast the peppers and corn, rotating every 2-3 minutes until all sides are nicely charred.  Remove from heat.  Place peppers in a bowl and cover with a plate to allow to steam and soften (approx. 5 minutes).

              Meanwhile, in a saucepan over medium heat, add sunflower oil, thyme, and garlic and sauté for 1 minute.

              Add wild rice and stir to coat well.</p>
            <button to='/register' className="btn bg-orange-700">Register now</button>
          </div>
        </div>
      </div>




      <div className="hero min-h-screen my-20 bg-base-200">


        <div className=" flex flex-col lg:flex-row-reverse p-10 re  gap-10 border shadow-2xl">

          <div className="lg:w-1/2 ">
            <img src= "https://images.unsplash.com/photo-1576402187878-974f70c890a5?q=80&w=1933&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="  gap-10 rounded-lg shadow-2xl w-full h-full" />

          </div>
          <div className=" lg:w-1/2 ">
            <h1 className="text-5xl font-bold mb-10 "> Passta Masala Image!!</h1>

            <h3 className="text-2xl">Ingredients- Pecan Pesto</h3>
            <div className="py-6">
              <li>3 cups fresh nettle leaves</li>
              <li>2 cloves garlic or to taste</li>
              <li>1/4 cup olive oil</li>
              <li>2 tablespoon lemon juice</li>
              <li>1/2 cup of pecans</li>
              <li>salt & pepper</li>
            </div>
            <h3 className="text-xl font-bold">Directions:</h3>

            <p className="py-2">On an open gas top flame or a cast iron skillet, roast the peppers and corn, rotating every 2-3 minutes until all sides are nicely charred.  Remove from heat.  Place peppers in a bowl and cover with a plate to allow to steam and soften (approx. 5 minutes).

              Meanwhile, in a saucepan over medium heat, add sunflower oil, thyme, and garlic and sauté for 1 minute.

              Add wild rice and stir to coat well.</p>
            <button to='/register' className="btn bg-orange-700">Register now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MushroomsFood;