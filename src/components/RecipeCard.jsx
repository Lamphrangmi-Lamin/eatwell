function RecipeCard(props) {
    return (
        <div key={props.id} className="flex-col items-center max-w-sm rounded-sm bg-[#370617] mb-6 mx-6.5">
          <img className="rounded-t-sm" src={props.src} alt="recipe-image" />
          <div className="p-5">
            <h5 className="text-2xl mb-2 font-bold">{props.name}</h5>
            <p className="description mb-3 font-normal">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus quam similique in, magni fuga consectetur error dolor. Aliquam laudantium praesentium saepe? Et dolorum quis nam!</p>
            <button className="flex items-center justify-center bg-[#FFBA08] text-[#03071E] text-sm px-3 py-2 font-medium rounded-md hover:bg-[#FAA307] cursor-pointer">
            Read more
            <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
            </button>
          </div>
        </div>
    )
}

export default RecipeCard;