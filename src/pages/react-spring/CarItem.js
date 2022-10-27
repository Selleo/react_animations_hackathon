export const CarItem = ({ car, toggleOpen, handleDelete }) => {
  return (
    <>
      <div className="px-4 py-5 sm:px-6 flex">
        <div className="grow">
          <h3
            className="text-lg leading-6 font-medium text-gray-900 cursor-pointer"
            onClick={toggleOpen}
          >
            {car.name}
          </h3>
          <p className="mt-1 max-w-2xl text-sm text-gray-500">{car.short}</p>
        </div>
        <div>
          <span className="relative z-0 inline-flex shadow-sm rounded-md">
            <button
              type="button"
              className="relative inline-flex items-center px-4 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
            >
              Edit
            </button>
            <button
              onClick={handleDelete}
              type="button"
              className="-ml-px relative inline-flex items-center px-4 py-2 border border-gray-300 bg-red-400 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
            >
              Delete
            </button>
          </span>
        </div>
      </div>
      <div className="border-t border-gray-200 px-4 py-5 sm:p-0">
        <dl className="sm:divide-y sm:divide-gray-200">
          <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <div>
              <dl className="mt-5 grid grid-cols-1 rounded-lg bg-white overflow-hidden shadow divide-y divide-gray-200 md:grid-cols-3 md:divide-y-0 md:divide-x">
                <div className="px-4 py-5 sm:p-6">
                  <dt className="text-base font-normal text-gray-900">
                    Top&nbsp;speed
                  </dt>
                  <dd className="mt-1 flex justify-between items-baseline md:block lg:flex">
                    <div className="flex items-baseline text-2xl font-semibold text-indigo-600">
                      {car.topSpeed}km/h
                    </div>
                  </dd>
                </div>
                <div className="px-4 py-5 sm:p-6">
                  <dt className="text-base font-normal text-gray-900">Price</dt>
                  <dd className="mt-1 flex justify-between items-baseline md:block lg:flex">
                    <div className="flex items-baseline text-2xl font-semibold text-indigo-600">
                      ${car.price}
                    </div>
                  </dd>
                </div>
              </dl>
            </div>
          </div>
          <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <img
              src={car.url}
              alt={car.name}
              style={{ width: '716px', height: '240px' }}
            />
          </div>
        </dl>
      </div>
    </>
  )
}
