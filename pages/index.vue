<template>
  <div>
    <!-- main section -->
    <div
      class="px-4 h-screen xl:overflow-x-hidden flex justify-center xl:justify-between items-center"
    >
      <div class="w-full xl:w-7/12">
        <h1 class=" text-7xl text-left font-bold">
          The<br />
          future of <br />investment.
        </h1>
        <p class=" mt-12 font-normal text-base">
          Sit home, watch us dirty our hands, enjoy your profits.
        </p>
        <div class="lg:flex mt-6 space-x-5 items-center">
          <button class=" app-button rounded-lg bg-primary text-white">
            Get started
          </button>
          <button
            class="app-button bg-white text-black border border-gray-400 rounded-lg"
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

    <div class=" bg-gray-100 py-12 mt-16 " id="new-opportunities">
      <div class=" w-full flex justify-center">
        <div class=" w-full lg:w-1/2 text-center">
          <div class=" text-lg font-bold mb-5">New opportunities</div>
          <p>
            All these years, individuals have always wanted to venture into
            agriculture, but barriers such as lack of technical knowledge,
            access to land, inadequate finance and unavailability of produce off
            takers etc have prevented such people. <b>A farm for me</b> has
            removed such barriers by way of :
          </p>
        </div>
      </div>

      <div class=" mt-14 w-full flex justify-center">
        <div class=" flex space-x-10 w-full lg:w-5/6">
          <div class=" w-1/3 rounded-xl p-6 h-96 bg-gray-300 relative">
            <div class=" absolute bottom-6">
              <div class=" text-base font-bold">Technology</div>
              <div class=" mt-1 text-sm font-normal">
                Taking maximum advantage of technology to sponsor farms and earn
                very cool returns without a physical involvement.
              </div>
            </div>
          </div>
          <div class=" w-1/3 rounded-xl p-6 h-96 bg-gray-300 relative">
            <div class=" absolute bottom-6">
              <div class=" text-base font-bold">Partnerships</div>
              <div class=" mt-1 text-sm font-normal">
                Fostering partnerships with farmers and necessary stakeholder we
                trust to run activities on our farms.
              </div>
            </div>
          </div>
          <div class=" w-1/3 rounded-xl p-6 h-96 bg-gray-300 relative">
            <div class=" absolute bottom-6">
              <div class=" text-base font-bold">Analytics</div>
              <div class=" mt-1 text-sm font-normal">
                Researching, analysing and gathering industry data helps drive
                higher returns on your investments.
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class=" mt-44 w-full flex justify-center">
        <div class=" w-5/6">
          <h3 class="text-center text-lg font-bold mb-5">Our farms.</h3>
          <p class="text-center text-base font-normal">
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

        <!-- <div class=" medium-padding grid grid-cols-1 lg:grid-cols-2 gap-5">
             <div class=" px-8 lg:px-14 xl:px-20 py-4 lg:py-6 xl:py-10 brown-card">

               <img src="~/static/img/blog/safe-and-secure-icon.png" />
               <h4 class=" small-padding">Transparent</h4>
               <p class=" mt-5">We know that every cent counts and budgets need to be clear. We will always be upfront with you about what our services will cost.</p>

             </div>
             
             <div class=" px-8 lg:px-20 py-4 lg:py-10 voilet-card">
               <img src="~/static/img/blog/transparent-icon.png" />
               <h4 class=" small-padding">Safe and secured</h4>
               <p class=" mt-5">Your cards and other personal data are protected with an AES-256 bit encryption to ensure that your data doesn’t get into the wrong hands.</p>
             </div>
           </div> -->
      </div>
    </div>

    <div class="py-16 ">
      <div class=" bg-gray-300 rounded-xl h-96 w-full"></div>

      <div class=" w-full flex justify-center mt-12">
        <div class=" w-full lg:w-1/2 text-center">
          <div class=" text-lg font-bold mb-5">
            Well-tailored packages to meet your investment needs.
          </div>
          <p>
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
          <div class=" px-6 py-12 bg-gray-200 w-1/3 rounded-md">
              <div class=" font-bold text-base">Individual Investor</div>
              <div class="text-sm font-normal mt-6">
                Appropriate for individuals/new investors looking to enlarge their range of investments with a tangible asset.
              </div>

              <div class=" mt-6">
                <ul class=" space-y-3">
                  <li class=" flex space-x-4 items-center">
                      <input type="checkbox" name="" id=""> <label for=""> Purchase of crop/animal farm.</label>
                  </li>
                  <li class=" flex space-x-4 items-center">
                      <input type="checkbox" name="" id=""> <label for=""> Minimum of 1 unit.</label>
                  </li>
                  <li class=" flex space-x-4 items-center">
                      <input type="checkbox" name="" id=""> <label for=""> Purchase of crop/animal farm.</label>
                  </li>
                  <li class=" flex space-x-4 items-center">
                      <input type="checkbox" name="" id=""> <label for="">Minimum of 1 unit</label>
                  </li>
                </ul>
              </div>

              <div class=" mt-6 text-sm uppercase text-gray-500 font-bold">STARTING AT</div>
              <div class=" mt-2 text-lg font-bold">GHS 2,000</div>

              <div class=" mt-8 text-base font-bold">
                Get Started 
              </div>
          </div>
          <div class=" shadow-md rounded-md px-6 py-12 bg-white border border-gray-200  w-1/3">
              <div class=" font-bold text-base">Institutional Investor</div>
              <div class="text-sm font-normal mt-6">
                Appropriate for institutions and high capacity investors looking to enlarge their range of investments with a tangible asset.
              </div>

              <div class=" mt-6">
                <ul class=" space-y-3">
                  <li class=" flex space-x-4 items-center">
                      <input type="checkbox" name="" id=""> <label for=""> Purchase of crop/animal farm.</label>
                  </li>
                  <li class=" flex space-x-4 items-center">
                      <input type="checkbox" name="" id=""> <label for=""> Minimum of 20 units.</label>
                  </li>
                  <li class=" flex space-x-4 items-center">
                      <input type="checkbox" name="" id=""> <label for=""> Purchase of crop/animal farm.</label>
                  </li>
                  <li class=" flex space-x-4 items-center">
                      <input type="checkbox" name="" id=""> <label for=""> Minimum of 20 units.</label>
                  </li>
                </ul>
              </div>

              <div class=" mt-6 text-sm uppercase text-gray-500 font-bold">STARTING AT</div>
              <div class=" mt-2 text-lg font-bold">GHS 22,000</div>

              <div class=" mt-8 text-base font-bold">
                Get Started 
              </div>
          </div>
          <div class=" px-6 py-12 bg-gray-200 w-1/3 rounded-md">
              <div class=" font-bold text-base">Institutional Investor</div>
              <div class="text-sm font-normal mt-6">
                Appropriate for institutions and high capacity investors looking to enlarge their range of investments with a tangible asset.
              </div>

              <div class=" mt-6">
                <ul class=" space-y-3">
                  <li class=" flex space-x-4 items-center">
                      <input type="checkbox" name="" id=""> <label for=""> Purchase of crop/animal farm.</label>
                  </li>
                  <li class=" flex space-x-4 items-center">
                      <input type="checkbox" name="" id=""> <label for=""> Minimum of 20 units.</label>
                  </li>
                  <li class=" flex space-x-4 items-center">
                      <input type="checkbox" name="" id=""> <label for=""> Purchase of crop/animal farm.</label>
                  </li>
                  <li class=" flex space-x-4 items-center">
                      <input type="checkbox" name="" id=""> <label for=""> Minimum of 20 units.</label>
                  </li>
                </ul>
              </div>

              <div class=" mt-6 text-sm uppercase text-gray-500 font-bold">STARTING AT</div>
              <div class=" mt-2 text-lg font-bold">GHS 50,000</div>

              <div class=" mt-8 text-base font-bold">
                Get Started 
              </div>
          </div>
      </div>

      </div>
    </div>


    <div class=" py-12">

    </div>

   <!--  <div class="text-center extra-big-padding">
      <h3>
        We are excited <span>helping achieve the sustainable</span> development
        goals.
      </h3>
      <div class=" grid grid-cols-3 small-padding gap-5">
        <img src="~/static/img/farm/SDG-goal-01.png" />
        <img src="~/static/img/farm/SDG-goal-02.png" />
        <img src="~/static/img/farm/SDG-goal-05.png" />
        <img src="~/static/img/farm/SDG-goal-08.png" />
        <img src="~/static/img/farm/SDG-goal-09.png" />
        <img src="~/static/img/farm/SDG-goal-15.png" />
      </div>
    </div>

    <div class="medium-padding">
      <div
        class="gray-card grid grid-cols-1 lg:grid-cols-2 py-16 gap-5 big-side-padding"
      >
        <div>
          <h3>
            Stay connected wherever <span>you are, whenever you want.</span>
          </h3>
          <p class="small-padding">
            Download our mobile app now from any of the app stores and stay
            up-to-date with progress on your investments.
          </p>
          <div class="flex small-padding">
            <img
              src="~/static/img/summary/google-playstore.png"
              class=" mr-2 lg:mr-5 w-3/6 lg:w-full"
            />
            <img
              src="~/static/img/summary/apple-appstore.png"
              class="w-3/6 lg:w-full"
            />
          </div>
        </div>
        <div>
        </div>
      </div>
    </div>

    <div class="medium-padding big-side-padding">
      <h3 class=" text-center">
        A few nice things that our <span>customers</span> are saying
        <span>about us.</span>
      </h3>
      <div class=" small-padding">
        <div class=" grid grid-cols-1 lg:grid-cols-2 gap-10 xl:gap-14">
          <div class="gray-card pt-14 px-8 pb-1 rounded-2xl">
            <p>
              I invested in A poultry farm last year August. I was skeptical but
              when I saw my returns, I was so happy that I have decided to
              invest in 3 more farms and the diversified package. This is
              awesome and I thank the team for their 24/7 customer support.
            </p>
            <hr />
            <div class="flex p-2">
              <img src="~/static/img/mgt-board/josh.jpg" class="avatar mr-4" />
              <div>
                <p>Jen Sokpoe</p>
                <p class=" text-sm">Teacher</p>
              </div>
            </div>
          </div>

          <div class="gray-card pt-14 px-8 pb-1 rounded-2xl">
            <p>
              I invested in A poultry farm last year August. I was skeptical but
              when I saw my returns, I was so happy that I have decided to
              invest in 3 more farms and the diversified package. This is
              awesome and I thank the team for their 24/7 customer support.
            </p>
            <hr />
            <div class="flex p-2">
              <img src="~/static/img/mgt-board/josh.jpg" class="avatar mr-4" />
              <div>
                <p>Noah Alorwu</p>
                <p class=" text-sm">National Service Personnel</p>
              </div>
            </div>
          </div>

          <div class="gray-card pt-14 px-8 pb-1 rounded-2xl">
            <p>
              I invested in A poultry farm last year August. I was skeptical but
              when I saw my returns, I was so happy that I have decided to
              invest in 3 more farms and the diversified package. This is
              awesome and I thank the team for their 24/7 customer support.
            </p>
            <hr />
            <div class="flex p-2">
              <img src="~/static/img/mgt-board/josh.jpg" class="avatar mr-4" />
              <div>
                <p>Fiifi Manaf</p>
                <p class=" text-sm">University student</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="big-side-padding medium-padding">
      <div
        class="deep-green-card px-4 lg:px-28 xl:px-56 py-10 lg:py-14 xl:py-20 text-center relative"
      >
        <img
          src="~/static/img/summary/newsletter-illustration.png"
          class="newsletter-bg"
        />
        <h4 class=" text-white">Sign up for our promotions and newsletters.</h4>

        <p class=" py-12 text-white">
          We may not give out a plot of land for free. But once in a while, we
          will be giving out discount offers and tips and tricks you don’t want
          to miss.
        </p>
        <form class="w-full lg:flex" @submit.prevent="NewsLetterSubscribe">
          <input
            class="app-input w-full lg:auto mr-4"
            required
            placeholder="Enter your email here…"
            type="email"
            v-model="email"
          />

          <div class=" pt-5 lg:pt-0">
            <button class="app-button w-full" type="submit">Send</button>
          </div>
        </form>
      </div>
    </div> -->
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
          img : '/img/farm/pepper-farm.png'
        },
        {
          id:2,
          name : 'Cassava farm',
          img : '/img/farm/cassava-farm.jpg'
        },
        {
          id:3,
          name : 'Chilli farm',
          img : '/img/farm/chilli-farm.jpg'
        }
      ]
    }
  }
};
</script>

<style>
.brown-card {
  background: #ffe3d5 0% 0% no-repeat padding-box;
  border-radius: 15px;
  opacity: 1;
}

.voilet-card {
  background: #ffc9ee 0% 0% no-repeat padding-box;
  border-radius: 15px;
  opacity: 1;
}

.green-card {
  background: #f4fff0 0% 0% no-repeat padding-box;
  opacity: 1;
}

.deep-green-card {
  background: transparent linear-gradient(269deg, #55893f 0%, #206e00 100%) 0%
    0% no-repeat padding-box;
  opacity: 1;
  border-radius: 15px;
}

.read-more {
  color: #206e00;
  font-weight: 700;
}

.newsletter-bg {
  position: absolute;
  right: 0;
  bottom: 0;
}
</style>
