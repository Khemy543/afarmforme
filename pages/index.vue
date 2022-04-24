<template>
  <div>
    <!-- main section -->
    <div
      class="h-screen xl:overflow-x-hidden flex justify-center xl:justify-between items-center max-w-7xl px-4 mx-auto">
      <div class="hidden lg:flex w-full h-full items-center overflow-x-hidden">
        <div class=" w-full h-3/5 mt-5">
          <div class="relative w-full h-full">
            <!-- first slide -->
            <div
              class="absolute inset-0 w-full h-full flex transition-all ease-in-out duration-1000 transform translate-x-0 slide">
              <div class="w-1/2">
                <h1 class=" text-lg lg:text-xl text-left font-bold">
                  The Future of <br />Investment.
                </h1>
                <p class=" mt-12 font-normal text-md pr-10">
                  Lease a piece of a full irrigated land in our farm estates, focus on your business and let us build
                  your dream
                  farm for you. Terms and conditions apply.
                </p>
                <div class="lg:flex mt-6 items-center">
                  <nuxt-link to="/about-us"
                    class="app-button bg-primary text-white hover:opacity-70 rounded-xl transition-all">
                    Learn more
                  </nuxt-link>
                </div>
              </div>
              <div class=" w-1/2 flex flex-col space-y-5">
                <div class=" flex space-x-5 h-1/2">
                  <div class=" w-1/2 h-full bg-gray-200"></div>
                  <div class=" w-1/2 h-full bg-gray-200"></div>
                </div>
                <div class=" w-full h-1/2 bg-gray-200">

                </div>
              </div>
            </div>
            <!--  second slide -->
            <div
              class="absolute inset-0 w-full h-full flex transition-all ease-in-out duration-1000 transform translate-x-full slide">
              <div class="w-1/2">
                <h1 class=" text-lg lg:text-xl text-left font-bold">
                  The Future of <br />Investment.
                </h1>
                <p class=" mt-12 font-normal text-md pr-10">
                  Secure your future with our diversified portfolio and packages.
                </p>
                <div class="lg:flex mt-6 items-center">
                  <nuxt-link to="/about-us"
                    class="app-button bg-primary text-white hover:opacity-70 rounded-xl transition-all">
                    Learn more
                  </nuxt-link>
                </div>
              </div>
              <div class="w-1/2 h-full flex justify-end">
                <div class=" h-full carousel-width relative bg-gray-200">
                  <div class=" absolute h-3/4 w-3/4 -bottom-10 -left-10 z-10 grid grid-cols-2 gap-5">
                    <div class=" w-full bg-gray-400 h-full"></div>
                    <div class=" w-full bg-gray-400 h-full"></div>
                    <div class=" w-full bg-gray-400 h-full"></div>
                    <div class=" w-full bg-gray-400 h-full"></div>
                  </div>
                </div>
              </div>
            </div>
            <!-- third slide -->
            <div
              class="absolute inset-0 w-full h-full flex transition-all ease-in-out duration-1000 transform translate-x-full slide">
              <div class="w-1/2">
                <h1 class=" text-lg lg:text-xl text-left font-bold">
                  Start a community wealth creation project
                </h1>
                <p class=" mt-12 font-normal text-md pr-10">
                  At A Farm For Me, we believe in creating wealth, family, friends and loved ones
                  should be brought along. For this reason, we have introduced
                  our community wealth creation product to help families, friends and
                  groups to build wealth together. READY?
                </p>
                <div class="lg:flex mt-6 items-center">
                  <nuxt-link to="/about-us"
                    class="app-button bg-primary text-white hover:opacity-70 rounded-xl transition-all">
                    Learn more
                  </nuxt-link>
                </div>
              </div>
              <div class="w-1/2 h-full flex justify-end">
                <div class=" h-full carousel-width relative bg-gray-200">
                  <div class=" absolute h-3/4 w-3/4 -bottom-10 -left-10 z-10 grid grid-cols-2 gap-5">
                    <div class=" w-full bg-gray-400 h-full"></div>
                    <div class=" w-full bg-gray-400 h-full"></div>
                    <div class=" w-full bg-gray-400 h-full"></div>
                    <div class=" w-full bg-gray-400 h-full"></div>
                  </div>
                </div>
              </div>
            </div>
            <!-- fourth slide -->
            <div
              class="absolute inset-0 w-full h-full flex transition-all ease-in-out duration-1000 transform translate-x-full slide">
              <div class="w-1/2">
                <h1 class=" text-lg lg:text-xl text-left font-bold">
                  A Farm For Me Estates
                </h1>
                <p class=" mt-12 font-normal text-md pr-10">
                  Our Farm Estates is a complete community for entrepreneurs, individuals and firms
                  within the agriculture and food production industry. Come cop an acre.
                </p>
                <div class="lg:flex mt-6 items-center">
                  <nuxt-link to="/about-us"
                    class="app-button bg-primary text-white hover:opacity-70 rounded-xl transition-all">
                    Learn more
                  </nuxt-link>
                </div>
              </div>
              <div class="w-1/2 h-full flex justify-end">
                <div class=" h-full carousel-width relative bg-gray-200">
                  <div class=" absolute h-3/4 w-3/4 -bottom-10 -left-10 z-10 grid grid-cols-2 gap-5">
                    <div class=" w-full bg-gray-400 h-full"></div>
                    <div class=" w-full bg-gray-400 h-full"></div>
                    <div class=" w-full bg-gray-400 h-full"></div>
                    <div class=" w-full bg-gray-400 h-full"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class=" mt-14 flex justify-end">
            <div class="flex space-x-5">
              <div
                class=" bg-gray-50 h-10 w-10 rounded-full flex items-center justify-center cursor-pointer hover:bg-black"
                @click="previousSlide">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24"
                  stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
              </div>
              <div
                class=" bg-gray-50 h-10 w-10 rounded-full flex items-center justify-center cursor-pointer hover:bg-black"
                @click="nextSlide">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24"
                  stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- end main section -->

    <div class=" bg-gray-100">
      <div class=" py-24 mt-16 max-w-7xl px-4 mx-auto" id="new-opportunities">
        <div class=" w-full flex justify-center">
          <div class=" w-full lg:w-1/2 text-center">
            <div class=" text-base font-bold mb-5">New opportunities</div>
            <p class=" text-xs font-normal">
              All these years, individuals have always wanted to venture into
              agriculture, but barriers such as lack of technical knowledge,
              access to land, inadequate finance and unavailability of produce off
              takers etc have prevented such people. <b>A farm for me</b> has
              removed such barriers by way of :
            </p>
          </div>
        </div>

        <div class=" mt-12 w-full flex justify-center">
          <div class=" lg:flex lg:space-x-10 space-y-5 lg:space-y-0 w-full">
            <div class=" w-full lg:w-1/3 rounded-xl overflow-hidden  relative" v-for="value in opportunities"
              :key="value.id" style="height:450px">
              <img :src="value.image" :alt="value.name" class=" w-full h-full object-cover" />
              <div class=" h-1/2 bg-gradient-to-t from-black absolute w-full bottom-0">
                <div class="absolute w-full bottom-0 inset-x-0 px-7 pb-7 text-white ">
                  <div class="text-sm font-bold text-white">{{ value.name }}</div>
                  <div class=" mt-1 text-xs font-normal text-white">{{ value.description }}</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class=" mt-52 w-full flex justify-center">
          <div>
            <h3 class="text-center text-base font-bold mb-5">Our farms.</h3>
            <p class="text-center text-sm font-normal">
              All farms are automatically insured.
            </p>

            <div class=" lg:flex space-y-5 lg:space-y-0 lg:space-x-14 mt-12">
              <ProductCard v-for="n in products" :key="n.id" :product="n" class=" w-1/3 mt-6 lg:mt-0" />
            </div>

            <div class=" mt-10  flex justify-center w-full">
              <button class=" app-button rounded-xl text-black border border-gray-50 hover:border-black hover:bg-white">
                Browse Farms
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>

    <div class="py-28 max-w-7xl px-4 mx-auto">
      <div class=" bg-gray-100 rounded-lg w-full" style="height:706px"></div>

      <div class=" w-full flex justify-center mt-28">
        <div class=" w-full lg:w-1/2 text-center">
          <div class=" text-base font-bold mb-5">
            Well-tailored packages to meet your investment needs.
          </div>
          <p class=" text-xs font-normal">
            A Farm For Me offers its clients a variety of well-tailored and
            pre-prepared farm sponsorship packages, so you can choose the option
            that best meets your investment needs. We offer a number of
            different packages to suit the needs of individuals, organisations,
            families, students, groups etc.
          </p>
        </div>
      </div>

      <div class=" flex justify-center w-full mt-12">
        <div class=" md:flex w-full space-x-5 hidden ">
          <div class=" px-6 py-12 w-1/3 rounded-xl"
            :class="pack.id === 2 ? 'bg-white shadow-lg border border-gray-200' : 'bg-gray-100'"
            v-for="pack in packages" :key="pack.id">
            <div class=" font-bold text-sm">{{ pack.title }}</div>
            <div class="text-xs font-normal mt-5">
              {{ pack.description }}
            </div>

            <div class=" mt-6">
              <ul class=" space-y-1">
                <li class=" flex space-x-4 items-center" v-for="opt in pack.options" :key="opt.id">
                  <!-- <Checkbox :name="opt.name" :id="opt.id" :checked="true" /> -->
                  <svg xmlns="http://www.w3.org/2000/svg" class=" flex-grow-0 flex-shrink-0" width="20" height="20"
                    viewBox="0 0 20 20">
                    <g id="bullet-icon" transform="translate(-957 -2161)">
                      <rect id="Rectangle_11" data-name="Rectangle 11" width="20" height="20" rx="10"
                        transform="translate(957 2161)" fill="#e8e9fb" />
                      <path id="Path_1" data-name="Path 1" d="M2052.855,1088.814l2.927,2.5,4.336-5.6"
                        transform="translate(-1090.026 1082.523)" fill="none" stroke="#656ce0" stroke-linecap="round"
                        stroke-linejoin="round" stroke-width="1" />
                    </g>
                  </svg>
                  <span>
                    {{ opt.name }}
                  </span>
                </li>
              </ul>
            </div>

            <div class=" mt-5 text-small uppercase text-gray-500 font-bold">STARTING AT</div>
            <div class=" mt-2 text-base font-bold">GHS {{ pack.amount }}</div>

            <div class=" mt-8 text-sm font-bold flex">
              Get Started
              <span class=" flex items-center pl-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="5.6" height="9.699" viewBox="0 0 5.6 9.699">
                  <path id="chevron-right" d="M9,13.578l3.789-3.789L9,6" transform="translate(-7.939 -4.939)"
                    fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
                </svg>
              </span>
            </div>
          </div>
        </div>

      </div>
    </div>

    <div class=" bg-become-a-partner bg-blue-300 bg-contain h-screen">
      <div class=" max-w-7xl mx-auto px-4 flex flex-col-reverse lg:flex-row h-full space-x-0 items-center">
        <div class=" w-full lg:w-2/5 mt-24 pb-10 lg:pb-10">
          <div class=" text-base font-bold text-white mb-5">Become A Partner</div>
          <p class=" text-xs font-normal text-white mb-5">
            A Farm For Me offers its clients a variety of well-tailored and pre-prepared farm sponsorship packages, so
            you can choose the option that best meets your investment needs. We offer a number of different packages to
            suit the needs of individuals, organisations, families, students, groups etc.
          </p>

          <button class=" app-button rounded-xl text-black border border-gray-50 hover:border-black bg-white">
            Learn More
          </button>
        </div>
        <div class=" w-full lg:w-3/5 h-full relative">
          <img src="~/static/img/Home/become-a-partner.png" alt="become a partner"
            class=" absolute z-10 top-20 w-full object-cover">
        </div>
      </div>
    </div>


    <div class=" py-28 max-w-7xl px-4 mx-auto mt-60">
      <div class=" w-full flex justify-center">
        <div class="w-full lg:w-1/2 font-bold text-base text-center">
          We are excited helping achieve the sustainable development goals.
        </div>
      </div>

      <div class=" grid grid-cols-3 lg:grid-cols-6 gap-4 w-full mt-8">
        <img src="~/static/img/farm/SDG-goal-01.png" class=" w-full h-auto object-cover" />
        <img src="~/static/img/farm/SDG-goal-02.png" class=" w-full h-auto object-cover" />
        <img src="~/static/img/farm/SDG-goal-05.png" class=" w-full h-auto object-cover" />
        <img src="~/static/img/farm/SDG-goal-08.png" class=" w-full h-auto object-cover" />
        <img src="~/static/img/farm/SDG-goal-09.png" class=" w-full h-auto object-cover" />
        <img src="~/static/img/farm/SDG-goal-15.png" class=" w-full h-auto object-cover" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {
    ProductCard: () => import("~/components/ProductCard.vue")
  },

  methods: {
    NewsLetterSubscribe() {
      this.alert("success");
    },
    nextSlide() {
      let activeSlide = document.querySelector('.slide.translate-x-0');
      if (activeSlide) {
        activeSlide.classList.remove('translate-x-0');
        activeSlide.classList.add('-translate-x-full');
        let nextSlide = activeSlide.nextElementSibling;
        if (nextSlide) {
          nextSlide.classList.remove('translate-x-full');
          nextSlide.classList.add('translate-x-0');
        }
      }
    },

    previousSlide() {
      let activeSlide = document.querySelector('.slide.translate-x-0');
      if (activeSlide) {
        activeSlide.classList.remove('translate-x-0');
        activeSlide.classList.add('translate-x-full');
        let previousSlide = activeSlide.previousElementSibling;
        if (previousSlide) {
          previousSlide.classList.remove('-translate-x-full');
          previousSlide.classList.add('translate-x-0');
        }
      }
    }
  },

  data() {
    return {
      products: [
        {
          id: 1,
          name: "Pepper farm",
          img: '/img/farm/pepper-farm.png',
          price: "Price available",
          returns: '80% return on investment',
          months: '5 months'
        },
        {
          id: 2,
          name: 'Cassava farm',
          img: '/img/farm/cassava-farm.jpg',
          price: '300ghs per plot',
          returns: "80% return on investement",
          months: '3 months'
        },
        {
          id: 3,
          name: 'Chilli farm',
          img: '/img/farm/chilli-farm.jpg',
          price: "500ghs per pig",
          returns: "80% return on investement",
          months: "17 months"
        }
      ],
      packages: [
        {
          id: 1,
          title: "Individual Investor",
          description: "Appropriate for individuals/new investors looking to enlarge their range of investments with a tangible asset.",
          amount: "2,000",
          options: [
            {
              id: 1,
              name: 'Purchase of crop/animal farm.'
            },
            {
              id: 2,
              name: "Minimum of 1 unit."
            },
            {
              id: 3,
              name: "Purchase of crop/animal farm."
            },
            {
              id: 4,
              name: "Minimum of 1 unit"
            }
          ]
        },
        {
          id: 2,
          title: "Institutional Investor",
          description: "Appropriate for institutions and high capacity investors looking to enlarge their range of investments with a tangible asset.",
          amount: "22,000",
          options: [
            {
              id: 1,
              name: 'Purchase of crop/animal farm.'
            },
            {
              id: 2,
              name: 'Minimum of 20 units.'
            },
            {
              id: 3,
              name: 'Purchase of crop/animal farm.'
            },
            {
              id: 4,
              name: 'Minimum of 20 units.'
            }
          ]
        },
        {
          id: 4,
          title: "Family/Group Investor",
          description: "Appropriate for group of persons and families looking to enlarge their range of investments with a tangible asset.",
          amount: "50,000",
          options: [
            {
              id: 1,
              name: 'Purchase of crop/animal farm'
            },
            {
              id: 2,
              name: "Minimum of 5 units"
            },
            {
              id: 3,
              name: "Purchase of crop/animal farm"
            },
            {
              id: 4,
              name: "Minimum of 5 units"
            }
          ]
        }
      ],
      opportunities: [
        {
          id: 1,
          name: "Technology",
          description: "Taking maximum advantage of technology to sponsor farms and earn very cool returns without a physical involvement.",
          image: "/img/Home/technology-card.png"
        },
        {
          id: 2,
          name: "Partnerships",
          description: "Fostering partnerships with farmers and necessary stakeholder we trust to run activities on our farms.",
          image: "/img/Home/partnerships-card.png"
        },
        {
          id: 3,
          name: "Analytics",
          description: "Researching, analysing and gathering industry data helps drive higher returns on your investments.",
          image: "/img/Home/analytics-card.png"
        }
      ]
    }
  }
};
</script>

<style>
.carousel-width {
  width: calc(100% - 40px);
}
</style>
