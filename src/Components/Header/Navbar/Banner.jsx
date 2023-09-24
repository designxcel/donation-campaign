

const Banner = () => {
    return (
        <div>
            <div
          className="hero h-[70vh]"
          style={{
            backgroundImage: "url(https://i.ibb.co/GRbqjBk/BG.png)",
          }}
        >
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="">
              <h1 className="mb-5 text-5xl font-bold ">
                I Grow By Helping People In Need
              </h1>
              <form>
                <div class="flex">
                  <div class="relative w-2/3 mx-auto">
                    <input
                      type="search"
                      id="search-dropdown"
                      class="z-20 block w-full rounded-lg border border-l-2 border-gray-300 border-l-gray-50 bg-gray-50 p-2.5 text-sm text-gray-900  dark:border-gray-600 dark:border-l-gray-700 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 "
                      placeholder="Search here..."
                      required
                    />
                    <button
                      type="submit"
                      class="absolute right-0 top-0 h-full rounded-r-lg border border-[#FF444A] bg-[#FF444A] p-2.5 text-sm font-medium text-white focus:outline-none focus:ring-4 dark:bg-[#FF444A]"
                    >
                      <span class="sr-only">Search</span>
                      Search
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        </div>
    );
};

export default Banner;