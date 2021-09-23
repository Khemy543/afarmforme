<template>
  <div>
    <!-- main section -->
    <div
      class="h-screen xl:overflow-x-hidden flex justify-center xl:justify-between items-center max-w-6xl px-4 mx-auto"
    >
      <div class="w-full xl:w-7/12">
        <h1 class=" text-xl text-left font-bold">
          The<br />
          future of <br />investment.
        </h1>
        <p class=" mt-12 font-normal text-md">
          Sit home, watch us dirty our hands, enjoy your profits.
        </p>
        <div class="lg:flex mt-6 space-x-5 items-center">
          <button class=" app-button rounded-xl bg-primary text-white">
            Start Farming
          </button>
          <button
            class="app-button bg-white text-black border border-gray-400 rounded-xl"
          >
            Learn more
          </button>
        </div>

        <div class=" flex space-x-5 mt-12">
          <div
            class=" bg-gray-400 h-12 w-12 rounded-md"
            v-for="n in 5"
            :key="n"
          ></div>
        </div>
      </div>

      <div
        class=" hidden lg:block lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 z-10"
      >
        <img
          class=" h-screen w-full object-cover"
          src="~static/img/home-one/main-banner-edited.png"
          alt="image"
        />
      </div>
    </div>
    <!-- end main section -->

    <div class=" bg-gray-100">
    <div class=" py-24 mt-16 max-w-6xl px-4 mx-auto" id="new-opportunities">
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
        <div class=" flex space-x-10 w-full">
          <div class=" w-1/3 rounded-xl h-96 bg-gray-300 relative">
            <div class=" absolute bottom-0 left-0 right-0 p-6">
              <div class=" text-sm font-bold">Technology</div>
              <div class=" mt-1 text-xs font-normal">
                Taking maximum advantage of technology to sponsor farms and earn
                very cool returns without a physical involvement.
              </div>
            </div>
          </div>
          <div class=" w-1/3 rounded-xl h-96 bg-gray-300 relative">
            <div class=" absolute bottom-0 left-0 right-0 p-6">
              <div class=" text-sm font-bold">Partnerships</div>
              <div class=" mt-1 text-xs font-normal">
                Fostering partnerships with farmers and necessary stakeholder we
                trust to run activities on our farms.
              </div>
            </div>
          </div>
          <div class=" w-1/3 rounded-xl h-96 bg-gray-300 relative">
            <div class=" absolute bottom-0 left-0 right-0 p-6">
              <div class=" text-sm font-bold">Analytics</div>
              <div class=" mt-1 text-xs font-normal">
                Researching, analysing and gathering industry data helps drive
                higher returns on your investments.
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

          <div class=" flex space-x-10 mt-12">
            <ProductCard v-for="n in products" :key="n.id" :product="n" class=" w-1/3" />
          </div>

          <div class=" mt-10  flex justify-center w-full">
            <button
              class=" app-button rounded-xl text-black border border-gray-300 bg-white"
            >
              Browse Farms
            </button>
          </div>
        </div>

      </div>
    </div>
    </div>

    <div class="py-28 max-w-6xl px-4 mx-auto">
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
        <div class=" md:flex w-full space-x-5 hidden " >
          <div class=" px-6 py-12 bg-gray-100 w-1/3 rounded-xl">
              <div class=" font-bold text-sm">Individual Investor</div>
              <div class="text-xs font-normal mt-5">
                Appropriate for individuals/new investors looking to enlarge their range of investments with a tangible asset.
              </div>

              <div class=" mt-6">
                <ul class=" space-y-1">
                  <li class=" flex space-x-4 items-center">
                      <input type="checkbox" name="" id="" checked> <label for="" class="text-xs font-normal"> Purchase of crop/animal farm.</label>
                  </li>
                  <li class=" flex space-x-4 items-center">
                      <input type="checkbox" name="" id="" checked> <label for="" class="text-xs font-normal"> Minimum of 1 unit.</label>
                  </li>
                  <li class=" flex space-x-4 items-center">
                      <input type="checkbox" name="" id="" checked> <label for="" class="text-xs font-normal"> Purchase of crop/animal farm.</label>
                  </li>
                  <li class=" flex space-x-4 items-center">
                      <input type="checkbox" name="" id="" checked> <label for="" class="text-xs font-normal">Minimum of 1 unit</label>
                  </li>
                </ul>
              </div>

              <div class=" mt-5 text-small uppercase text-gray-500 font-bold">STARTING AT</div>
              <div class=" mt-2 text-base font-bold">GHS 2,000</div>

              <div class=" mt-8 text-sm font-bold">
                Get Started 
              </div>
          </div>
          <div class=" shadow-lg rounded-xl px-6 py-12 bg-white border border-gray-200  w-1/3">
              <div class=" font-bold text-sm">Institutional Investor</div>
              <div class="text-xs font-normal mt-5">
                Appropriate for institutions and high capacity investors looking to enlarge their range of investments with a tangible asset.
              </div>

              <div class=" mt-6">
                <ul class=" space-y-1">
                  <li class=" flex space-x-4 items-center">
                      <input type="checkbox" name="" id="" checked> <label for=""  class="text-xs font-normal"> Purchase of crop/animal farm.</label>
                  </li>
                  <li class=" flex space-x-4 items-center">
                      <input type="checkbox" name="" id="" checked> <label for=""  class="text-xs font-normal"> Minimum of 20 units.</label>
                  </li>
                  <li class=" flex space-x-4 items-center">
                      <input type="checkbox" name="" id="" checked> <label for="" class="text-xs font-normal"> Purchase of crop/animal farm.</label>
                  </li>
                  <li class=" flex space-x-4 items-center">
                      <input type="checkbox" name="" id="" checked> <label for="" class="text-xs font-normal"> Minimum of 20 units.</label>
                  </li>
                </ul>
              </div>

              <div class=" mt-5 text-small uppercase text-gray-500 font-bold">STARTING AT</div>
              <div class=" mt-2 text-base font-bold">GHS 22,000</div>

              <div class=" mt-8 text-sm font-bold">
                Get Started 
              </div>
          </div>
          <div class=" px-6 py-12 bg-gray-100 w-1/3 rounded-xl">
              <div class=" font-bold text-sm">Institutional Investor</div>
              <div class="text-xs font-normal mt-5">
                Appropriate for institutions and high capacity investors looking to enlarge their range of investments with a tangible asset.
              </div>

              <div class=" mt-6">
                <ul class=" space-y-1">
                  <li class=" flex space-x-4 items-center">
                      <input type="checkbox" name="" id="" checked> <label for="" class="text-xs font-normal"> Purchase of crop/animal farm.</label>
                  </li>
                  <li class=" flex space-x-4 items-center">
                      <input type="checkbox" name="" id="" checked> <label for="" class="text-xs font-normal"> Minimum of 20 units.</label>
                  </li>
                  <li class=" flex space-x-4 items-center">
                      <input type="checkbox" name="" id="" checked> <label for="" class="text-xs font-normal"> Purchase of crop/animal farm.</label>
                  </li>
                  <li class=" flex space-x-4 items-center">
                      <input type="checkbox" name="" id="" checked> <label for="" class="text-xs font-normal"> Minimum of 20 units.</label>
                  </li>
                </ul>
              </div>

              <div class=" mt-6 text-small uppercase text-gray-500 font-bold">STARTING AT</div>
              <div class=" mt-2 text-base font-bold">GHS 50,000</div>

              <div class=" mt-8 text-sm font-bold">
                Get Started 
              </div>
          </div>
      </div>

      </div>
    </div>

    <div class=" bg-blue-500">
      <div class=" max-w-6xl mx-auto px-4 flex space-x-0 py-72 ">
        <div class=" w-1/2">
            <div class=" text-base font-bold text-white mb-5">Become A Partner</div>
            <p class=" text-xs font-normal text-white mb-5">
              A Farm For Me offers its clients a variety of well-tailored and pre-prepared farm sponsorship packages, so you can choose the option that best meets your investment needs. We offer a number of different packages to suit the needs of individuals, organisations, families, students, groups etc.
            </p>

            <button class=" app-button rounded-xl text-black border border-gray-300 bg-white">
              Learn More
            </button>
        </div>
      </div>
    </div>


    <div class=" py-28 max-w-6xl px-4 mx-auto">
      <div class=" w-full flex justify-center">
        <div class=" w-1/2 font-bold text-base text-center">
            We are excited helping achieve the sustainable development goals.
        </div>
      </div>

      <div class=" grid grid-cols-6 gap-4 w-full mt-8">
        <img src="~/static/img/farm/SDG-goal-01.png" class=" w-full h-auto object-cover" />
        <img src="~/static/img/farm/SDG-goal-02.png" class=" w-full h-auto object-cover"/>
        <img src="~/static/img/farm/SDG-goal-05.png" class=" w-full h-auto object-cover" />
        <img src="~/static/img/farm/SDG-goal-08.png" class=" w-full h-auto object-cover"/>
        <img src="~/static/img/farm/SDG-goal-09.png" class=" w-full h-auto object-cover"/>
        <img src="~/static/img/farm/SDG-goal-15.png" class=" w-full h-auto object-cover"/>
      </div>
    </div>
    <div class="max-w-6xl mx-auto px-4 pb-48">

    <div class=" my-16 py-11 px-16 flex space-x-0 bg-blue-500 rounded-lg items-center ">
      <div class=" w-1/2 pr-10">
        <div class="text-lg font-bold text-white">
          Begin your journey of becoming a Agripreneur.
        </div>
      </div>
      <div class=" flex space-x-4 w-1/2">
        <div class="w-1/2">
        <div class=" text-sm font-bold text-white">Simple Pricing</div>
        <div class=" mt-4 text-xs font-normal text-white">
          We know that every cent counts and budgets need to be clear. We will always be upfront with you about what our services will cost.
        </div>
        
        <button class=" app-button bg-white border border-gray-300 rounded-xl mt-6">Start Farming</button>
      </div>

      <div class=" w-1/2">
        <div class=" text-sm font-bold text-white">Simple Pricing</div>
        <div class=" mt-4 text-xs font-normal text-white">
          We know that every cent counts and budgets need to be clear. We will always be upfront with you about what our services will cost.
        </div>
        
      </div>
      </div>
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
    }
  },

  data(){
    return{
      products : [
        {
          id:1,
          name : "Pepper farm",
          img : '/img/farm/pepper-farm.png',
          price:"Price available",
          returns : '80% return on investment',
          months : '5 months'
        },
        {
          id:2,
          name : 'Cassava farm',
          img : '/img/farm/cassava-farm.jpg',
          price : '300ghs per plot',
          returns : "80% return on investement",
          months : '3 months'
        },
        {
          id:3,
          name : 'Chilli farm',
          img : '/img/farm/chilli-farm.jpg',
          price:"500ghs per pig",
          returns : "80% return on investement",
          months : "17 months"
        }
      ]
    }
  }
};
</script>

<style>
</style>
